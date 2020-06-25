import React from 'react';
import {Button} from './styles';

 import Logo from '../../assets/logo.png'

export interface Props {
    selected?:boolean;
    isHome?:boolean;
    hasNotifications?:boolean;
    mentions?:number;

}


const ServerButton: React.FC<Props> = ({
    selected,   //recebendo as props
    isHome,
    hasNotifications,
    mentions
}) =>{
    return(
    <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected? 'active':''}
    >
    {isHome && <img src={Logo} alt="Rock" />} 
        
    </Button>
    )
}

export default ServerButton;