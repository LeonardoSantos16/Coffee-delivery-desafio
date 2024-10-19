import styled from "styled-components";
import { fonts } from "../../styles/fonts";
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
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    height: 12.4rem;

    >h1{
        ${fonts.titleXL}
    }
`

export const Items = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 6.6rem;
    flex-wrap: wrap; 

        >.item{
            display: flex;
            gap: 1.2rem;
            align-items: center;
        >p{
            ${fonts.textM}
            color: ${(props) => props.theme['base-text']};
        }
        .icon {
            display: inline-flex;
            justify-content: center;
            padding: 8px;
            background: #C47F17;
            border-radius: 1000px;
        }
    }
    
    >.item:nth-child(1) .icon {
        background: ${(props) => props.theme['yellow-dark']};
        
    }
    >.item:nth-child(1) {
        width: 23.1rem;
    }

    >.item:nth-child(2) .icon {
        background: ${(props) => props.theme['base-text']};
    }

    >.item:nth-child(3) .icon {
        background: ${(props) => props.theme['yellow']}; 
    }

    >.item:nth-child(4) .icon {
        background: ${(props) => props.theme['purple']};
    }

`

export const ImageInfo = styled.div`
    width: 47.6rem;
    height: 36.0rem;

`