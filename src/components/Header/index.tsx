import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from 'react-router-dom'
import  logo from '../../assets/Logo.svg'
import { HeaderContainer, HeaderMenu, CardHeader, ButtonCheckout, CardLocation } from "./styles";
import { theme } from "../../styles/theme";
export function Header(){
    return(
        <HeaderContainer>
            <HeaderMenu>
                <img src={logo} alt="" />
                <CardHeader>  
                    <CardLocation>
                        <MapPin size={22} weight="fill" color={theme.purple} />
                        <h2>Porto Alegre, RS</h2>
                    </CardLocation>
                    <ButtonCheckout>
                        <NavLink to="/pedido">
                        <ShoppingCart  size={22} weight="fill" color= {theme["yellow-dark"]} />
                        </NavLink>
                    </ButtonCheckout>
                </CardHeader>

            </HeaderMenu>
        </HeaderContainer>
    )
}

