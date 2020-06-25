import styled from 'styled-components';
import {ExpandMore} from 'styled-icons/material';


export const Container = styled.div`
display:flex;
align-items:center;
padding: 0 11px 0 16px;
background:var(--secondary);
justify-content:space-between; /*o mais separado entre um outro */

grid-area:SN;
box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
z-index:2;


`;
export const Title = styled.h1`
    font-size:16px;
    font-weight:bold;
    color: var(--white);
    
`;
export const ExpandIcon = styled(ExpandMore)`  /*chmama o estilo passando o icone*/
width:28px;
height:28px;
color: var(--white);
cursor:pointer;

`;