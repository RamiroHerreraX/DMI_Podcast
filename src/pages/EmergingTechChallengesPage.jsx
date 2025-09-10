// src/pages/EmergingTechChallengesPage.jsx
import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  padding: 40px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.bg};
  min-height: 100vh;
`;

const BackButton = styled.button`
  background: rgb(244, 187, 68);
  color: #000;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: bold;
  &:hover {
    opacity: 0.9;
  }
`;

const PageTitle = styled.h1`
  color: rgb(244, 187, 68);
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
`;

const IntroText = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const ChallengeCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: rgb(244, 187, 68);
`;

const CardText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  text-align: justify;
`;

const PatternSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.08);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const EmergingTechChallengesPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <BackButton onClick={() => navigate(-1)}>⬅ Volver atrás</BackButton>
      <PageTitle>Retos arquitectónicos con tecnologías emergentes</PageTitle>
      
      <IntroText>
        Integrar tecnologías como IA, IoT o Realidad Aumentada en apps móviles presenta retos únicos:
      </IntroText>

      <ChallengesGrid>
        <ChallengeCard>
          <CardHeader>Consumo de recursos</CardHeader>
          <CardText>
            Modelos de IA y RA consumen mucha batería y CPU. Se recomienda usar modelos ligeros
            (TensorFlow Lite, Core ML) o delegar procesamiento a la nube.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Latencia</CardHeader>
          <CardText>
            En IoT, los sensores envían datos en tiempo real. La app debe manejar flujos constantes
            sin bloquear la UI.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Compatibilidad</CardHeader>
          <CardText>
            No todos los dispositivos soportan ARKit, ARCore o sensores específicos. 
            La arquitectura debe ser modular y con fallbacks.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Privacidad y seguridad</CardHeader>
          <CardText>
            Datos biométricos, de ubicación o de sensores requieren permisos y cifrado.
          </CardText>
        </ChallengeCard>
      </ChallengesGrid>

      <PatternSection>
        <h2>Patrones recomendados</h2>
        <p>
          El patrón más adecuado suele ser <strong>MVP</strong> o <strong>MVVM</strong>, 
          donde el Presenter/ViewModel orquesta los flujos complejos, 
          y la Vista solo se encarga de renderizar.  
          También es útil usar colas de eventos o arquitecturas reactivas 
          (<em>Rx, LiveData, Combine</em>).
        </p>
      </PatternSection>
    </PageContainer>
  );
};

export default EmergingTechChallengesPage;
