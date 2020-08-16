import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faBootstrap, faCss3, faReact, faGithub, faJs} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

var object={"html5":[faHtml5,"orange"],"bootstrap":[faBootstrap,"violet"],"css3":[faCss3,"darkblue"],"react":[faReact,"blue"],"javascript":[faJs,"yellow"]}

const Singlecard=styled.div`
    color:#707070;
    width:45%;
    text-align:center;
    padding:10px;
    border:1px solid black;
    margin:10px 10px;
`

export default class Card extends React.Component{
    render(){
        const {name,imgsrc,details,githublink,projectlink,techused}=this.props
        return(
            <Singlecard>
                <img src={imgsrc} alt="logo" width="100%" height="50%" />
                <h2>{name}</h2>
                <h3>{details}</h3>
                <p>
                    <a href={githublink} target="_blank" >Github Link <FontAwesomeIcon size="2x" icon={faGithub} style={{marginRight:"40px",color:"black"}} /></a>
                    <a href={projectlink} target="_blank"  >Demo Link <FontAwesomeIcon size="2x" icon={faExternalLinkAlt} style={{color:"black"}} /></a>
                </p>
                <p>
                    {techused.map((item)=>(
                        <span><FontAwesomeIcon size="3x" icon={object[item][0]} style={{color:object[item][1],marginLeft:"40px"}} /></span>
                    ))}
                </p>
            </Singlecard>
        )
    }
}