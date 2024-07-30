import styled from "styled-components";

export const IntroContainer = styled.div`
    width: 100%;
    height: 54rem;
    display: flex;
    gap: 5.6rem;
    align-items: center;
    
`

export const Information = styled.div`
    width: 58rem;
    display: flex;
    flex-direction: column;
    gap: 6.6rem;
    align-items: baseline;
    margin: 0 auto;
    
   
`
export const Title = styled.div`
    /* Encontre o café perfeito para qualquer hora do dia */
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    height: 124px;
`

export const Items = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 6.6rem;
    >.line1, .line2{
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        >.item{
            display: flex;
            gap: 1.2rem;
            align-items: center;
        } 
        .icon {
            display: inline-flex; /* Garante que o background não afete outros elementos */
            justify-content: center;
            background-color: black;
            padding: 8px;
            /* Brand / Yellow Dark */
            background: #C47F17;
            border-radius: 1000px;

    }
    >.line1:first-child:{
        padding: .8rem;
        background-color: black;
        border-radius: 999px;
    }
`
export const ImageInfo = styled.div`
    width: 476px;
    height: 360px;

`