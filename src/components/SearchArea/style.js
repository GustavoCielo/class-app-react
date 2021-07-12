import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-theme);
  color: var(--background-primary);
  max-width: 680px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0 0;
  padding: 16px;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  background-color: var(--hightlight-shadow);
  height: 55px;
  border-radius: 20px;
  font-size: 14px;
  color: #000000;
  max-width: 670px;
  padding: 8px 56px 8px 8px;
  font-weight: bold;
`;
