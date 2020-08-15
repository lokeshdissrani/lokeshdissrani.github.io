import React from 'react';
import styled from 'styled-components';

const Maindiv=styled.div`
margin:0 auto;
color:#707070;
text-align:center;
margin-top:20px;
width:60%;

`

export default class Accounts extends React.Component{
    render(){
        return(
            <Maindiv><h3>I'm a Gujarat based web designer and Full-Stack Developer.<br></br>
            Focused on crafting
            clean and user-friendly experiences.<br></br> Coder who focuses on writing
            clean, elegant and efficient code.<hr></hr></h3></Maindiv>
        )
    }
}