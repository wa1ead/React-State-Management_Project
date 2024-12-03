import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
