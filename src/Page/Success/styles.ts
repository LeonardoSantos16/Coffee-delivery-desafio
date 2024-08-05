import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const Seila = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Main = styled.main`
    margin-top: 8rem;
    height: 38rem;
    width: 112rem;
    display: flex;
    gap: 10rem;
    align-items: flex-end;

    > img {
        width: 49.2rem;
        height: 29rem;
    }

    span {
        color: ${(props) => props.theme['base-text']};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
    }
`;

export const Order = styled.div`
    width: 55rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    > .title h1 {
        color: ${(props) => props.theme['yellow-dark']};
    }
`;

export const OrderConfirmed = styled.div`
    position: relative;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: flex-start;
    box-sizing: border-box;
    width: 526px;
    height: 270px;
    border-radius: 6px 36px;
    background: white;
    
    p:last-child {
        width: 35rem;
    }

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        background: linear-gradient(to right, #DBAC2C, #8047F8);
        border-radius: 6px 36px;
        z-index: -1;
    }

    > .info {
        display: flex;
        gap: 1.2rem;
        align-items: center;

        .icon {
            display: inline-flex;
            justify-content: center;
            width: 32px;
            height: 32px;
            padding: 8px;
            background: ${(props) => props.theme['yellow-dark']};
            border-radius: 50%;

            &.map-pin {
                background: ${(props) => props.theme.purple};
            }

            &.timer {
                background: ${(props) => props.theme.yellow};
            }

            
        }
    }
`;

export const InfoOrder = styled.div`
    display: flex;
    flex-direction: column;

    p {
        width: 300px;
        ${fonts.textM}
        color: ${(props) => props.theme['base-text']};
    }

`;
