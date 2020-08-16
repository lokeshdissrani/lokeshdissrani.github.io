import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    height:150px;
    background-color:#47C5C1;
    position:relative;
`
const Img =styled.img`
    position:absolute;
    bottom:-100px;
    left:42.5%;
    width:200px;
    height:200px;
    border-radius:50%;
    border: 3px solid #3C5E9B;
    padding:2px;
    background-color:white;
`

export default class HeaderWithImg extends React.Component{
    render(){
        return(
                <Header>
                    <Img src="https://drive.google.com/file/d/1eZ_g_Wgm_S6YJsctLQ423LYNdhBax_xQ/view?usp=sharing" alt="logo"></Img>
                </Header>
        )
    }
}