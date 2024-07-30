import styled from "styled-components"

export const Container = styled.div`
    width: 25.6rem;
    height: 31rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    padding: 2rem;

    >img{
        width: 12rem;
        height: 12rem;
        background: none;
        margin-top: -4rem;
        margin-bottom: 1.2rem;
    }

    >h1{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
        display: flex;
        text-align: center;
        color: #403937;
        margin-top: 1.6rem;
        margin-bottom: .8rem;
    }
    >h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        text-align: center;
        color: #8D8686;
        margin-bottom: 3.3rem;
    }
`

export const Tags = styled.div`
    display: flex;
    gap: .4rem;
    height: 2rem;
    >span{
        display: flex;
        justify-content: center;
        align-items: center;
       
      
        padding: 4px 8px;
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        border-radius: 10rem;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        text-transform: uppercase;
    }
`

export const Buy = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3.8rem;
    gap: 29px;
    width: 25.6rem;
    padding: 2rem;
    
`

export const Price = styled.div`
    width: 67px;
    height: 31px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #574F4D;
    /* R$ 9,90 */

    >span:last-child{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    color: #574F4D;
    }

`

export const ItemCart = styled.div`
    width: 11.8rem;
    display: flex;
    align-items: center;

    >button{
        padding: 8px;
        width: 38px;
        height: 38px;
        background-color: ${(props) => props.theme['purple-dark']};
        border-radius: 6px;
        margin-left: 8px
    }
`