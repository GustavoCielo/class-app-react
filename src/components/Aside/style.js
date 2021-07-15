import styled from "styled-components";

export const AsideContainer = styled.aside`
  margin: 7px;
  background-color: var(--color-theme);
  width: 15%;
  height: calc(100vh - 14px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #020340;
  @media (min-width: 320px) and (max-width: 768px) {
    height: 15%;
    width: 100%;
    padding: 8px 0;
    flex-direction: row;
  }
`;

export const AsideMainContainerImage = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  flex-direction: column;
  padding: 0 30px;
  box-sizing: border-box;

  .figure-aside {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 1300px) {
    padding: 0;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const IconSelected = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BallSelected = styled.div`
  @media (max-width: 1300px) {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--call-to-action);
    position: absolute;
    bottom: -25px;
    display: ${({ selected }) => !selected && "none"};
  }
`;

export const AsideBottomContainerImage = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .figure-bottom {
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      color: var(--background-secondary);
    }
  }
`;

export const AsideTopContainerImage = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .figure-top {
    width: 30px;
    height: 30px;
  }
`;

export const Li = styled.li`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  color: ${({ selected }) => selected && "var(--background-secondary)"};
  @media (max-width: 1300px) {
    justify-content: center;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0 8px;
  }
`;

export const Text = styled.span`
  padding-left: 10px;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1300px) {
    display: none;
    text-align: center;
  }
`;
