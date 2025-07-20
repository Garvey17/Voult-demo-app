// store/cartStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      // Initial state
      items: [],
      
      // Actions
      addItem: (product) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },
      
      removeItem: (productId) => {
        set({ items: get().items.filter(item => item.id !== productId) });
      },
      
      updateQuantity: (productId, newQuantity) => {
        if (newQuantity < 1) {
          get().removeItem(productId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
        });
      },
      
      clearCart: () => set({ items: [] }),
      
      // Derived state (computed property)
      getTotalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
      
      getTotalPrice() {
        return get().items.reduce(
          (sum, item) => sum + (item.price * item.quantity), 0
        );
      }
    }),
    {
      name: 'cart-storage', // name for localStorage
      // You can also serialize/deserialize if needed
      // partialize: (state) => ({ items: state.items }),
    }
  )
);