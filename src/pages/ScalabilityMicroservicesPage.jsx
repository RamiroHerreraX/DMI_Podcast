// src/pages/ScalabilityMicroservicesPage.jsx
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

const ScalabilityMicroservicesPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <BackButton onClick={() => navigate(-1)}>⬅ Volver atrás</BackButton>
      <PageTitle>Escalabilidad y microservicios en aplicaciones móviles</PageTitle>
      
      <IntroText>
        A medida que una aplicación crece, es esencial diseñar su backend con 
        <strong> microservicios</strong>: pequeños servicios independientes que 
        se comunican mediante APIs.
      </IntroText>

      <ChallengesGrid>
        <ChallengeCard>
          <CardHeader>Consumo de múltiples endpoints</CardHeader>
          <CardText>
            La app debe conectarse a diferentes servicios como usuarios, productos, 
            notificaciones o pagos, manteniendo la coherencia de datos.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Autenticación centralizada</CardHeader>
          <CardText>
            Es necesario implementar soluciones como <strong>OAuth2</strong> o 
            <strong> JWT</strong> para garantizar accesos seguros entre servicios.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Resiliencia del sistema</CardHeader>
          <CardText>
            Se recomienda usar <em>circuit breakers</em> y estrategias de 
            <em> retry</em> para evitar fallos en cascada.
          </CardText>
        </ChallengeCard>

        <ChallengeCard>
          <CardHeader>Uso de gateways</CardHeader>
          <CardText>
            Implementar gateways (ej. API Gateway de AWS) simplifica la gestión de 
            endpoints y mejora la seguridad y escalabilidad.
          </CardText>
        </ChallengeCard>
      </ChallengesGrid>

      <PatternSection>
        <h2>Buenas prácticas en el frontend</h2>
        <p>
          En el frontend móvil, se recomienda usar una capa de abstracción 
          (como un <strong>Repository</strong> o un 
          <strong> Service Locator</strong>) para aislar la lógica de red y 
          facilitar pruebas.
        </p>
      </PatternSection>
    </PageContainer>
  );
};

export default ScalabilityMicroservicesPage;
