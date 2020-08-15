import React from 'react';
import styled from 'styled-components';

const Maindiv=styled.div`
margin:0 auto;
color:#707070;
text-align:center;
margin-top:20px;

`
const Stackcirclediv=styled.div`
    display:flex;
    flex-wrap:wrap;
    width:80%;
    margin:0 auto;
`
const Singlechild=styled.div`
    width:20%;
    text-align:center;
    padding:10px;
    border:10px solid #47C5C1;
    border-radius:50%;
    margin:0 10px;

`
const Stacktextdiv=styled.div`
    display:flex;
    flex-wrap:wrap;
    width:80%;
    margin:0 auto;
`
const Singlechildtext=styled.div`
    color:#707070; 
    width:20%;
    text-align:center;
    padding:10px;
    margin:0 18px;
`


export default class Experience extends React.Component{
    render(){
        return(
            <Maindiv>
            <Stackcirclediv>
                <Singlechild><h1>1200+ hrs</h1></Singlechild>
                <Singlechild><h1>260+</h1></Singlechild>
                <Singlechild><h1>280+</h1></Singlechild>
                <Singlechild><h1>12+</h1></Singlechild>
            </Stackcirclediv>
            <Stacktextdiv>
                <Singlechildtext><h1>Coding</h1>
                </Singlechildtext>
                <Singlechildtext><h1>HackerRank Problems</h1>
               </Singlechildtext>
                <Singlechildtext><h1>Git <br></br>Commits</h1>
                </Singlechildtext>
                <Singlechildtext><h1>Projects</h1>
                </Singlechildtext>
            </Stacktextdiv>
            <hr></hr>
            </Maindiv>
        )
    }
}