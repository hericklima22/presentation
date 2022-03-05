import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import { About } from "./pages/About/About"
import { Home } from "./pages/Home/Home"

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}