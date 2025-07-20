import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import RecordsUpdatePage from "./components/RecordsUpdate/RecordsUpdatePage";
import HomePage from './components/HomePage/HomePage';
import Header from "./components/Header/Header";
import UsefulInformation from './components/UsefulInformation/UsefulInformation';
import Events from './components/Events/Events';
import Results from './components/Results/Results';
import Records from './components/Records/Records';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { Authenticator } from '@aws-amplify/ui-react';

export default function App() { 

  return (    
    <Authenticator.Provider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Results" element={<Results />} />
            <Route path="/Records" element={<Records />} />
            <Route path="/RecordsUpdate" element={<RecordsUpdatePage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/UsefulInformation" element={<UsefulInformation />} />
            {/* Default route to HomePage */}
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Authenticator.Provider>
    
  );
}

