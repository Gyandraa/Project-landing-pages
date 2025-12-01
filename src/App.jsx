import "./index.css";
import Navbar from "./components/layout/navbar";
import Header from "./sections/header";
import About from "./sections/about";
import Products from "./sections/products";
import Review from "./sections/review"

export default function App() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <About/>
      <Products/>
      <Review/>
    </div>
  );
}