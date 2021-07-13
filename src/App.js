import GlobalStyle from "./styles/global";

import PageLogin from "./pages/Login";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <GlobalStyle />
      <Courses />
      <PageLogin />
    </>
  );
}

export default App;
