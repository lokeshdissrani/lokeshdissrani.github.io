import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faGitAlt, faBootstrap, faJs, faCss3, faReact,} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons'

const Maindiv=styled.div`
margin:0 auto;
color:#707070;
text-align:center;
margin-top:20px;

`
const Stacklogodiv=styled.div`
    display:flex;
    flex-wrap:wrap;
    width:80%;
    margin:0 auto;
`
const Singlechildlogo=styled.div`
    color:#707070;
    width:20%;
    text-align:center;
    padding:10px;
    border:10px solid #47C5C1;
    border-radius:50%;
    margin:10px 10px;
    font-size:20px;

`

export default class Techstack extends React.Component{
    render(){
        return(
            <Maindiv>
            <h1>Tech Stack</h1><br></br>
            <Stacklogodiv>
                <Singlechildlogo><FontAwesomeIcon size="7x" icon={faHtml5} style={{color:"#47C5C1"}} /><br></br>HTML5</Singlechildlogo>
                <Singlechildlogo><FontAwesomeIcon size="7x" icon={faCss3} style={{color:"#47C5C1"}} /><br></br>CSS3</Singlechildlogo>
                <Singlechildlogo><FontAwesomeIcon size="7x" icon={faJs} style={{color:"#47C5C1"}} /><br></br>JAVASCRIPT</Singlechildlogo>
                <Singlechildlogo><FontAwesomeIcon size="7x" icon={faBootstrap} style={{color:"#47C5C1"}} /><br></br>BOOTSTRAP</Singlechildlogo>
                <Singlechildlogo><FontAwesomeIcon size="7x" icon={faGitAlt} style={{color:"#47C5C1"}} /><br></br>GIT</Singlechildlogo>
                <Singlechildlogo><FontAwesomeIcon size="7x" icon={faReact} style={{color:"#47C5C1"}} /><br></br>REACT</Singlechildlogo>
                <Singlechildlogo><FontAwesomeIcon size="7x" icon={faDatabase} style={{color:"#47C5C1"}} /><br></br>MYSQL</Singlechildlogo>
                <Singlechildlogo><FontAwesomeIcon size="7x" icon={faFlask} style={{color:"#47C5C1"}} /><br></br>FLASK</Singlechildlogo>
            </Stacklogodiv>
            <hr></hr>
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <FontAwesomeIcon icon={['fab', 'microsoft']} />
            <FontAwesomeIcon icon={['fab', 'google']} />
            
            </Maindiv>
        )
    }
}