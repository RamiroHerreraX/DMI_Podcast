import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import PodcastCard from '../components/PodcastCard';

import mvcImage from '../images/mvc.jpg';
import mvpImage from '../images/mvp.jpg';
import mvvmImage from '../images/mvvm.jpg';
import cleanImage from '../images/clean.jpg';

// ---------------- STYLED COMPONENTS ----------------
const InfoMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 100px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const ThemeSection = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 30px;
`;

const SectionTitle = styled.div`
  color: rgb(244, 187, 68);
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const SectionDescription = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 30px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.card_bg || "#1e1e1e"};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h4`
  color: rgb(228,155,15);
  margin-bottom: 5px;
  text-align: center;
`;

const CardDescription = styled.p`
  color: #aaa;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;

const ViewMoreButton = styled(Link)`
  padding: 8px 14px;
  background-color: rgb(244, 187, 68);
  color: #000;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgb(228,155,15);
  }
`;

// ---------------- DATOS ----------------
const themeData = [
  {
    title: "Modelos arquitectónicos más comunes (MVC, MVP, MVVM, Clean Architecture)",
    description: "Exploramos los patrones de diseño más usados en aplicaciones modernas y cómo ayudan a organizar código, separar responsabilidades y mejorar mantenibilidad.",
    cards: [
      { title: "MVC", description: "Separación de Modelo, Vista y Controlador para mantener el código organizado.", image: mvcImage, link: "/architecture/mvc" },
      { title: "MVP", description: "Presenter maneja la lógica y comunica Modelo y Vista.", image: mvpImage, link: "/architecture/mvp" },
      { title: "MVVM", description: "ViewModel expone datos mediante bindings para la Vista.", image: mvvmImage, link: "/architecture/mvvm" },
      { title: "Clean Architecture", description: "Separación en capas desacopladas que facilitan pruebas y mantenimiento.", image: cleanImage, link: "/architecture/clean" }
    ]
  },
  {
    title: "Integración con servicios en la nube",
    description: "Las apps móviles modernas dependen de la nube para almacenamiento, autenticación, notificaciones y lógica de negocio. Plataformas como AWS, Google Cloud y Azure permiten integrar: bases de datos en tiempo real, almacenamiento, funciones serverless y autenticación segura.",
    cards: [
      { title: "Integración Cloud", description: "Uso de APIs y SDKs para conectar la app con backend, almacenamiento y servicios cloud de forma escalable y segura.", link: "/cloud-integration" }
    ]
  },
  {
    title: "Uso de almacenamiento local y sincronización con la nube",
    description: "Para mantener funcionalidad offline, se deben usar estrategias como colas de operaciones, control de conflictos mediante timestamps y sincronización bidireccional, garantizando consistencia de datos y experiencia fluida.",
    cards: [
      { title: "Almacenamiento + Sincronización", description: "Técnicas para manejar datos locales y sincronizarlos automáticamente con la nube al reconectar.", link: "/local-sync-cloud" }
    ]
  },
  {
    title: "Escalabilidad y microservicios en aplicaciones móviles modernas",
    description: "Diseñar el backend con microservicios permite escalar funcionalidades específicas sin afectar toda la app. Se recomienda usar gateways, circuit breakers, autenticación centralizada y patrones de abstracción en el frontend para un mantenimiento eficiente.",
    cards: [
      { title: "Microservicios y Escalabilidad", description: "Arquitectura que facilita crecimiento, resiliencia y alta disponibilidad de la aplicación.", link: "/scalability-microservices" }
    ]
  },
  {
    title: "Retos arquitectónicos con tecnologías emergentes (IA, IoT, realidad aumentada)",
    description: "Integrar IA, IoT y RA presenta desafíos: consumo de recursos, latencia, compatibilidad de dispositivos y seguridad de datos. Se recomienda modularidad, procesamiento híbrido (local y nube) y patrones reactivos para optimizar el rendimiento.",
    cards: [
      { title: "Tecnologías Emergentes", description: "Cómo enfrentar retos de rendimiento, compatibilidad y seguridad al usar IA, IoT y RA.", link: "/emerging-tech-challenges" }
    ]
  },
  {
    title: "Información Adicional",
    description: "Esta página fue creada como parte de la actividad académica sobre arquitecturas de aplicaciones móviles. Incluye un podcast generado con IA y diagramas de las principales arquitecturas utilizadas en desarrollo móvil, además de recomendaciones y referencias para profundizar en cada patrón y tecnología.",
    cards: [
      { title: "Actividad Académica", description: "Contenido educativo para aprendizaje de arquitecturas móviles y buenas prácticas de desarrollo." }
    ]
  }
];

// ---------------- COMPONENTE ----------------
const ArchitectureThemes = () => {
  return (
    <InfoMain>
      {/* SECCIÓN DE PODCAST */}
      <ThemeSection>
        <SectionTitle>Podcast</SectionTitle>
        <SectionDescription>
          Escucha episodios relacionados con arquitectura de aplicaciones móviles y patrones de diseño.
        </SectionDescription>
        <PodcastCard />
      </ThemeSection>

      {/* OTRAS SECCIONES */}
      {themeData.map((theme, themeIndex) => (
        <ThemeSection key={themeIndex}>
          <SectionTitle>{theme.title}</SectionTitle>
          <SectionDescription>{theme.description}</SectionDescription>
          <CardsContainer>
            {theme.cards.map((card, cardIndex) => (
              <Card key={cardIndex}>
                {/* Mostrar imagen solo si existe */}
                {card.image && <CardImage src={card.image} alt={card.title} />}
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                {/* Solo mostrar botón 'Ver más' si existe el link */}
                {card.link && <ViewMoreButton to={card.link}>Ver más</ViewMoreButton>}
              </Card>
            ))}
          </CardsContainer>
        </ThemeSection>
      ))}
    </InfoMain>
  );
};

export default ArchitectureThemes;
