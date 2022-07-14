import './cart-icon.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shoppingicon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CardIcon
