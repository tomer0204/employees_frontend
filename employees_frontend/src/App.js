import ListEmployee from "./components/ListEmployee";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Employee from "./components/Employee";
function App() {
  return (
      <>
          <BrowserRouter>
            <Header/>
              <Routes>
                  <Route path="/" element={<ListEmployee/> }/><Route/>
                  <Route path = '/employees' element={<ListEmployee/> }/><Route/>
                  <Route path = '/add-employee' element={<Employee/> }/><Route/>
              </Routes>

            <Footer/>
          </BrowserRouter>
      </>
  );
}

export default App;
