// src/components/ArchitectureSection.jsx
import React from 'react';
import styled from 'styled-components';

// Estilos para las tarjetas
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px auto;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1;
  min-width: 200px;
  background-color: #121212;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const Title = styled.h4`
  color: #FFD700;
  font-size: 16px;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const Description = styled.p`
  color: #cccccc;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
`;

// Componente principal
const ArchitectureSection = ({ title, description, imageUrls }) => {
  const patterns = [
    {
      name: 'MVC',
      desc: 'Model-View-Controller: Patrón que separa la lógica de negocio, la interfaz y el control.'
    },
    {
      name: 'MVP',
      desc: 'Model-View-Presenter: Similar a MVC pero con el Presenter como intermediario entre View y Model.'
    },
    {
      name: 'MVVM',
      desc: 'Model-View-ViewModel: Patrón que facilita la separación entre el desarrollo de la GUI y la lógica.'
    },
    {
      name: 'Clean Architecture',
      desc: 'Enfoque que enfatiza la separación de concerns y la independencia de frameworks.'
    }
  ];

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#FFD700', textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>
        {title}
      </h2>
      <p style={{ color: '#ccc', textAlign: 'center', marginBottom: '30px', fontSize: '16px' }}>
        {description}
      </p>
      <CardContainer>
        {imageUrls.map((img, index) => (
          <Card key={index}>
            <CardImage src={img} alt={`${patterns[index].name} Diagram`} />
            <Title>{patterns[index].name}</Title>
            <Description>{patterns[index].desc}</Description>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default ArchitectureSection;