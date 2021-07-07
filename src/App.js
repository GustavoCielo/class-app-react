import GlobalStyle from "./styles/global";
import InputText from "./components/inputText";
import InputSelect from "./components/inputSelect";
import InputDate from "./components/inputDate";
import InputTextArea from "./components/inputTextArea";

function App() {
  return (
    <>
      <GlobalStyle />
      <InputText>teste</InputText>
      <InputSelect />
      <InputDate />
      <InputTextArea />
    </>
  );
}

export default App;
