import GlobalStyle from "./styles/global";

import PageLogin from "./pages/Login";
import Courses from "./pages/Courses";
import FullContainer from "./components/FullContainer";
import ScrollBar from "./components/ScrollBar";
import ModalEditCourse from "./components/ModalEditCourse";
import ModalEnterClass from "./components/ModalEnterClass";

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollBar></ScrollBar>
      <ModalEditCourse />
      <PageLogin />
      <FullContainer></FullContainer>
      <ModalEnterClass />
      <Courses />
    </>
  );
}

export default App;
