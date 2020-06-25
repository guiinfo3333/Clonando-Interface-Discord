import React from 'react';
import {Container,Role,User,Avatar} from './styles';

interface UserProps {
    nickname:string;
    isBot?:boolean;
}



const UserRow: React.FC<UserProps>= ({nickname,isBot}) =>{
    return (
        <User>
            {/* se a pessoa for bot adiciona-se essa casse */}
                <Avatar className={isBot ? 'bot':''} /> 

                 <strong>{nickname}</strong>

                 {isBot && <span>Bot</span>}
            </User>

);
}

const UserList : React.FC = () =>{
    return (
        <Container>
            <Role>Disponível - 1</Role>

            <UserRow nickname="Antônio Guilherme"/>

            <Role>Offline - 18</Role>

            <UserRow nickname="Rafael Leonan" isBot/>


        </Container>
        
        );
}

export default UserList;