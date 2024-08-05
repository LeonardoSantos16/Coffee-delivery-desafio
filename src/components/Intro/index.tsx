import coffee from '../../assets/coffee.svg'
import { ShoppingCart, Package, Timer, Coffee  } from "phosphor-react";
import { IntroContainer, Information, Title, Items, ImageInfo } from './styles';
import { theme } from '../../styles/theme';
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
                    
                        <div className='item'>
                            <div className='icon'>
                            <ShoppingCart size={16} color={theme.white} weight="fill" />
                            </div>
                            <p>Compra simples e segura</p>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <Package size={16} color={theme.white} weight='fill' />
                            </div>
                            <p>Embalagem mantém o café intacto</p>
                    </div>
                        <div className='item'>
                            <div className='icon'>
                                <Timer size={16} color={theme.white} weight="fill" />
                            </div>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <Coffee size={16} color={theme.white} weight="fill" /> 
                            </div>
                            <p>O café chega fresquinho até você</p>
                       
                    </div>
                </Items>
            </Information>
            <ImageInfo>
                <img src={coffee} alt="imagem coffee delivery" />
            </ImageInfo>
        </IntroContainer>
    )
}