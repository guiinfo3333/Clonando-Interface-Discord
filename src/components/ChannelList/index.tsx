import React from 'react';
import {Container,Category,AddCategoryIcon} from './styles';
import ChannelButton from '../ChannelButton';


const ChannelList : React.FC = () =>{
    
    return (
        <Container>
           <Category>
               <span>Canais de Texto</span>
               <AddCategoryIcon />
           </Category>

           <ChannelButton channelName = "chat-livre" />
           <ChannelButton channelName = "trabalho" />
           <ChannelButton channelName = "lolzinho" />
           <ChannelButton channelName = "csgo" />
           <ChannelButton channelName = "valorant" />
           
        </Container>
        
        );
}

export default ChannelList;