// src/pages/CloudIntegrationPage.jsx
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
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

const CloudIntegrationPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <BackButton onClick={() => navigate(-1)}>⬅ Volver atrás</BackButton>
      <PageTitle>Integración con servicios en la nube</PageTitle>
      
      <IntroText>
        Las aplicaciones móviles modernas dependen cada vez más de 
        <strong> servicios en la nube</strong>.
      </IntroText>

      <ServicesGrid>
        <ServiceCard>
          <CardHeader>Almacenamiento en la nube</CardHeader>
          <CardText>
            Ejemplos: <strong>Firebase Storage</strong> o <strong>Amazon S3</strong>.
          </CardText>
        </ServiceCard>

        <ServiceCard>
          <CardHeader>Base de datos en tiempo real</CardHeader>
          <CardText>
            Ejemplos: <strong>Firestore</strong> o <strong>DynamoDB</strong>.
          </CardText>
        </ServiceCard>

        <ServiceCard>
          <CardHeader>Autenticación</CardHeader>
          <CardText>
            Ejemplos: <strong>Firebase Auth</strong> o <strong>Cognito</strong>.
          </CardText>
        </ServiceCard>

        <ServiceCard>
          <CardHeader>Funciones serverless</CardHeader>
          <CardText>
            Ejemplos: <strong>AWS Lambda</strong> o <strong>Cloud Functions</strong>.
          </CardText>
        </ServiceCard>

        <ServiceCard>
          <CardHeader>Notificaciones push</CardHeader>
          <CardText>
            Ejemplo: <strong>Firebase Cloud Messaging</strong>.
          </CardText>
        </ServiceCard>
      </ServicesGrid>

      <PatternSection>
        <h2>Buenas prácticas de integración</h2>
        <p>
          Diseña una <strong>capa de red robusta</strong>, con manejo de errores, 
          reintentos, caché y seguridad. Usa un patrón como 
          <strong> Repository</strong> o un cliente HTTP centralizado.
        </p>
      </PatternSection>
    </PageContainer>
  );
};

export default CloudIntegrationPage;
