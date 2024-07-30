import { theme } from "../../styles/theme"
import { Minus, Plus } from "phosphor-react"
import { QuantityContainer } from "./styles"

interface props {
    quantity: number
    quantityMinus: () => void
    quantityPlus: () => void
}

export function QuantityItem({ quantity, quantityMinus, quantityPlus} : props) {
    return(
        <QuantityContainer>
            <button onClick={ quantityMinus }> <Minus color={theme['purple']}/> </button>
            <span>{ quantity }</span>
            <button onClick={ quantityPlus }> <Plus color={theme['purple']}/> </button>
        </QuantityContainer>
    )
}