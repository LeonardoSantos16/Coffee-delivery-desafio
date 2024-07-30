import { Container, FormSection, AddressForm, FormTitle, Input, Select, PaymentForm, ButtonGroup 
    ,Button, OrderSummary, OrderTitle, OrderItem, OrderDetails, OrderPrice, TotalPrice, ConfirmButton
 } from "./styles";
export function Pedido(){
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
              <OrderDetails>
                <p>Expresso Tradicional</p>
                <OrderPrice>R$ 9,90</OrderPrice>
              </OrderDetails>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
                <button>REMOVER</button>
              </div>
            </OrderItem>
            <OrderItem>
              <OrderDetails>
                <p>Latte</p>
                <OrderPrice>R$ 19,80</OrderPrice>
              </OrderDetails>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
                <button>REMOVER</button>
              </div>
            </OrderItem>
            <TotalPrice>Total: R$ 33,20</TotalPrice>
            <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
          </OrderSummary>
        </Container>
      );
}