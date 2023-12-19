import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import View2 from "./views/view2";
import View1 from "./views/view1";
import View3 from "./views/view3";
import View4 from "./views/View4";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {/* <View1/> */}
      {/* <View2/> */}
      {/* <View3/> */}
      <View4/>
      <Footer />
    </div>
  );
}

export default App;
