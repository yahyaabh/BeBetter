
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter ,Routes,Route} from "react-router";
import Welcome from './Welcome';
import Bmi from './Bmi';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/bmi' element={<Bmi/>} />
    </Routes>
    
  </BrowserRouter>,
)
