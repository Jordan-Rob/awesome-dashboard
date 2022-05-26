import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
            <TooltipComponent content="settings" position="Top">
              <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray'>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
