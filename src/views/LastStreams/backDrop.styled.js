import styled from 'styled-components';

export const BackDropStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  position: fixed;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;
