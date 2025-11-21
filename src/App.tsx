import "./App.scss";
import { About } from "./components/About/About";
import { FAQ } from "./components/FAQ/FAQ";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { PastTransactions } from "./components/PastTransactions/PastTransactions";
import { Profit } from "./components/Profit/Profit";
import { Tariffs } from "./components/Tariffs/Tariffs";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Profit />
      <PastTransactions />
      <About />
      <Tariffs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
