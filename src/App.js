import GlobalStyle from "./styles/global";
import Input from "./components/input";
import InputSelect from "./components/inputSelect";
import InputDate from "./components/inputDate";
import InputTextArea from "./components/inputTextArea";

function App() {
  return (
    <>
      <GlobalStyle />
      <Input tipo={"password"} placeholder="senha" />
      <InputSelect />
      <InputDate />
      <InputTextArea />
    </>
  );
}

export default App;
