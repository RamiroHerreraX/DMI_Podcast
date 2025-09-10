import React from 'react'
import styled from "styled-components";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import logopodcast from '../images/logopodcast.jpg';

const PlayIcon=styled.div`
  padding:10px;
  border-radius:50%;
  z-index:100;
  display:flex;
  align-items:center;
  background: rgb(228,155,15);
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top:45%;
  right: 10%;
  display:none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px rgb(228,155,15);
`;

const Card=styled.div`
  position:relative;
  text-decoration:none;
  background-color: ${({ theme })=>theme.card};
  width: 100%;
  max-width: 800px;
  height: auto;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  padding:20px;
  border-radius:10px;
  box-shadow: 0 0 16px 0 rgba(0,0,0,0.1);
  &:hover{
    cursor:pointer;
    transform: translateY(-4px);
    transition:all 0.4s ease-in-out;
    box-shadow:0 0 18px 0 rgba(0,0,0,0.3);
    filter:brightness(1.05);
  }
  &:hover ${PlayIcon}{
    display:flex;
  }  
`;

const CardImage=styled.img`
  object-fit:cover;
  width:150px;
  height:150px;
  border-radius:10px;
  box-shadow: 0 4px 30px rgba(0,0,0,0.3);
  margin-right: 20px;
`;

const CardInformation=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  font-weight:450;
  width:100%;
`;

const Title=styled.div`
  color: ${({theme})=>theme.text_primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description=styled.div`
  color: ${({theme})=>theme.text_secondary};
  font-size:16px;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const AudioPlayer=styled.audio`
  width: 100%;
  margin-top: 10px;
`;

const PodcastCard = () => {
  // Convierte el enlace de Google Drive a enlace directo de descarga
  const googleDriveLink = "https://drive.google.com/uc?export=download&id=1CvlCSjKirVkPgecYKiXpJRl8wddhBaoO";
  
  return (
    <Card>
      <CardImage src={logopodcast} alt="Arquitecturas Móviles"/>
      <CardInformation>
        <Title>Arquitecturas de Aplicaciones Móviles</Title>
        <Description>
          Un análisis profundo de las principales arquitecturas utilizadas en el desarrollo de aplicaciones móviles, 
          incluyendo MVC, MVP, MVVM y Clean Architecture. Este podcast explora sus ventajas, desventajas y casos de uso apropiados.
        </Description>
        <AudioPlayer controls>
          <source src={googleDriveLink} type="audio/mp4" />
          Tu navegador no soporta el elemento de audio.
        </AudioPlayer>
      </CardInformation>
      <PlayIcon>
        <HeadphonesIcon style={{width:"28px",height:"28px"}}/>
      </PlayIcon>
    </Card>
  )
}

export default PodcastCard;