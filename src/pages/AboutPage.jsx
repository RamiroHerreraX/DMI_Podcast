// src/pages/AboutPage.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// ---------------- STYLED COMPONENTS ----------------
const PageContainer = styled.div`
  padding: 40px 30px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const PageTitle = styled.h1`
  font-size: 36px;
  color: rgb(244, 187, 68);
  text-align: center;
`;

const Section = styled.div`
  background-color: ${({ theme }) => theme.card_bg || "#1e1e1e"};
  padding: 25px 20px;
  border-radius: 10px;
  line-height: 1.7;
`;

const SectionTitle = styled.h2`
  color: rgb(228,155,15);
  font-size: 24px;
  margin-bottom: 15px;
`;

const SectionText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  align-self: center;
  padding: 10px 20px;
  background-color: rgb(244, 187, 68);
  color: #000;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(228,155,15);
  }
`;

// ---------------- COMPONENTE ----------------
const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <PageTitle>Información del Sitio Web</PageTitle>

      <Section>
        <SectionTitle>Propósito del Sitio</SectionTitle>
        <SectionText>
          Este sitio web fue creado para ofrecer información educativa sobre arquitecturas de aplicaciones móviles, patrones de diseño y buenas prácticas de desarrollo.
        </SectionText>
        <SectionText>
          Incluye artículos, podcasts generados con IA y diagramas explicativos que facilitan la comprensión de conceptos complejos en desarrollo móvil.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Público Objetivo</SectionTitle>
        <SectionText>
          Está dirigido a estudiantes, desarrolladores junior y cualquier persona interesada en aprender sobre la organización de aplicaciones móviles modernas y el uso de tecnologías emergentes.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Contenido Destacado</SectionTitle>
        <SectionText>
          - Modelos arquitectónicos: MVC, MVP, MVVM, Clean Architecture.  
          - Integración con servicios en la nube.  
          - Almacenamiento local y sincronización con la nube.  
          - Escalabilidad mediante microservicios.  
          - Retos de tecnologías emergentes: IA, IoT y RA.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Contacto y Créditos</SectionTitle>
        <SectionText>
          Para consultas o comentarios, puedes contactar al desarrollador a través del correo electrónico o redes sociales proporcionadas en la página principal.  
          Los recursos visuales y podcasts fueron generados para fines educativos.
        </SectionText>
      </Section>

      <BackButton onClick={() => navigate(-1)}>Volver atrás</BackButton>
    </PageContainer>
  );
};

export default AboutPage;
