import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/main.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import myAlert from './components/myAlert/myAlert.jsx';


function App() {
  return (
    <>
      <myAlert />
      <Navbar />    
      <Main />
      <Footer />
    </>
  );
}

export default App;
