import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faHackerrank} from '@fortawesome/free-brands-svg-icons';

const Maindiv=styled.div`
margin:0 auto;
color:#707070;
text-align:center;
margin-top:20px;
`

export default class Accounts extends React.Component{
    render(){
        return(
            <Maindiv>
            <a href="https://www.linkedin.com/in/lokesh-issrani-8b313482/" target="blank"><FontAwesomeIcon size="5x" icon={faLinkedin} style={{marginLeft:"40px",color:"darkblue"}} /></a>
            <a href="https://github.com/lokeshdissrani" target="blank"><FontAwesomeIcon size="5x" icon={faGithub} style={{marginLeft:"40px",color:"black"}} /></a>
            <a href="https://twitter.com/Lokesh_Issrani" target="blank"><FontAwesomeIcon size="5x" icon={faTwitter} style={{marginLeft:"40px",color:"blue"}} /></a>
            <a href="https://www.hackerrank.com/lokeshdissrani" target="blank"><FontAwesomeIcon size="5x" icon={faHackerrank} style={{marginLeft:"40px",color:"green"}} /></a>
            </Maindiv>
        )
    }
}