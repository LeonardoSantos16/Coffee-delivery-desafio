//import coffeTrad from '../../assets/CoffeeTradicional.svg'
import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container, Tags, Buy, Price, ItemCart} from './styles'
import { QuantityItem } from '../QuantityItem'
import { useState, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CoffeProp, CoffeeBuy } from '../../types'
export interface CoffeeType{
    id: number
    title: string
    description: string
    tags: string[]
    price: number
    image: string
}

export interface coffeProps{
    CoffeProps: CoffeeType
}

export function CoffeeCard({ CoffeProps } : coffeProps){
    const { addCart, cart} = useContext(CartContext);

    function handleAddCart(){
        const coffeCart : CoffeeBuy = {
            id: CoffeProps.id,
            title: CoffeProps.title,
            description: CoffeProps.description,
            tags: CoffeProps.tags,
            price: CoffeProps.price,
            image: CoffeProps.image,
            quantity: quantity
        }
        addCart(coffeCart)
       
    }

    const theme = useTheme()
    const [quantity, setQuantity] = useState(1);

    function handleIncrementQuantity(){
        setQuantity((state) => state + 1)
    }

    function handleDecrementQuantity(){
        setQuantity((state) => state - 1)
    }
    return(
        <Container>
            <img src={CoffeProps.image}  alt={CoffeProps.title}/>
            <Tags> 
                { CoffeProps.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                )) }
            </Tags>
            <h1> { CoffeProps.title }</h1>
            <h3> { CoffeProps.description }</h3>

            <Buy>
                <Price>
                    <span>R$</span>
                    <span> { CoffeProps.price.toFixed(2) }</span>
                </Price>  
                <ItemCart>
                    <QuantityItem quantityMinus={handleDecrementQuantity} 
                    quantityPlus={handleIncrementQuantity}
                    quantity={quantity}
                    />
                    <button onClick={handleAddCart}>
                        <ShoppingCart size={22} color={theme['base-card']} weight="fill"/>
                    </button>
                </ItemCart>
                 
            </Buy>
        </Container>
    )
}