import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Products from './Products'
import ProductInfo from './ProductInfo'
import './App.css'


function App() {




  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="product/:title" element={<Products/>}/>
        <Route path="/product-info/:id" element={<ProductInfo/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
