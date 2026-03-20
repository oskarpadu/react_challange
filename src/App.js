import Meals from "./components/Meals";
import "./index.css";
import Header from "./components/Header";
import { CartProvider } from "./store/CartContext";

const App = () => {
 return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
