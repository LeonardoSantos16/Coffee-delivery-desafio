import styled from "styled-components";

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
    >.cardLoc{
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
        
    }
`

export const ButtonCheckout = styled.button`
    cursor: pointer;
    align-items: center;
    padding: 8px;
    width: 38px;
    height: 38px;
    background: #F1E9C9;
    border-radius: 6px;
`

/*
font-family: 'Roboto';
font-style: normal;
font-weight: 400;

*/

