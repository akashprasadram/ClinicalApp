import './App.css';
import {Route,Routes} from 'react-router-dom';
import CollectClinicals from './components/CollectClinicals';

import AnalyzeData from './components/AnalyzeData';
import Home from './components/Home';
import AddPatient from './components/AddPatient';
import {toast,ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} 
        position = {toast.POSITION.BOTTOM_CENTER}/>
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/addPatient" element={<AddPatient/>}/>
       <Route  path="/patientDetails/:patientId" element={<CollectClinicals/>}/>
        
        <Route  path="/analyze/:patientId" element={<AnalyzeData/>}/> 
        </Routes>
    </div>
  );
}

export default App;
