import React from 'react';
import styled from 'styled-components';

const Maindiv=styled.div`
    margin-top:110px;

`

const Namediv =styled.div`
    margin:0 auto;
    color:#3C5E9B;
    text-align:center;
    

`

const Postdiv =styled.div`
    margin:0 auto;
    color:#707070;
    text-align:center;
    

`

export default class NamePost extends React.Component{
    render(){
        return(
            <Maindiv>
            <Namediv><h1>Lokesh Issrani</h1></Namediv>
            <Postdiv><h2>Full Stack Web Developer</h2></Postdiv>
            </Maindiv>
        )
    }
}