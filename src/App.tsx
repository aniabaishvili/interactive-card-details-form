import styled from "styled-components";
import { Global } from "./Global";
import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  return (
    <>
      <MainContainer>
        <Global />
        <Cards />
        <Form />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 60px;
  }
`;

export default App;
