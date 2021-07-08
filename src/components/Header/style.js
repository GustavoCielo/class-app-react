import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: relative;
  display: flex;
  width: 779px;
  height: 79px;
  top: 7px;
  background: #f8f8fd;
  border-radius: 20px;
  //background color cinza só para ter uma visualização por enquanto
  background-color: #dedede;

  .inputContainer {
    position: relative;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 68%;
    .search {
      width: 30px;
      height: 30px;
    }

    input {
      position: relative;
      width: 302px;
      height: 40px;

      background: rgba(214, 214, 239, 0.25);
      border: 1px solid #d6d6ef;
      box-sizing: border-box;
      border-radius: 8px;
    }
    input::placeholder {
      padding-left: 30px;
    }
  }

  .profileContainer {
    width: 32%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .imgContainer {
    img {
      width: 50px;
      height: 50px;
    }
  }

  .name {
    p {
      font-family: Red Hat Display;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;

      color: #00171f;
    }
  }

  .icon {
    span {
    }
  }
`;