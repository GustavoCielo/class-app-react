import { MainStyled } from "./style";

import HeadAndAside from "../../components/HeaderAndAside";
import CardInfo from "../../components/CardInfo";
import ScrollBar from "../../components/ScrollBar";
import StudentAnimation from "../../animations/StudentAnimation/StudentAnimation.json";
import LottieAnimation from "../../lottie";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

const PageStudents = ({
  qtdDiscents = 0,
  students = [
    {
      name: "Leo",
      email: "teste",
      course: "programacao",
      dateSubscribed: "02/02/2020",
    },
  ],
}) => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === false) {
    return <Redirect to="/login" />;
  }

  return (
    //Falta chamar os dados do context
    <>
      <HeadAndAside>
        <MainStyled>
          <div className="titulo">
            <h1>DISCENTES ({qtdDiscents})</h1>
          </div>
          <ScrollBar className="cards">
            {students.map((student, index) => {
              return (
                <CardInfo
                  name={student.name}
                  email={student.email}
                  course={student.course}
                  dateSubscribed={student.dateSubscribed}
                  key={index}
                />
              );
            })}
          </ScrollBar>
          <div className="animacao">
            <LottieAnimation
              lotti={StudentAnimation}
              height={"100%"}
              width={"90%"}
            />
          </div>
        </MainStyled>
      </HeadAndAside>
    </>
  );
};

export default PageStudents;
