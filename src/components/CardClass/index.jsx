import { CardClassContainer } from "./style";

const CardClass = ({ title, date, hour, subscribed, category }) => {
  return (
    <CardClassContainer>
      <header>
        <h2>Design UI/UX</h2>
      </header>
      <section>
        <p>
          <strong>Próximo Encontro: </strong>16/07
        </p>
        <p>
          <strong>Hora: </strong>09:00h
        </p>
        <p>
          <strong>Inscritos: </strong>32
        </p>
      </section>
      <button>SALA</button>
    </CardClassContainer>
  );
};

export default CardClass;
