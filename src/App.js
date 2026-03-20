import Meals from "./components/Meals";
import "./index.css";
import Header from "./components/Header";

const App = () => {
 return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
