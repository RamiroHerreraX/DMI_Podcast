// src/App.js
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import ArchitectureInfo from "./pages/ArchitectureInfo";
import ArchitectureThemes from "./pages/ArchitectureThemes";

// Importamos las nuevas páginas
import CloudIntegrationPage from "./pages/CloudIntegrationPage";
import LocalSyncCloudPage from "./pages/LocalSyncCloudPage";
import ScalabilityMicroservicesPage from "./pages/ScalabilityMicroservicesPage";
import EmergingTechChallengesPage from "./pages/EmergingTechChallengesPage";
import AboutPage from "./pages/AboutPage";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
          <Frame>
            <NavBar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            <Routes>
              {/* Página de inicio: ArchitectureThemes */}
              <Route path="/" element={<ArchitectureThemes />} />
              
              {/* Ruta /info: AboutPage */}
              <Route path="/info" element={<AboutPage />} />
              
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Rutas para patrones arquitectónicos (MVC, MVP, etc.) */}
              <Route path="/architecture/:type" element={<ArchitectureInfo />} />

              {/* Nuevas rutas para los temas especializados */}
              <Route path="/cloud-integration" element={<CloudIntegrationPage />} />
              <Route path="/local-sync-cloud" element={<LocalSyncCloudPage />} />
              <Route path="/scalability-microservices" element={<ScalabilityMicroservicesPage />} />
              <Route path="/emerging-tech-challenges" element={<EmergingTechChallengesPage />} />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;