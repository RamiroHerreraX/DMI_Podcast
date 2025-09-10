/*import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import PodcastCard from '../components/PodcastCard';
import PodcastCard1 from '../components/PodcastCard1';
import PodcastCard2 from '../components/PodcastCard2';
import PodcastCard3 from '../components/PodcastCard3';
import PodcastCard4 from '../components/PodcastCard4';
import PodcastCard5 from '../components/PodcastCard5';

const DashboardMain=styled.div`
padding:20px 30px;
padding-bottom:200px;
height:100%;
overflow-y:scroll;
display:flex;
flex-direction:column;
gap:20px;
@media (max-width:768px){
padding: 6px 10px;
}
`;

const FilterContainer=styled.div`
display:flex;
flex-direction:column;
background-color:${({theme})=> theme.bg};
border-radius:10px;
padding:20px 30px;
`;

const Topic=styled.div`
color:rgb(244,187,68);
font-size:24px;
font-weight:500;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width:768px){
  font-size:18px;
}
`;

const Span=styled.div`
color:rgb(228,155,15);
font-size: 16px;
font-weight:400;
@media (max-width:768px){
  font-size:14px;
}
`;
const Podcasts=styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  gap:14px;
  padding: 18px 6px;
  @media (max-width:550px){
    justify-content:center;
  }
`;

const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link to={`/showpodcasts/mostpopular`} style={{textDecoration:"none"}}>
          <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard/>
          <PodcastCard1/>
          <PodcastCard2/>
          <PodcastCard3/>
          <PodcastCard4/>
          <PodcastCard5/>
        </Podcasts>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Informative
          <Link to={`/showpodcasts/comedy`} style={{textDecoration:"none"}}>
          <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
        <PodcastCard/>
        <PodcastCard1/>
        <PodcastCard2/>
        <PodcastCard3/>
        </Podcasts>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Horror
          <Link to={`/showpodcasts/horror`} style={{textDecoration:"none"}}>
          <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
        <PodcastCard4/>
        <PodcastCard5/>
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard

*/

import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import PodcastCard from '../components/PodcastCard';
import ArchitectureCard from '../components/ArchitectureCard';

// Importar las imágenes
import mvcImage from '../images/mvc.jpg';
import mvpImage from '../images/mvp.jpg';
import mvvmImage from '../images/mvvm.jpg';
import cleanImage from '../images/clean.jpg';

const DashboardMain=styled.div`
  padding:20px 30px;
  padding-bottom:200px;
  height:100%;
  overflow-y:scroll;
  display:flex;
  flex-direction:column;
  gap:20px;
  @media (max-width:768px){
    padding: 6px 10px;
  }
`;

const FilterContainer=styled.div`
  display:flex;
  flex-direction:column;
  background-color:${({theme})=> theme.bg};
  border-radius:10px;
  padding:20px 30px;
`;

const Topic=styled.div`
  color:rgb(244,187,68);
  font-size:24px;
  font-weight:500;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media (max-width:768px){
    font-size:18px;
  }
`;

const Span=styled.div`
  color:rgb(228,155,15);
  font-size: 16px;
  font-weight:400;
  @media (max-width:768px){
    font-size:14px;
  }
`;

const Podcasts=styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  gap:14px;
  padding: 18px 6px;
  @media (max-width:550px){
    justify-content:center;
  }
`;

const Architectures=styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  gap:14px;
  padding: 18px 6px;
  @media (max-width:550px){
    justify-content:center;
  }
`;

// Datos de las arquitecturas con las imágenes importadas
const architectureData = [
  {
    id: 1,
    name: "MVC",
    img: mvcImage, // Usar la imagen importada
    description: "Model-View-Controller: Patrón de diseño que separa la lógica de negocio, la interfaz y el control."
  },
  {
    id: 2,
    name: "MVP",
    img: mvpImage, // Usar la imagen importada
    description: "Model-View-Presenter: Similar a MVC pero con el Presenter como intermediario entre View y Model."
  },
  {
    id: 3,
    name: "MVVM",
    img: mvvmImage, // Usar la imagen importada
    description: "Model-View-ViewModel: Patrón que facilita la separación entre el desarrollo de la GUI y la lógica."
  },
  {
    id: 4,
    name: "Clean Architecture",
    img: cleanImage, // Usar la imagen importada
    description: "Enfoque que enfatiza la separación de concerns y la independencia de frameworks."
  }
];

const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Podcast: Arquitecturas Móviles
        </Topic>
        <Podcasts>
          <PodcastCard/>
        </Podcasts>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Arquitecturas Móviles
          <Link to={`/showall/architectures`} style={{textDecoration:"none"}}>
            <Span>Ver Todas</Span>
          </Link>
        </Topic>
        <Architectures>
          {architectureData.map(arch => (
            <Link 
              to={`/architecture/${arch.name.toLowerCase().replace(' ', '-')}`} 
              style={{textDecoration:"none"}}
              key={arch.id}
            >
              <ArchitectureCard architecture={arch}/>
            </Link>
          ))}
        </Architectures>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Información Adicional
        </Topic>
        <div style={{padding: "10px", color: "#b1b2b3"}}>
          <p>Esta página fue creada como parte de la actividad académica sobre arquitecturas de aplicaciones móviles.</p>
          <p>Incluye un podcast generado con IA y diagramas de las principales arquitecturas utilizadas en desarrollo móvil.</p>
        </div>
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard;