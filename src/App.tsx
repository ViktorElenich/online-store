import { Route, Routes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import { RoutesEnum } from './enums';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProductItemInformation from './components/ProductItemInformation/ProductItemInformation';
import Cart from './pages/Cart/Cart';
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <div className='App' data-testid='App'>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path={RoutesEnum.Home} element={<ProductsContainer />} />
            <Route path={RoutesEnum.Products} element={<ProductItemInformation />}>
              <Route path=':id' element={<ProductItemInformation />} />
            </Route>
            <Route path={RoutesEnum.Cart} element={<Cart />} />
            <Route path={RoutesEnum.About} element={<AboutPage />} />
            <Route path={RoutesEnum.Error404} element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </QueryParamProvider>
  );
}

export default App;
