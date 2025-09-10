import React, { useState, useRef } from 'react';
import styled from "styled-components";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import logopodcast from '../images/logopodcast.jpg';
import podcastAudio from '../images/podcast.mp3'; // Importar el archivo de audio

const PlayIcon = styled.div`
  padding: 16px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(228,155,15);
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px rgba(228,155,15,0.7);
  opacity: ${props => props.isPlaying ? 1 : 0.8};
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 0 20px 6px rgba(228,155,15,0.9);
  }
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  width: 100%;
  max-width: 800px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 16px 0 rgba(0,0,0,0.1);
  transition: all 0.4s ease-in-out;
  margin: 20px auto;
  
  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
    box-shadow: 0 0 18px 0 rgba(0,0,0,0.3);
    filter: brightness(1.05);
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0,0,0,0.3);
  margin-right: 20px;
`;

const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 450;
  width: 100%;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  margin-top: 10px;
  height: 40px;
`;

const DownloadLink = styled.a`
  color: rgb(228,155,15) !important;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin-top: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: rgb(228,155,15);
  width: ${props => props.progress}%;
  transition: width 0.2s ease;
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 5px;
`;

const PodcastCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef(null);
  
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  
  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };
  
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleProgressClick = (e) => {
    if (audioRef.current && duration) {
      const progressContainer = e.currentTarget;
      const clickPosition = e.clientX - progressContainer.getBoundingClientRect().left;
      const newProgress = (clickPosition / progressContainer.offsetWidth) * 100;
      const newTime = (newProgress / 100) * duration;
      
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
      setCurrentTime(newTime);
    }
  };

  return (
    <Card>
      <CardImage src={logopodcast} alt="Arquitecturas Móviles"/>
      <CardInformation>
        <Title>Arquitecturas de Aplicaciones Móviles</Title>
        <Description>
          Un análisis profundo de las principales arquitecturas utilizadas en el desarrollo de aplicaciones móviles, 
          incluyendo MVC, MVP, MVVM y Clean Architecture. Este podcast explora sus ventajas, desventajas y casos de uso apropiados.
        </Description>
        
        {/* Enlace de descarga */}
        <div style={{ marginBottom: '10px', fontSize: '14px' }}>
          <DownloadLink 
            href={podcastAudio} 
            download="arquitecturas-moviles-podcast.mp3"
          >
            📥 Descargar podcast MP3
          </DownloadLink>
        </div>

        <AudioPlayer 
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          controls
        >
          <source src={podcastAudio} type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </AudioPlayer>
        
        <ProgressContainer onClick={handleProgressClick}>
          <ProgressBar progress={progress} />
        </ProgressContainer>
        
        <TimeDisplay>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </TimeDisplay>
      </CardInformation>
      
      <PlayIcon isPlaying={isPlaying} onClick={togglePlayPause}>
        {isPlaying ? 
          <PauseIcon style={{ width: "28px", height: "28px" }}/> : 
          <PlayArrowIcon style={{ width: "28px", height: "28px" }}/>
        }
      </PlayIcon>
    </Card>
  )
}

export default PodcastCard;