import styled from "styled-components";
import { theme } from "../../styles/theme";
import { fonts } from "../../styles/fonts";
export const HomeContainer = styled.div`
    width: 112rem;
    height: 100vh;

    >h1{
        ${(props) => props.theme['base-subtitle']}
        ${fonts.titleL}
        margin-bottom: 5.4rem;
    }
`

export const ListCard = styled.div`
    display: flex;
    gap: 3.2rem;
    flex-wrap: wrap;
`

