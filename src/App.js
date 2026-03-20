import Meals from "./components/Meals";
import "./index.css";
import Header from "./components/Header";
import { CartProvider } from "./store/CartContext";
import Modal from "./components/UI/Modal";
import { useState } from "react";

const App = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);

return (
    <CartProvider>
        <Header onOpenCart={() => setModalIsOpen(true)} />
        <main>
            <Meals />
        </main>
        <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
            <p>Test</p>
        </Modal>
    </CartProvider>
  );
}

export default App;
