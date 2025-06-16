import { React } from 'react'
import Banner from "./components/banner"
import Footer from "./components/footer"
import Navbar from './components/Navbar'
import Sales from "./components/sales"
import Background from './components/background'
import NewProduct from "./pages/newproduct"
import Featured from "./pages/feautured"
import Product from './pages/product'
import Hub from "./pages/hub"
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function App() {
  

  return (
    <>

      <div>
        <Banner/>
        <Navbar/>
        <Sales/>
        <Background/>
        <NewProduct/>
        <Featured/>
        <Product/>
        <Hub/>
        <Footer/>
      </div>

    </>
  )
}

export default App
