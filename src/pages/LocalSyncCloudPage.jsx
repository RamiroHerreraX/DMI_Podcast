// src/pages/LocalSyncCloudPage.jsx
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

const LocalSyncCloudPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <BackButton onClick={() => navigate(-1)}>⬅ Volver atrás</BackButton>
      <PageTitle>Almacenamiento local y sincronización con la nube</PageTitle>
      
      <IntroText>
        Para ofrecer una experiencia fluida, las apps móviles deben funcionar incluso 
        <strong> sin conexión</strong>.
      </IntroText>

      <ChallengesGrid>
        <ChallengeCard>
          <CardHeader>Queue de operaciones</CardHeader>
          <CardText>
            Guardar acciones pendientes y ejecutarlas automáticamente al reconectar.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Timestamps y resolución de conflictos</CardHeader>
          <CardText>
            Resolver conflictos de datos usando <strong>timestamps</strong> o versiones.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Sincronización bidireccional</CardHeader>
          <CardText>
            Detectar y aplicar cambios tanto locales como remotos.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Estado de sincronización</CardHeader>
          <CardText>
            Mostrar al usuario si los datos están actualizados o pendientes.
          </CardText>
        </ChallengeCard>
      </ChallengesGrid>

      <PatternSection>
        <h2>Herramientas y enfoques</h2>
        <p>
          Plataformas como <strong>Firebase Firestore</strong>, 
          <strong> Couchbase Mobile</strong> o <strong>Realm Sync</strong> ofrecen 
          sincronización automática.  
        </p>
      </PatternSection>
    </PageContainer>
  );
};

export default LocalSyncCloudPage;
