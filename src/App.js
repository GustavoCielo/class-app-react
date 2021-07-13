import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import ModalCreateCourse from "./components/ModalCreateCourse";
import FormTeacher from "./components/FormTeacher";
import ChatContainer from "./components/ChatContainer";
import RegisterStudent from "./pages/RegisterStudent";
import PageLogin from "./pages/Login";
import FullContainer from "./components/FullContainer";
import ScrollBar from "./components/ScrollBar";
import ModalEditCourse from "./components/ModalEditCourse";
import ModalEnterClass from "./components/ModalEnterClass";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FormTeacher />
      <ScrollBar>
        <ModalCreateCourse />
        <ChatContainer></ChatContainer>
      </ScrollBar>
      <ModalEditCourse />
      <RegisterStudent />
      <PageLogin />
      <FullContainer></FullContainer>
      <ModalEnterClass />
    </>
  );
}

export default App;
