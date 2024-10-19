
export interface CoffeeBuy {
    id: number;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
    quantity: number; // Adicionando a propriedade quantity para controle de quantidade
}

export interface addressUser {
    cep: number; // CEP deve ser string caso inclua zeros à esquerda
    street: string;
    numberAddress: number; // Pode ser string se você quiser permitir números como "123A"
    complement?: string; // Complemento é opcional
    bairro: string;
    city: string;
    uf: string; // Unidade Federativa
}

export interface CartContextProps {
    cart: CoffeeBuy[];
    addCart: (coffe: CoffeeBuy) => void;
    removeCart: (cart: CoffeeBuy) => void;
    quantityChangeCart: (cart: CoffeeBuy, newQuantity: number) => void;
    addUser: (user: addressUser) => void;
    user: addressUser | null; // Pode ser null inicialmente
    totalItems: number; // Total de itens em valor monetário
    quantityItemsCard: number; 
}

export interface CoffeeBuy{
    id: number
    title: string
    description: string
    tags: string[]
    price: number
    image: string
    quantity: number
}

export interface  CoffeProp{
    coffe: CoffeeBuy
}

interface CoffeeProps{
    cart: CoffeeBuy[]
    addCart: (coffe : CoffeeBuy) => void
    totalItems: number
    removeCart: (cart : CoffeeBuy) => void
    quantityChangeCart: (cart : CoffeeBuy, newQuantity : number) => void
    addUser: (user : addressUser) => void
    user: addressUser; 
    quantityItemsCard: number
}

export interface addressUser{
    cep: number
    street: string
    numberAddress: number
    complement?: string
    bairro: string
    city: string
    uf: string
    paymentMethod: string
}