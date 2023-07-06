import CardPage from "pages/CardPage";
import { MyProvider } from "components/context/Provider";

function App() {
  return (
    <MyProvider>
      <CardPage />
    </MyProvider>
  );
}

export default App;
