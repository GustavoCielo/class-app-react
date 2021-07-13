import { DivHeader, ListContainer } from "./style";

const SearchArea = () => {
  return (
    <>
      <DivHeader>
        <div>NOME</div>
        <div>CATEGORIA</div>
        <div>DURAÇÃO</div>
        <div>VALOR</div>
        <div>AVALIAÇÃO</div>
      </DivHeader>
      <div>
        <ListContainer>
          {/* aqui vai um map contendo as informações da API */}
          <div>Design UX/UI</div>
          <div>Design</div>
          <div>30 horas</div>
          <div>R$ 500,00</div>
          <div>5.0</div>
        </ListContainer>
      </div>
    </>
  );
};

export default SearchArea;
