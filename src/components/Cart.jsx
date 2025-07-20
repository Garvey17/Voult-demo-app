// components/Cart.jsx
import { useCartStore } from '../store/cartStore';

const CartComponent = () => {
  const { 
    items, 
    totalPrice, 
    addItem, 
    removeItem, 
    updateQuantity, 
    clearCart, 
  } = useCartStore();

  const totalItems = useCartStore(state => state.getTotalItems());
  console.log(totalItems);
  

  return (
    <div className=''>

        <div className="cart p-10 bg-white rounded-2xl flex flex-col justify-center items-center min-w-1xl h-[50vh] overflow-y-scroll">
            <h2 className='font-montserrat font-bold text-xl'>Your Cart</h2>
            
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                <ul className="cart-items">
                    {items.map(item => (
                    <li key={item.id} className="cart-item">
                        <div className="item-info flex items-center gap-4">
                            <div className='w-20 '>
                                <img className='rounded-2xl' src={item.image} alt="" />
                            </div>
                            <div className='font-montserrat'>
                            <h4>{item.name}</h4>
                            <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                        
                        <div className="item-controls flex">
                            <div>
                                <span>Quantity: {""}</span>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                    className="quantity-input"
                                />
                            </div>
                        
                        <button 
                            onClick={() => removeItem(item.id)}
                            className="remove-btn bg-red-500 p-2 rounded-2xl"
                        >
                            Remove
                        </button>
                        </div>
                    </li>
                    ))}
                </ul>
                
                <div className="cart-summary">
                    <p className="total">Total: ${totalPrice.toFixed(2)}</p>
                    <div className="cart-actions">
                    <button onClick={clearCart} className="clear-btn">
                        Clear Cart
                    </button>
                    <button className="checkout-btn">
                        Proceed to Checkout
                    </button>
                    </div>
                </div>
                </>
            )}
        </div>
    </div>
  );
};

export default CartComponent;