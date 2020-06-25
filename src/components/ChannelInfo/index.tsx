import React from 'react';
import {Container,HashtagIcon,Title,Separator,Description} from './styles';



const ChanelInfo : React.FC = () =>{
    
    return (
        <Container>
           <HashtagIcon />

           <Title>chat-livre</Title>
           <Separator />
           <Description>Canal aberto para conversas</Description>
        </Container>
        
        );
}

export default ChanelInfo;