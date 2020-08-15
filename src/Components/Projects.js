import React from 'react';
import styled from 'styled-components';
import data from './data.json';
import Card from './Card';

const Stacklogodiv=styled.div`
    display:flex;
    flex-wrap:wrap;
    width:80%;
    margin:0 auto;
`
const Maindiv=styled.div`
margin:0 auto;
color:#707070;
text-align:center;
margin-top:20px;

`
export default class Projects extends React.Component{
    render(){
        return(
                <Maindiv>
                <h1>Projects</h1>
                <Stacklogodiv>
                {data.map((item)=>(
                    <Card name={item.name} imgsrc={item.imgsrc} details={item.details} githublink={item.githublink} projectlink={item.projectlink} techused={item.techused} />
                ))}
                </Stacklogodiv>
                <hr></hr>
                </Maindiv>
        )
    }
}