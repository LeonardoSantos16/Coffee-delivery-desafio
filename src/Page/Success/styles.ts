import styled from "styled-components";

export const Seila = styled.div`
    width: 100%;
    height: 100vh;
    
`
export const Main = styled.main`
    
    margin-top: 8rem;
    height: 38rem;
    width: 112rem;
    display: flex;
    gap: 10rem;
    align-items: flex-end;

    >img{
        width: 49.2rem;
        height: 29rem;
    }

    
`
export const Order = styled.div`
    width: 55rem;
    display: flex;
    flex-direction: column;
    
    gap: 4rem;

    >.title h1{
        color: ${(props) => props.theme['yellow-dark']};
    }
`
export const OrderConfirmed = styled.div`
  
    position: relative; /* Necessário para o pseudo-elemento */
    padding: 4rem;
    display: flex;
    
    flex-direction: column;
    gap: 3.2rem;
    align-items: flex-start;
    box-sizing: border-box;
    width: 526px;
    height: 270px;
    border-radius: 6px 36px;
    background: white; /* Cor de fundo interna, ajuste conforme necessário */
    
    p{
        width: 14rem;
    }
    p:last-child{
        width: 35rem;
    }
    &::before {
        content: '';
        position: absolute;
        top: -1px; /* Ajuste conforme a largura da borda */
        left: -1px; /* Ajuste conforme a largura da borda */
        right: -1px; /* Ajuste conforme a largura da borda */
        bottom: -1px; /* Ajuste conforme a largura da borda */
        background: linear-gradient(to right, #DBAC2C, #8047F8);
        border-radius: 6px 36px; /* Mantém o arredondamento da borda externa */
        z-index: -1; /* Coloca o pseudo-elemento atrás do conteúdo */
    }
    >.info{
        display: flex;
        gap: 1.2rem;
        align-items: center;
    
    >.icon {
            display: inline-flex; /* Garante que o background não afete outros elementos */
            justify-content: center;
            width: 32px;
            height: 32px;
            padding: 8px;
            /* Brand / Yellow Dark */
            background: #C47F17;
            border-radius: 1000px;

    }
}
`