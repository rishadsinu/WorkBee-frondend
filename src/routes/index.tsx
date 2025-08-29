import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/Page'
import Login from '../pages/Login'

export default function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}
