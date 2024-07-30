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
                            Compra simples e segura
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <Package size={16}  color='white' weight='fill' />
                            </div>
                            Embalagem mantém o café intacto
                        </div>

                    </div>
                    <div className='line2'>
                        <div className='item'>
                            <div className='icon'>
                                <Timer size={16} color="#ffffff" weight="fill" />
                            </div>
                        Entrega rápida e rastreada
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <Coffee size={16} color="#ffffff" weight="fill" /> 
                            </div>
                            O café chega fresquinho até você
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