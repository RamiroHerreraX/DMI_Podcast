import React from 'react'
import styled from "styled-components";

const Card=styled.div`
  position:relative;
  text-decoration:none;
  background-color: ${({ theme })=>theme.card};
  max-width:220px;
  height:300px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  padding:16px;
  border-radius:6px;
  box-shadow: 0 0 16px 0 rgba(0,0,0,0.1);
  &:hover{
    cursor:pointer;
    transform: translateY(-8px);
    transition:all 0.4s ease-in-out;
    box-shadow:0 0 18px 0 rgba(0,0,0,0.3);
    filter:brightness(1.1);
  }
`;

const CardImage=styled.img`
  object-fit:cover;
  width:180px;
  height:140px;
  border-radius:6px;
  box-shadow: 0 4px 30px rgba(0,0,0,0.3);
  margin-bottom: 15px;
`;

const CardInformation=styled.div`
  display:flex;
  align-items:flex-end;
  font-weight:450;
  width:100%;
`;

const MainInfo=styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  justify-content:flex-start;
  gap:4px;
`;

const Title=styled.div`
  overflow:hidden;
  display: -webkit-box;
  max-width:100%;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({theme})=>theme.text_primary};
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

const Description=styled.div`
  overflow:hidden;
  display: -webkit-box;
  max-width:100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({theme})=>theme.text_secondary};
  font-size:12px;
`;

const ArchitectureCard = ({ architecture }) => {
  return (
    <Card>
      <CardImage src={architecture.img} alt={architecture.name}/>
      <CardInformation>
        <MainInfo>
          <Title>{architecture.name}</Title>
          <Description>
            {architecture.description}
          </Description>
        </MainInfo>
      </CardInformation>
    </Card>
  )
}

export default ArchitectureCard;