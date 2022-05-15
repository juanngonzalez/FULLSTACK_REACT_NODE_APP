import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar';
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import UsPage from './pages/UsPage/UsPage'
import NewsPage from './pages/NewsPage/NewsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import SkatePage from './pages/SkatePage/SkatePage'
import ClothesPage from './pages/ClothesPage/ClothesPage'
import SkateDetail from './pages/SkatePage/CardSkatePage/SkateDetail/SkateDetail'
import TruckDetail from './pages/SkatePage/CardTruckPage/TruckDetail/TruckDetail';
import './App.css'
import ManClothesPage from './pages/ClothesPage/ManClothesPage/ManClothesPage';
import WomanClothesPage from './pages/ClothesPage/WomanClothesPage/WomanClothesPage';
import KidsClothesPage from './pages/ClothesPage/KidsClothesPage/KidsClothesPage';
import CartPage from './pages/CartPage/CartPage'
import { CartContextProvider } from './pages/CartPage/CartContext';
import MostWantedDetail from './pages/ClothesPage/ManClothesPage/CardMostWanted/MostWantedDetail/MostWantedDetail';
import ShoesDetail from './pages/ClothesPage/ManClothesPage/CardShoesPage/ShoesDetail/ShoesDetail';
import ClothesDetail from './pages/ClothesPage/WomanClothesPage/CardClothes/ClothesDetail/ClothesDetail'


function App() {
  return (
    <BrowserRouter>
<CartContextProvider>
        <NavBar/>
        <Header/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/skate' exact component={SkatePage}/>
            <Route path='/detail/skate/:idDetalle' exact component={SkateDetail}/>
            <Route path='/detail/truck/:idDetalle' exact component={TruckDetail}/>
            <Route path='/clothes' exact component={ClothesPage}/>
            <Route path='/us' exact component={UsPage}/>
            <Route path='/news' exact component={NewsPage}/>
            <Route path='/contact' exact component={ContactPage}/>
            <Route path='/cart' exact component={CartPage}/>
            <Route path='/clothes/man' exact component={ManClothesPage}/>
            <Route path='/detail/man/mostwanted/:idDetalle' exact component={MostWantedDetail}/>
            <Route path='/detail/man/shoes/:idDetalle' exact component={ShoesDetail}/>
            <Route path='/clothes/woman' exact component={WomanClothesPage}/>
            <Route path='/detail/woman/clothes/:idDetalle' exact component={ClothesDetail}/>
            
            <Route path='/clothes/kids' exact component={KidsClothesPage}/>
            <Route path='/clothes/kids/clothes/:idDetalle' exact component={ClothesDetail}/>
          </Switch>
          </CartContextProvider>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;
