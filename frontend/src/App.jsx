import { useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';

import { MyForm } from './components/MyForm';
import { Title } from './components/Title';
import { DisplayFee } from './components/DisplayFee';

import CalculateFee from '../service/Fee';


const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Poetsen';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./public/assets/font/poetsen_One/PoetsenOne-Regular.ttf') format('truetype');
}

body {
  background-color: #009de0;
}
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: stretch;
  height: 100vh;
`;

function App() {
  const [fee, setFee] = useState('-');

  const handleFee = async (inputValues) => {
    const response = await CalculateFee(inputValues);
    setFee(response?.delivery_fee ?? null)
  }

  return (
    <>
    <GlobalStyle />
    <StyledBody>
      <Title />
      <MyForm handleFee={handleFee} setFee={setFee}/>
      <DisplayFee totalFee={fee}/>
    </StyledBody> 
    </>
  )
}

export default App
