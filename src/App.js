import GlobalStyle from "./styles/global";
import Courses from "./pages/Courses";
import ModalEditCourse from "./components/ModalEditCourse";
import ModalCreateCourse from "./components/ModalCreateCourse";
function App() {
  return (
    <>
      <GlobalStyle />
      <Courses />
      <ModalEditCourse />
      <ModalCreateCourse />
    </>
  );
}

export default App;
