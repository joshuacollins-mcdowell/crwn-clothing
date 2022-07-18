import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styled';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shoppingicon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CardIcon
