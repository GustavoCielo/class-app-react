import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
  flex: 1;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--hightlight-shadow);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-theme);

    border-radius: 5px;
  }
`;
