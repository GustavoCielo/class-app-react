import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  .modal {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    background-color: rgba(214, 214, 239, 0.9);
    border-radius: 20px;
  }
  .backgroundImage {
    height: 100%;
    width: 100%;
    background: url(${({ backgroundImage }) => backgroundImage});
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: right;
    border-radius: 20px;
  }
`;
