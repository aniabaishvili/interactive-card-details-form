import styled from 'styled-components';
import { Global } from  './Global';
import './App.css'
import Cards from './components/Cards';

function App() {


  return (
    <>
    <MainContainer>
     <Global/>
     <Cards/>
     </MainContainer>
     
    </>
  )
}

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height:100vh;
  
`

export default App
