import coffee from '../../assets/coffee.svg'
import { ShoppingCart, Package, Timer, Coffee  } from "phosphor-react";
import { IntroContainer, Information, Title, Items, ImageInfo } from './styles';
export function Intro(){
    return(
        <IntroContainer>
            <Information>
                <Title>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <h3>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </h3>
                </Title>
                <Items>
                    <div className='line1'>
                        <div className='item'>
                            <div className='icon'>
                            <ShoppingCart size={16} color='white' weight="fill" />
                            </div>
                            <p>Compra simples e segura</p>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <Package size={16}  color='white' weight='fill' />
                            </div>
                            <p>Embalagem mantém o café intacto</p>
                        </div>

                    </div>
                    <div className='line2'>
                        <div className='item'>
                            <div className='icon'>
                                <Timer size={16} color="#ffffff" weight="fill" />
                            </div>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <Coffee size={16} color="#ffffff" weight="fill" /> 
                            </div>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </div>
                </Items>
            </Information>
            <ImageInfo>
                <img src={coffee} alt="" />
            </ImageInfo>
        </IntroContainer>
    )
}