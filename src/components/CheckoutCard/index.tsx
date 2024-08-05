import { Trash } from "phosphor-react"
import { ChechoutCardContainer, InfoCoffe, ActionsCoffe, ButtonActions, Line, ButtonRemove, Container } from "./styles"
import { QuantityItem } from "../QuantityItem"
import { theme } from "../../styles/theme"
import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function CheckoutCard( { coffeCart } : any){
    const [quantity, setQuantity] = useState(coffeCart.quantity);
    const {removeCart, quantityChangeCart} = useContext(CartContext);

    const handleIncrementQuantity = () => {
        setQuantity((prevQuantity: number) => prevQuantity + 1);
      };
    
      const handleDecrementQuantity = () => {
        setQuantity((prevQuantity: number) => Math.max(prevQuantity - 1, 0));
      };
    

    function handleRemoveCart(){
        removeCart(coffeCart)
    }

    useEffect(() => {
        // Sincronize o estado local com o contexto quando a quantidade muda
        quantityChangeCart(coffeCart, quantity);
      }, [quantity]);

    return(
        <Container>
        <ChechoutCardContainer>
            <InfoCoffe>
                <img src={coffeCart.image} />
                <ActionsCoffe>
                    <h2>{coffeCart.title}</h2>
                    <ButtonActions>
                      
                        <QuantityItem quantityMinus={handleDecrementQuantity} 
                            quantityPlus={handleIncrementQuantity}
                            quantity={quantity}
                        />
                     
                        <ButtonRemove onClick={handleRemoveCart}>
                            <Trash size={16} color={theme.purple}/>
                            <span>Remover</span>
                        </ButtonRemove>
                    </ButtonActions>
                    
                </ActionsCoffe>

            </InfoCoffe>
            <span> R${coffeCart.price.toFixed(2)}</span>
            
        </ChechoutCardContainer>
        <Line/>
        </Container>
    )
}