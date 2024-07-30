import { CoffeeCard } from "../../components/CoffeeCard"
import { Header } from "../../components/Header"
import { Intro } from "../../components/Intro"
import { HomeContainer, ListCard } from "./styles"
import { CoffeeType } from "../../components/CoffeeCard"


export function Home(){
    const coffee : CoffeeType[] = [
        {
            id: 1,
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            tags: ["tradicional"],
            price: 9.390,
            image: "../../assets/CoffeeTradicional.svg"
        },
        {
            id: 2,
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            tags: ["tradicional"],
            price: 9.91,
            image: '../../assets/CoffeeTradicional.svg'
        },
        {
            id: 2,
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            tags: ["tradicional"],
            price: 9.92,
            image: '../../assets/CoffeeTradicional.svg'
        },
        {
            id: 2,
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            tags: ["tradicional"],
            price: 9.95,
            image: '../../assets/CoffeeTradicional.svg'
        },
        {
            id: 2,
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            tags: ["tradicional", "vasco"],
            price: 9.96,
            image: '../../assets/CoffeeTradicional.svg'
        },
        {
            id: 2,
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            tags: ["tradicional"],
            price: 9.97,
            image: '../../assets/CoffeeTradicional.svg'
        },

    ]
    return(
        <HomeContainer>
            <Header/>
            <Intro />
            <ListCard>
                {
                    coffee.map((coffe) => {
                        return (
                            <CoffeeCard CoffeProps={coffe}/>
                        )
                    }
                    )
                }
            </ListCard>
            
        </HomeContainer>
    )
}