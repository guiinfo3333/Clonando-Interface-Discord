import styled from 'styled-components';

import {Props} from '.'; 
export const Button = styled.button<Props>`

display:flex;
align-items:center;
justify-content:center;
flex-shrink:0;  /*pra nao exprimir o botao*/
width:48px;
height:48px;
margin-bottom:8px;
border-radius:50%;
cursor:pointer;
position:relative;
> img{
    width:46px;
    height:46px;
    border-radius:30%;
}
&::before{  /*programando a bolinha ao lado do botao*/
    width:9px;
    height:9px;
    position:absolute;
    left:-17px;
    top:calc(50% - 4.5px);   /*fazenco um calculo*/
    background-color: var(--white);
    border-radius:50%;
    content: '';    /*conteudo da bolinha vazio pseudoelemento*/
    display: ${props => props.hasNotifications ? 'inline' : 'none'};  /*no caso so aparece se tiver a flag hasnotification*/
    
}

&::after{

    background-color: var(--notification);
    width:auto;
    height:16px;
    padding:0 4px;
    position:absolute;
    bottom:-4px;
    right:-4px;
    border-radius:12px;
    border:4px solid var(--quartenary);
    text-align:13px;
    font-size:13px;
    font-weight:bold;
    color:var(--white);
    content: '${(props) => props.mentions && props.mentions}';  /*se ela tiver mençoes eu pego o numero de menções*/

    display: ${(props)=> props.mentions && props.mentions > 0 ? 'inline': 'none' }  /*caso as mencoes forem maior q zero ele mostra*/


}

transition: border-radius .2s , background-color .2s;

&.active,
&:hover{  /*quando o botao tiver ativo ou hovado*/

border-radius:16px;
background-color:${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}


}

background-color: ${(props) => 
props.isHome ? 'var(--rocketseat)' : 'var(--primary)'}  

`;