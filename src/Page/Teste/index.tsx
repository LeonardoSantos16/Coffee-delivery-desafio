import { Container, FormSection, AddressForm, FormTitle, Input, Select, PaymentForm, ButtonGroup 
    ,Button, OrderSummary, OrderTitle, OrderItem, OrderDetails, OrderPrice, TotalPrice, ConfirmButton
 } from "./styles";
import { CheckoutCard } from "../../components/CheckoutCard";
import { CartContext } from '../../contexts/CartContext'
import { useState, useContext } from "react";
export function Pedido(){
  const { cart } = useContext(CartContext);

  console.log('Carrinho de café:', cart);
    
    return (
        <Container>
          <FormSection>
            <AddressForm>
              <FormTitle>Endereço de Entrega</FormTitle>
              <Input type="text" placeholder="CEP" />
              <Input type="text" placeholder="Rua" />
              <Input type="text" placeholder="Número" />
              <Input type="text" placeholder="Complemento" />
              <Input type="text" placeholder="Bairro" />
              <Input type="text" placeholder="Cidade" />
              <Select>
                <option>UF</option>
                {/* Outras opções de estados */}
              </Select>
            </AddressForm>
            <PaymentForm>
              <FormTitle>Pagamento</FormTitle>
              <ButtonGroup>
                <Button>CARTÃO DE CRÉDITO</Button>
                <Button>CARTÃO DE DÉBITO</Button>
                <Button>DINHEIRO</Button>
              </ButtonGroup>
            </PaymentForm>
          </FormSection>
          <OrderSummary>
            <OrderTitle>Cafés selecionados</OrderTitle>
            <OrderItem>
              {
                cart.map((car) => { 
                  return(
                <CheckoutCard coffeCart={car} />
                  )
                }
                )
              }
              <TotalPrice>Total: R$ 33,20</TotalPrice>
              <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
            </OrderItem>
          </OrderSummary>
        </Container>
      );
}