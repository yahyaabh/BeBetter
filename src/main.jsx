
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter ,Routes,Route} from "react-router";
import Welcome from './Welcome';
import Bmi from './Bmi';
import BmiTips from './BmiTips';
import Wellness from './Wellness';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/bmi' element={<Bmi/>} />
     
      <Route path='/bmitips' element={<BmiTips/>} />
      <Route path='/wellness' element={<Wellness/>}></Route>
    </Routes>
    
  </BrowserRouter>,
)
