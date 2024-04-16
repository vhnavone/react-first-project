import {BrowserRouter as Router, Link, Outlet, Route, Routes} from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import Characters from './pages/Characters';

function App() {



  return (
    <>
      <div className='App'>
        <Router>


          <Routes>

            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}/>
              <Route path="/characters" element={<Characters />}/>
            </Route>
          </Routes>


        </Router>
      </div>
    </>
  )
}

function Layout() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default App
