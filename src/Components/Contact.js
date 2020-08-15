import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Maindiv=styled.div`
margin:0 auto;
color:#707070;
text-align:center;
`
export default class Contact extends React.Component{
    render(){
        return(
            <Maindiv>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginLeft:"20px",color:"#3C5E9B"}} /> Gujarat, India 
            <FontAwesomeIcon icon={faPhone} style={{marginLeft:"20px",color:"#3C5E9B"}} /> +91 8141653500
            <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:"20px",color:"#3C5E9B"}} /> lokeshdissrani@gmail.com
            </Maindiv>
        )
    }
}