import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/index';


function App() {
  return (
    <>
    <div className="h-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default App;