import React from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';

// Importar las imágenes
import mvcImage from '../images/mvc.jpg';
import mvpImage from '../images/mvp.jpg';
import mvvmImage from '../images/mvvm.jpg';
import cleanImage from '../images/clean.jpg';

const InfoMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const ArchitectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
  gap: 20px;
`;

const Title = styled.div`
  color: rgb(244, 187, 68);
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const ArchitectureImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
`;

const Description = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  line-height: 1.6;
  text-align: justify;
`;

const SectionTitle = styled.div`
  color: rgb(228, 155, 15);
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const BackButton = styled.button`
  background-color: rgb(228, 155, 15);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  align-self: flex-start;
  
  &:hover {
    background-color: rgb(244, 187, 68);
  }
`;

// Función para obtener la imagen correcta
const getArchitectureImage = (type) => {
  switch(type) {
    case 'mvc': return mvcImage;
    case 'mvp': return mvpImage;
    case 'mvvm': return mvvmImage;
    case 'clean': return cleanImage;
    case 'clean-architecture': return cleanImage;
    default: return mvcImage;
  }
};

// Datos de las arquitecturas (sin las rutas de imagen, usaremos la función getArchitectureImage)
const architectureDetails = {
  mvc: {
    title: "Arquitectura MVC (Model-View-Controller)",
    description: "MVC es un patrón de diseño arquitectónico que separa una aplicación en tres componentes principales: Modelo, Vista y Controlador.",
    advantages: [
      "Separación clara de responsabilidades",
      "Fácil mantenimiento y testing",
      "Reutilización de componentes",
      "Desarrollo paralelo de componentes"
    ],
    disadvantages: [
      "Puede resultar complejo para aplicaciones pequeñas",
      "Curva de aprendizaje para desarrolladores nuevos",
      "Puede generar código boilerplate"
    ],
    useCases: [
      "Aplicaciones web complejas",
      "Sistemas que requieren múltiples vistas para los mismos datos",
      "Proyectos con equipos grandes de desarrollo"
    ]
  },
  mvp: {
    title: "Arquitectura MVP (Model-View-Presenter)",
    description: "MVP es una derivación de MVC donde el Presenter actúa como intermediario entre la View y el Model, manejando toda la lógica de presentación.",
    advantages: [
      "Mejor separación entre vista y lógica de negocio",
      "Más fácil de testear que MVC",
      "La vista es más pasiva y reusable",
      "Menos acoplamiento entre componentes"
    ],
    disadvantages: [
      "Puede generar más clases e interfaces",
      "Complejidad adicional para aplicaciones simples",
      "El Presenter puede convertirse en un 'god object'"
    ],
    useCases: [
      "Aplicaciones con interfaces complejas",
      "Proyectos que requieren testing extensivo",
      "Aplicaciones con lógica de presentación compleja"
    ]
  },
  mvvm: {
    title: "Arquitectura MVVM (Model-View-ViewModel)",
    description: "MVVM es un patrón arquitectónico que facilita la separación del desarrollo de la interfaz gráfica (View) de la lógica de negocio (Model) mediante el ViewModel.",
    advantages: [
      "Separación clara entre UI y lógica de negocio",
      "Excelente para data binding",
      "Fácil testing del ViewModel",
      "Mantenimiento simplificado"
    ],
    disadvantages: [
      "Curva de aprendizaje más pronunciada",
      "Puede ser overkill para aplicaciones simples",
      "Complejidad en la configuración inicial"
    ],
    useCases: [
      "Aplicaciones con data binding intensivo",
      "Proyectos WPF, Silverlight o Xamarin",
      "Aplicaciones con interfaces dinámicas"
    ]
  },
  clean: {
    title: "Clean Architecture",
    description: "Clean Architecture es un enfoque que enfatiza la separación de concerns, la independencia de frameworks y la testabilidad, organizando el código en capas concéntricas.",
    advantages: [
      "Independencia de frameworks y bases de datos",
      "Alta testabilidad",
      "Mantenimiento a largo plazo",
      "Escalabilidad y flexibilidad"
    ],
    disadvantages: [
      "Complejidad inicial de implementación",
      "Mayor cantidad de archivos y capas",
      "Puede ser excesivo para proyectos pequeños"
    ],
    useCases: [
      "Aplicaciones empresariales grandes",
      "Proyectos con expectativa de larga vida útil",
      "Sistemas que pueden migrar tecnologías en el futuro"
    ]
  },
  'clean-architecture': {
    title: "Clean Architecture",
    description: "Clean Architecture es un enfoque que enfatiza la separación de concerns, la independencia de frameworks y la testabilidad, organizando el código en capas concéntricas.",
    advantages: [
      "Independencia de frameworks y bases de datos",
      "Alta testabilidad",
      "Mantenimiento a largo plazo",
      "Escalabilidad y flexibilidad"
    ],
    disadvantages: [
      "Complejidad inicial de implementación",
      "Mayor cantidad de archivos y capas",
      "Puede ser excesivo para proyectos pequeños"
    ],
    useCases: [
      "Aplicaciones empresariales grandes",
      "Proyectos con expectativa de larga vida útil",
      "Sistemas que pueden migrar tecnologías en el futuro"
    ]
  }
};

const ArchitectureInfo = () => {
  const { type } = useParams();
  const architecture = architectureDetails[type] || architectureDetails.mvc;
  const imageSrc = getArchitectureImage(type);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <InfoMain>
      <ArchitectureContainer>
        <Title>{architecture.title}</Title>
        
        <ImageContainer>
          <ArchitectureImage 
            src={imageSrc} 
            alt={architecture.title}
          />
        </ImageContainer>

        <Description>
          {architecture.description}
        </Description>

        <SectionTitle>Ventajas</SectionTitle>
        <ul style={{ color: '#b1b2b3', lineHeight: '1.6' }}>
          {architecture.advantages.map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>

        <SectionTitle>Desventajas</SectionTitle>
        <ul style={{ color: '#b1b2b3', lineHeight: '1.6' }}>
          {architecture.disadvantages.map((disadvantage, index) => (
            <li key={index}>{disadvantage}</li>
          ))}
        </ul>

        <SectionTitle>Casos de Uso</SectionTitle>
        <ul style={{ color: '#b1b2b3', lineHeight: '1.6' }}>
          {architecture.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>

        <BackButton onClick={handleBack}>
          Volver Atrás
        </BackButton>
      </ArchitectureContainer>
    </InfoMain>
  );
};

export default ArchitectureInfo;