import styled from "styled-components";

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    width: 72px;
    height: 38px;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    >button{
        border: none;
        background: none;
        cursor: pointer;
    }

    >span{
        width: 20px;
        height: 21px;
        text-align: center;
        color: ${(props) => props.theme['base-title']};

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
    }
`