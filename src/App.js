import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import View2 from "./views/view2";
import View1 from "./views/view1";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <View1/>
      {/* <View2/> */}
      <Footer />
    </div>
  );
}

export default App;
