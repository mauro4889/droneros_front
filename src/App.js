import { NavBar } from './components/NavBar/NavBar';
import { GlobalStyle } from './styles/GlobalStyles';
import { Routes } from './routes/Routes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsMiddleware } from './redux/middleware/getAllProduct';



function App() {
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getProductsMiddleware())
  }, [dispatch])

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
