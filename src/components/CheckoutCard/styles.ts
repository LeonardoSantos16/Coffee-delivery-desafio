import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const Container = styled.div`
     width: 100%;
`
export const ChechoutCardContainer = styled.div`
    width: 100%;
    height: 8rem;
    background-color: ${(props) => props.theme['base-card']};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 4px;
    gap: 59px;
    align-items: flex-start;

    >span{

        width: 55px;
        height: 21px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
        color: #574F4D;

    }
`

export const InfoCoffe = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    width: 25.5rem;
    height: 6.4rem;
    

    >img{
        width: 6.4rem;
        height: 6.4rem;
    }


`

export const ActionsCoffe = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
 
    >h2{
        height: 21px;

        ${fonts.textM}
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const ButtonActions = styled.div`
    display: flex;
    gap: .8rem;
    height: 3.2rem;
    align-items: center;

   
    
    >span{
        width: 55px;
        height: 19px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        text-transform: uppercase;
        color: #574F4D;
    }
`
export const Line = styled.div`
    margin: 2.4rem 0;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const ButtonRemove = styled.button`
     display: flex;
        flex-direction: row;
        cursor: pointer;
        align-items: center;
        padding: 0.6rem .8rem;
        gap: .4rem;
        width: 9rem;
        height: 3.8rem;
        background: ${(props) => props.theme['base-button']};
        border-radius: .6rem;
        border: none;
`