import styled from 'styled-components';


//SL-Server List
//SN-Server name
//CH Chanel Info
//CL - Chanenel List
//CD - Channel Data
//UI - User Info
// UL - User List

export const Grid = styled.div`
    display:grid;
    grid-template-columns:71px 240px auto 240px; /*largura da coluna*/
    grid-template-rows:46px auto 52px; /**Altura da linha */
    grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL '
    ;
    height:100vh;
`;
