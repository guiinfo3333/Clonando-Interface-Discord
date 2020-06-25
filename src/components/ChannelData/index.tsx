import React,{useRef,useEffect} from 'react';
import {Container,Messages,InputWrapper,Input,InputIcon} from './styles';
import ChannelMessage,{Mention} from '../ChannelMessage';


const ChannelData : React.FC = () =>{

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    },[messagesRef])

    
    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
               
                author="Antônio Guilherme"
                date = "21/06/2020"
                content="Hoje é meu aniversário"
                />
                <ChannelMessage
               
                author="Antônio Guilherme"
                date = "21/06/2020"
                content="Hoje é meu aniversário"
                />
                <ChannelMessage
               
                author="Antônio Guilherme"
                date = "21/06/2020"
                content="Hoje é meu aniversário"
                />
                <ChannelMessage
               
                author="Antônio Guilherme"
                date = "21/06/2020"
                content="Hoje é meu aniversário"
                />
                <ChannelMessage
               
                author="Antônio Guilherme"
                date = "21/06/2020"
                content="Hoje é meu aniversário"
                />
                <ChannelMessage
               
                author="Antônio Guilherme"
                date = "21/06/2020"
                content="Hoje é meu aniversário"
                />
                <ChannelMessage
               
                author="Antônio Guilherme"
                date = "21/06/2020"
                content="Hoje é meu aniversário"
                />
                <ChannelMessage
               
                author="Rafael Leonan"
                date = "21/06/2020"
                content={
                    <>
                        <Mention>@Rafael Leonan</Mention>, carrega no LoL e CS de novo, por favor !
                    </>
                }
             
                /> 
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar #ChatLivre"/>
                <InputIcon />
           
            </InputWrapper>
        </Container>
        
        );
}

export default ChannelData;