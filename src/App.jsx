import { Children } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return ( 
    <Children>
    
      <Header/>

      <Children>
        conteudo
      </Children>

      <Footer/>

    </>

   );
}
 
export default App;