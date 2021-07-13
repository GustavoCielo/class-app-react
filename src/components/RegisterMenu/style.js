import styled from "styled-components";
import discente from "../../assets/discente.png";
import docente from "../../assets/docente.png";

export const Image = styled.div`
  background-image: ${({ student }) =>
    student ? `url(${discente})` : `url(${docente})`};
  width: 100%;
  height: 100%;
  bottom: -20px;
  filter: grayscale(100%) blur(3px);
  transition: 500ms;
  position: absolute;

  &:hover {
    filter: grayscale(0);
  }
`;

export const TextTop = styled.div`
  margin: 0;
  padding: 0;
  filter: none;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  pointer-events: none;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 400ms ease-out;
`;

export const TextBottom = styled(TextTop)`
  justify-content: flex-start;
`;

export const TitleStyle = styled.h1`
  font-size: 3.5rem;
  color: var(--call-to-action);
`;

export const SubtitleStyle = styled.h3`
  color: var(--background-primary);
`;

export const Container = styled.div`
  background-color: var(--hightlight-shadow);
  width: 320px;
  height: 470px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;

  &:hover ${TextTop} {
    height: 74px;
  }

  &:hover ${TextBottom} {
    height: 0;
  }
`;
