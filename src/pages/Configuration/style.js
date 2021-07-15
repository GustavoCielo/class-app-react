import styled from "styled-components";

export const ContainerConfiguration = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;

  height: 85%;
  .imgBack {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 250px;
  }
`;
export const Title = styled.h1`
  font-size: 2.3rem;
  margin: 29px 0 28px 70px;
`;

export const ChangeAvatar = styled.div`
  height: 250px;
  width: 220px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  h2 {
    font-size: 18px;
    margin: 12px 0 0 25px;
  }

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: block;
    margin: 30px auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
