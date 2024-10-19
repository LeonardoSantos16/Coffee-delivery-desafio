import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 1120px;
    height: 104px;
    margin: 0 auto;
    
`
export const HeaderMenu = styled.div`
    width: 1120px;
    display: flex;
    justify-content: space-between;

    padding: 32px 0px;
    margin: 0 auto;
    >img{
        width: 85px;
        height: 40px;
    }
`

export const CardHeader = styled.div`
    display: flex;
    gap: 12px;
   
`
export const CardLocation = styled.div`
    color: #8047F8;
    padding: 8px;
    width: 143px;
    height: 38px;
    background: #EBE5F9;
    border-radius: 6px;
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 1.4rem;
    line-height: 130%;
    >h2{
        ${fonts.textS}
    }
`


export const ButtonCheckout = styled.button`
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    align-items: center;
    padding: 8px;
    width: 38px;
    height: 38px;
    background: #F1E9C9;
    border-radius: 6px;
    border: none;
    position: relative;
`

export const LabelCheckout = styled.label`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;
    background: #C47F17;
    border-radius: 999px;
    position: absolute;
    >h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        color: #FFFFFF;

    }
   


`

