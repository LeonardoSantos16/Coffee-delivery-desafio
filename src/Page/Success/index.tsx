import { Header } from "../../components/Header"
import { MapPin, Timer, CurrencyDollar } from "phosphor-react"
import { Main, Order, OrderConfirmed, Seila  } from "./styles"
import Ilustration from '../../assets/Illustration.svg'
export function Success(){
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
                            <div className="icon">
                                <MapPin size={16} color="#ffffff" weight="fill" />
                            </div>
                            <p>Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</p>
                        </div>
                        
                        <div className="info">
                            <div className="icon">
                                <Timer size={16} color="#ffffff" width="fill" />
                            </div>
                            <p>Previsão de entrega 20 min - 30 min </p>
                        </div>

                        <div className="info">
                            <div className="icon">
                                <CurrencyDollar size={16} color="#ffffff" width="fill" />
                            </div>
                                <p>Pagamento na entrega 
                                <span> Cartão de Crédito</span></p>
                            </div>
                        
                </OrderConfirmed>
                </Order>
                  <img src={Ilustration} alt="" />
            </Main>
        </Seila>
    )
}