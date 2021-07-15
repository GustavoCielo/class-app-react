import { DivHeader, ListContainer , Container} from "./style";
import { useCourses } from "../../providers/Courses";
import star from "../../assets/star.svg";


const SearchArea = () => {
  const { courses } = useCourses();
  return (
    <>
      <DivHeader>
        <div>NOME</div>
        <div>CATEGORIA</div>
        <div>DURAÇÃO</div>
        <div>VALOR</div>
        <div>AVALIAÇÃO</div>
      </DivHeader>
<Container>
      {courses?.map((item, index) => {
        return (
          <ListContainer key={index}>
            <div>
              {item.name.length > 22
                ? item.name.substring(0, 22) + "..."
                : item.name}
            </div>
            <div>{item.category}</div>
            <div>{item.totalHours}</div>
            <div>R$ {item.price}</div>
            <div>
              <img src={star} alt="" />
              {item.rating}
            </div>
          </ListContainer>
        );
      })}
      </Container>
    </>
  );
};

export default SearchArea;
