import styled from "styled-components";

export const ContainerFilter = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-between;
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  h1 {
    font-size: 3rem;
  }

  span {
    margin: 10px;
  }

  h3 {
    font-size: 1.5rem;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;
