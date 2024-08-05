import { MapPin, CreditCard, Bank, Money, CurrencyDollar } from "phosphor-react";
import { CheckoutCard } from "../../components/CheckoutCard";
import { CartContext } from '../../contexts/CartContext'
import { theme } from "../../styles/theme";
import { Container, ContainerBody, FormSection, BackgroundBox, TitleForm, Title, AddressForm,
    Input, Location, MethodPayment, Button, OrderItem, CheckoutSection, CountOrder, ItensCount, TotalPrice,
    ButtonConfirm
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";

export function Checkout(){
    const { cart, totalItems } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(1);
    useEffect(() => {
        // Atualiza o preço total quando totalItems mudar
        setTotalPrice((totalItems + 3.5));
        
      }, [totalItems]);
    return(
        <Container>
        <Header/>
        <ContainerBody>
            <FormSection>
                <h1>Complete seu pedido</h1>
                <BackgroundBox>
                        <TitleForm>
                            <MapPin size={22} color={theme["yellow-dark"]}/>
                            <Title>
                                <h1>Endereço de Entrega</h1>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </Title>
                        </TitleForm>
                        <AddressForm>
                            <Input type="text" placeholder="CEP"/>
                            <Input type="text" placeholder="Rua"/>
                            <Location>
                                <Input type="number" placeholder="Número"/>
                                <Input type="text" placeholder="Complemento"/>
                            </Location>

                            <Location>
                                <Input type="text" placeholder="Bairro"/>
                                <Input type="text" placeholder="Cidade" />
                                <Input type="text" placeholder="UF"/>
                            </Location>
                        </AddressForm>
                </BackgroundBox>
                <BackgroundBox>
                    <TitleForm>
                        <CurrencyDollar size={22} color={theme["purple"]} />
                        <Title>
                            <h1>Pagamento</h1>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </Title>
                    </TitleForm>
                    <MethodPayment>
                        <Button>
                            <CreditCard size={16} color={theme.purple} />
                            CARTÃO DE CRÉDITO
                        </Button>
                        <Button>
                            <Bank size={16} color={theme.purple}/>
                            CARTÃO DE DÉBITO
                        </Button>
                        <Button>
                            <Money size={16} color={theme.purple}/>
                            DINHEIRO
                        </Button>
                    </MethodPayment>
                </BackgroundBox>
            </FormSection>
            <CheckoutSection>
                <h1>Cafés selecionados</h1>
                <BackgroundBox>
                    
                    <OrderItem>
                    {
                    cart.map((car) => { 
                    return(
                    <CheckoutCard coffeCart={car} />
                    )
                    }
                    )
                }
                </OrderItem>
                <CountOrder>
                    <ItensCount>
                        <p>Total de itens</p> 
                        <span>R$ { totalItems.toFixed(2) }</span>
                    </ItensCount>
                    <ItensCount>
                        <p>Entrega</p>
                        <span>R$ 3,50</span>
                    </ItensCount>
                    <TotalPrice>
                        <p>Total</p>
                        <span>R$ {totalPrice.toFixed(2)}</span>
                    </TotalPrice>  
                </CountOrder>
                <ButtonConfirm>
                    CONFIRMAR PEDIDO
                </ButtonConfirm>
                </BackgroundBox>
            </CheckoutSection>
        </ContainerBody>
        </Container>
    )
}