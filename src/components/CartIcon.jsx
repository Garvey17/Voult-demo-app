import { ShoppingCart } from 'lucide-react';
// components/CartIcon.jsx
import { useCartStore } from '../store/cartStore';


const CartIcon = () => {
    const totalItems = useCartStore(state => state.getTotalItems());

  return (
    <div className="cart-icon relative">
      <ShoppingCart />
      {totalItems > 0 && <span className='cart-badge absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalItems}</span>}
    </div>
  );
};

export default CartIcon;

                