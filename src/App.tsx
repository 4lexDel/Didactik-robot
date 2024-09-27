import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import IdePage from './pages/IdePage';
import { ThemeContext } from './Contexts/ThemeContext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="app bg-background text-text font-body h-screen flex flex-col">
      <Router>
        <Header onThemeToggle={(theme: string) => setTheme(theme)}></Header>
        
        <ThemeContext.Provider value={theme}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/ide' element={<IdePage/>}/>
          </Routes>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;


//https://www.realtimecolors.com/?colors=0a0605-fcfaf8-c9644a-e89a87-ee7253&fonts=Work%20Sans-Work%20Sans