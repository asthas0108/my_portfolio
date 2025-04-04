import './App.css';
import './index.css';
import { Loading } from './components/Loading';
import { useState } from 'react';
import { Navbar } from './components/Navbar';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loading onComplete = {() => setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar/>
        </div>
    </>
  )
}

export default App;
