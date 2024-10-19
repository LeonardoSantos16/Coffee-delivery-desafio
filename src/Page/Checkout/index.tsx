import { MapPin, CreditCard, Bank, Money, CurrencyDollar } from "phosphor-react";
import { CheckoutCard } from "../../components/CheckoutCard";
import { addressUser, CartContext } from '../../contexts/CartContext';
import { theme } from "../../styles/theme";
import {
    Container, ContainerBody, FormSection, BackgroundBox, TitleForm, Title, AddressForm,
    Input, Location, MethodPayment, Button, OrderItem, CheckoutSection, CountOrder, ItensCount, TotalPrice,
    ButtonConfirm, RadioContainer
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
    cep: z.string().min(1, "CEP é obrigatório"),
    street: z.string().min(1, "Rua é obrigatória"),
    numberAddress: z.string()
        .min(1, "Número é obrigatório")
        .transform((val) => parseInt(val, 10)),
    complement: z.string().optional(),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatória"),
    uf: z.string().min(2, "UF é obrigatória"),
    paymentMethod: z.enum(["Cartão de credito", "Cartão de debito", "Dinheiro"])
});

export function Checkout() {
    
    const { cart, totalItems, addUser } = useContext(CartContext);
    
    const [totalPrice, setTotalPrice] = useState(1);
    const navigate = useNavigate();
    const [active, setActive] = useState('');
    type AddressFormData = z.infer<typeof schema>;
    
    const { register, handleSubmit, formState: { errors } } = useForm<AddressFormData>({
        resolver: zodResolver(schema),
    });

    const handleUserSubmit: SubmitHandler<AddressFormData> = (data) => {
        addUser(data);
        navigate('/success');
    };

    function handleActivePayment(method: string) {
        setActive(method);
    }

    useEffect(() => {
        setTotalPrice(totalItems + 3.5);
    }, [totalItems]);

    return (
        <Container>
            <Header />
            <ContainerBody>
                <FormSection id="order" onSubmit={handleSubmit(handleUserSubmit)}>
                    <h1>Complete seu pedido</h1>
                    <BackgroundBox>
                        <TitleForm>
                            <MapPin size={22} color={theme["yellow-dark"]} />
                            <Title>
                                <h1>Endereço de Entrega</h1>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </Title>
                        </TitleForm>
                        <AddressForm>
                            <Input {...register("cep")} type="text" placeholder="CEP" />
                            {errors.cep && <span>{errors.cep.message}</span>}
                            <Input {...register("street")} type="text" placeholder="Rua" />
                            {errors.street && <span>{errors.street.message}</span>}
                            <Location>
                                <Input {...register("numberAddress")} type="number" placeholder="Número" />
                                {errors.numberAddress && <span>{errors.numberAddress?.message}</span>}
                                <Input {...register("complement")} type="text" placeholder="Complemento" />
                            </Location>

                            <Location>
                                <Input {...register("bairro")} type="text" placeholder="Bairro" />
                                {errors.bairro && <span>{errors.bairro?.message}</span>}

                                <Input {...register("city")} type="text" placeholder="Cidade" />
                                {errors.city && <span>{errors.city?.message}</span>}

                                <Input {...register("uf")} type="text" placeholder="UF" maxLength={2} />
                                {errors.uf && <span>{errors.uf?.message}</span>}
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
                            <RadioContainer $isactive={active === 'creditCard'}>
                                <input type="radio" id="creditCard" {...register("paymentMethod")} value="Cartão de credito" onClick={() => handleActivePayment('creditCard')} />
                                <span className="radio-label">
                                    <CreditCard size={16} color={theme.purple} />
                                    CARTÃO DE CRÉDITO
                                </span>
                            </RadioContainer>

                            <RadioContainer $isactive={active === 'debitCard'}>
                                <input type="radio" id="debitCard" {...register("paymentMethod")} value="Cartão de debito" onClick={() => handleActivePayment('debitCard')} />
                                <span className="radio-label">
                                    <Bank size={16} color={theme.purple} />
                                    CARTÃO DE DÉBITO
                                </span>
                            </RadioContainer>

                            <RadioContainer $isactive={active === 'money'}>
                                <input type="radio" id="money" {...register("paymentMethod")} value="Dinheiro" onClick={() => handleActivePayment('money')} />
                                <span className="radio-label">
                                    <Money size={16} color={theme.purple} />
                                    DINHEIRO
                                </span>
                            </RadioContainer>
                        </MethodPayment>
                    </BackgroundBox>
                </FormSection>
                <CheckoutSection>
                    <h1>Cafés selecionados</h1>
                    <BackgroundBox>
                        <OrderItem>
                            {
                                cart.map((car) => {
                                    return (
                                        <CheckoutCard coffeCart={car} key={car.id} />
                                    );
                                })
                            }
                        </OrderItem>
                        <CountOrder>
                            <ItensCount>
                                <p>Total de itens</p>
                                <span>R$ {totalItems.toFixed(2)}</span>
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
                        <ButtonConfirm type="submit" form="order">
                            CONFIRMAR PEDIDO
                        </ButtonConfirm>
                    </BackgroundBox>
                </CheckoutSection>
            </ContainerBody>
        </Container>
    );
}
