import { createGlobalStyle, styled } from 'styled-components'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import './fonts/font.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: black;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding-inline: 48px;
  font-family: "IBM Plex Sans", sans-serif;

  @media only screen and (max-width: 800px) {
    padding-inline: 32px;
  }

  @media only screen and (max-width: 402px) {
    padding-inline: 24px;
    font-size: 12px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Body>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Body>
      </Container>
    </>
  );
}

export default App;
