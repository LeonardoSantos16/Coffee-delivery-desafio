import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from 'react-router-dom'
import  logo from '../../assets/Logo.svg'
import { HeaderContainer, HeaderMenu, CardHeader, ButtonCheckout } from "./styles";
export function Header(){
    return(
        <HeaderContainer>
            <HeaderMenu>
                <img src={logo} alt="" />
                <CardHeader>  
                    <div className="cardLoc">
                        <MapPin size={22} weight="fill" color="#8047F8" />
                        Porto Alegre, RS
                    </div>
                    <ButtonCheckout>
                        <NavLink to="/vasco">
                        <ShoppingCart  size={22} weight="fill" color="#C47F17" />
                        </NavLink>
                    </ButtonCheckout>
                </CardHeader>

            </HeaderMenu>
        </HeaderContainer>
    )
}

