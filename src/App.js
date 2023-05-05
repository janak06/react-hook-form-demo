import "yup-phone-lite";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {   Route, BrowserRouter, Routes  } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route  path='/create' element={<Create />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
