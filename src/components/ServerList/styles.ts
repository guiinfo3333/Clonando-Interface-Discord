import styled from 'styled-components';

export const Container = styled.div`
grid-area:SL;
display:flex;
flex-direction:column;
align-items:center;
background-color: var(--tertiary);
padding:11px 0; /* 11px para cima e para baixo e 0 nas laterais  */
max-height:100vh;
overflow-y:scroll;
::-webkit-scrollbar{  /*customizando scrollbar*/
display:none;
}

`;
export const Separator = styled.div`
width:32px;
border-bottom:2px solid var(--quartenary);
margin-bottom:8px;


`;
