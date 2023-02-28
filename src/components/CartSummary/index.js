import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartCount = cartList.length
      const totalPriceList = cartList.map(
        cartItem => cartItem.price * cartItem.quantity,
      )
      const totalPrice = totalPriceList.reduce((a, b) => a + b, 0)
      console.log(cartCount)
      console.log(totalPrice)
      return (
        <div className="cartSummaryContainer">
          <h1 className="orderHeading">
            Order Total: <span className="totalPrice">Rs {totalPrice}/-</span>
          </h1>
          <p className="orderHeading">{cartCount} Items in cart</p>
          <button className="checkOutBtn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
