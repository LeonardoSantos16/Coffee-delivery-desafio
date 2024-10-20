import { CoffeeCard } from "../../components/CoffeeCard"
import { Header } from "../../components/Header"
import { Intro } from "../../components/Intro"
import { HomeContainer, ListCard } from "./styles"
import { CoffeeType } from "../../components/CoffeeCard"


export function Home(){
    const coffee = [
        {
            id: 1,
            title: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            tags: ["tradicional"],
            price: 9.91,
            image: "/images/CoffeeTradicional.svg"
        },
        {
            id: 2,
            title: "Expresso Americano",
            description: "Expresso diluído, menos intenso que o tradicional",
            tags: ["tradicional"],
            price: 9.92,
            image: "images/americano.svg"
        },
        {
            id: 3,
            title: "Expresso Cremoso",
            description: "Café expresso tradicional com espuma cremosa",
            tags: ["tradicional"],
            price: 9.90,
            image: "images/cremoso.svg"
        },
        {
            id: 4,
            title: "Expresso Gelado",
            description: "Bebida preparada com café expresso e cubos de gelo",
            tags: ["tradicional", "gelado"],
            price: 9.90,
            image: 'images/gelado.svg'
        },
        {
            id: 5,
            title: "Café com Leite",
            description: "O tradicional café feito com água quente e grãos moídos",
            tags: ["tradicional", "com leite"],
            price: 9.90,
            image: "images/cafeleite.svg"
        },
        {
            id: 6,
            title: "Latte",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            tags: ["tradicional", "com leite"],
            price: 9.90,
            image: "images/latte.svg"
        },
        {
            id: 7,
            title: "Capuccino",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            tags: ["tradicional", "com leite"],
            price: 9.90,
            image: "images/capuccino.svg"
        },
        {
            id: 8,
            title: "Macchiato",
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            tags: ["tradicional", "com leite"],
            price: 9.90,
            image: "images/macchiato.svg"
        },
        {
            id: 9,
            title: "Mocaccino",
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            tags: ["tradicional", "com leite"],
            price: 9.90,
            image: "images/mocaccino.svg"
        },
        {
            id: 10,
            title: "Chocolate Quente",
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            tags: ["especial", "com leite"],
            price: 9.90,
            image: "images/chocolate-quente.svg"
        },
        {
            id: 11,
            title: "Cubano",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            tags: ["especial", "Alcoólico", "gelado"],
            price: 9.90,
            image: "images/cubano.svg"
        },
        {
            id: 12,
            title: "Havaiano",
            description: "Bebida adocicada preparada com café e leite de coco",
            tags: ["especial"],
            price: 9.90,
            image: "images/havaiano.svg"
        },
        {
            id: 13,
            title: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            tags: ["especial"],
            price: 9.90,
            image: "images/arabe.svg"
        },
        {
            id: 14,
            title: "Irlandês",
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            tags: ["especial"],
            price: 9.90,
            image: "images/irlandes.svg"
        }
        



    ]
    return(
        <HomeContainer>
            <Header/>
            <Intro />
            <h1>Nossos cafés</h1>
            <ListCard>
                {
                    coffee.map((coffe) => {
                        return (
                            <CoffeeCard key={coffe.id} CoffeProps={coffe}/>
                        )
                    }
                    )
                }
            </ListCard>
            
        </HomeContainer>
    )
}