import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex flex-col w-full ml-[380px] mt-[100px]">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
