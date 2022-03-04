import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import { About } from "./pages/About/About"

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}