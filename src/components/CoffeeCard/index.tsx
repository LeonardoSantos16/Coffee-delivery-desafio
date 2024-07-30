//import coffeTrad from '../../assets/CoffeeTradicional.svg'
import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Container, Tags, Buy, Price, ItemCart} from './styles'
import { QuantityItem } from '../QuantityItem'
import { useState } from 'react'

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
            <img src={ CoffeProps.image }  alt="" />
            <Tags> 
                { CoffeProps.tags.map((tag) => (
                    <span>{tag}</span>
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
                    <button>
                        <ShoppingCart size={22} color={theme['base-card']} weight="fill"/>
                    </button>
                </ItemCart>
                 
            </Buy>
        </Container>
    )
}