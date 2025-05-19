import React from 'react';
import './App.css';
import RecordsUpdatePage from "./components/RecordsUpdate/RecordsUpdatePage";
import HomePage from './components/HomePage/HomePage';
import Header from "./components/Header/Header";
import UsefulInformation from './components/UsefulInformation/UsefulInformation';
import Events from './components/Events/Events';
import Results from './components/Results/Results';
import Records from './components/Records/Records';
import Contact from './components/Contact/Contact';


function App() {  
  return (
    <div className="App"> 
      <Header />
      {(() => {
        switch (window.location.pathname) {
          case '/Home': return <HomePage /> /* falls through */
          case '/Events': return <Events /> /* falls through */
          case '/Results': return <Results /> /* falls through */
          case '/Records': return <Records /> /* falls through */
          case '/Records%20Update': return <RecordsUpdatePage /> /* falls through */
          case '/Contact': return <Contact /> /* falls through */
          case '/Useful%20Information': return <UsefulInformation /> /* falls through */
          default: return <HomePage />
      }
      })()}
    </div>

  );
}

export default App;