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
  
`

export default App
