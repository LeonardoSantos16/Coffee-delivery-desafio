import { Header } from "../../components/Header"
import { MapPin, Timer, CurrencyDollar } from "phosphor-react"
import { Main, Order, OrderConfirmed, Seila, InfoOrder  } from "./styles"
import Ilustration from '../../assets/Illustration.svg'
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { theme } from "../../styles/theme"
export function Success(){
    const { user }  = useContext(CartContext)

    return(
        <Seila>
            <Header/>
            <Main>
                <Order>
                    <div className="title">
                        <h1>Uhu! Pedido confirmado</h1>
                        <h3>Agora é só aguardar que logo o café chegará até você</h3>
                    </div>
                    
                    <OrderConfirmed>
                        <div className="info">
                            <div className="icon map-pin">
                                <MapPin size={16} color={theme.white} weight="fill" />
                            </div>

                            <InfoOrder>
                                <p>Entrega em <span> Rua {user.street}, {user.numberAddress} </span> {user.bairro} - {user.city}, {user.uf}`</p>
                            </InfoOrder>
                        </div>
                        
                        <div className="info">
                            <div className="icon timer">
                                <Timer size={16} color={theme.white} weight="fill" />
                            </div>
                            <InfoOrder>
                                <p>Previsão de entrega</p>
                                <span> 20 min - 30 min </span>
                            </InfoOrder>
                            
                        </div>

                        <div className="info">
                            <div className="icon dollar">
                                <CurrencyDollar size={16} color={theme.white} weight="fill" />
                            </div>
                            <InfoOrder>
                                <p>Pagamento na entrega </p>
                                <span>{ user.paymentMethod }</span>
                            </InfoOrder>
                        </div>
                        
                </OrderConfirmed>
                </Order>
                  <img src={Ilustration} alt="" />
            </Main>
        </Seila>
    )
}