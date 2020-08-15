import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBezierCurve } from '@fortawesome/free-solid-svg-icons'

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

export default class Proficiencies extends React.Component{
    render(){
        return(
            <Maindiv>
            <h1>Proficiencies</h1><br></br>
            <Stacklogodiv>
                <Singlechildlogo>
                    <FontAwesomeIcon size="7x" icon={faReact} style={{color:"#47C5C1"}} />
                    
                </Singlechildlogo>
                <Singlechildlogo>
                    <FontAwesomeIcon size="7x" icon={faDatabase} style={{color:"#47C5C1"}} />
                    
                </Singlechildlogo>
                <Singlechildlogo>
                    <FontAwesomeIcon size="7x" icon={faHtml5} style={{color:"#47C5C1"}} />
                    
                </Singlechildlogo>
                <Singlechildlogo>
                    <FontAwesomeIcon size="7x" icon={faBezierCurve} style={{color:"#47C5C1"}} />
                    
                </Singlechildlogo>
            </Stacklogodiv>
            <Stacktextdiv>
                <Singlechildtext><h1>React App</h1>
                <h3>When it comes to react apps<br></br>
                I have the strength of Atlas</h3></Singlechildtext>
                <Singlechildtext><h1>Backend</h1>
                <h3>I am the one who runs<br></br>
                the show</h3></Singlechildtext>
                <Singlechildtext><h1>FrontEnd</h1>
                <h3>Now just that I can<br></br>
                even host the show</h3></Singlechildtext>
                <Singlechildtext><h1>Data Structures</h1>
                <h3>Putting the right blocks in the<br></br>
                right place is just my thing</h3></Singlechildtext>
            </Stacktextdiv>
            <hr></hr>
            </Maindiv>
        )
    }
}