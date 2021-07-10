import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import ModalCreateCourse from "./components/ModalCreateCourse";
import FormTeacher from "./components/FormTeacher";
import ChatContainer from "./components/ChatContainer";
import RegisterStudent from "./pages/RegisterStudent";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FormTeacher />
      <ModalCreateCourse />
      <ChatContainer></ChatContainer>
      <RegisterStudent />
    </>
  );
}

export default App;
