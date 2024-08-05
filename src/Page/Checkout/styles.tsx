import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const Container = styled.div`
    width: 112rem;
    height: 100vh;
    align-items: flex-start;
`
export const ContainerBody = styled.div`
    width: 112rem;
    display: flex;
    gap: 3.2rem;
    margin-top: 4rem;

    h1{
        ${fonts.titleXS}
        color: ${(props) => props.theme['base-subtitle']}
    }
`

export const FormSection = styled.form`
    width: 64rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const Order = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    width: 64rem;
`

export const BackgroundBox = styled.div`
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    border-radius: .6rem;
    background: ${(props) => props.theme['base-card']};
`

export const TitleForm = styled.div`
    display: flex;
    gap: .8rem;
    width: 100%;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;

    >h1{
        ${fonts.textM}
        ${(props) => props.theme['base-subtitle']}
    }

    >p{
        ${fonts.textS}
        ${(props) => props.theme['base-text']}
    }
`

export const AddressForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const Input = styled.input`
    height: 4.2rem;
    padding: 1.2rem;
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    color: ${(props) => props.theme['base-text']};
    ${fonts.textS}

    Input::Placeholder{
        color: ${(props) => props.theme['base-label']};
    }
`

export const Location = styled.div`
    display: flex;
    gap: 1.2rem;
`

export const MethodPayment = styled.div`
    width: 100%;
    display: flex;
    gap: 1.2rem;
`
export const Button = styled.button`
    display: flex;
    gap: .2rem;
    align-items: center;
    padding: 16px;
    width: 100%;
    height: 5rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    border: none;
    ${fonts.buttonM}
    cursor: pointer;
`

export const OrderItem = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

`;

export const CheckoutSection = styled.div`
    width: 44.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const CountOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    height: 9.2rem;
`

export const ItensCount = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.1rem;
    color: ${(props) => props.theme['base-text']};
    ${fonts.textS}
    >p{
        color: ${(props) => props.theme['base-text']};
        ${fonts.textS}
    }
`

export const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.6rem;
    ${fonts.textL}
    width: 100%;
    color: ${(props) => props.theme['base-subtitle']};
    p{
        ${fonts.textL}
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const ButtonConfirm = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem .8rem;
    width: 100%;
    height: 46px;
    background: ${(props) => props.theme['yellow']};
    border-radius: 6px;
    ${fonts.buttonG}
    text-transform: uppercase;
    color: ${(props) => props.theme['white']};

`