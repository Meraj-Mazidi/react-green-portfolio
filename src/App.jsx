import React from "react";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/Intro/Intro";
import ProductList from "./Components/productList/ProductList";
import Toggle from "./Components/toggle/Toggle";

const App = () => {

  const [dark, setDark] = React.useState(false)

  const background = {
    backgroundColor: dark ? 'rgb(28, 28, 28)' : 'white'
  }

  return (
    <main className="effect" style={background}>
      <Toggle setDark={setDark} dark={dark} />
      <Intro dark={dark} />
      <About dark={dark} />
      <ProductList dark={dark} />
      <Contact dark={dark} />
    </main>

  )
};

export default App; 