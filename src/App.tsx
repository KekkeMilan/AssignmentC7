import './resources/index.css'
import NavBar from './components/NavBar.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import { Route, Routes, Navigate  } from "react-router-dom";
import {useAuthStore} from "./hooks/Store.ts";

export default function MyApp() {
  const { isAuthenticated } = useAuthStore();

    return(
      <>
        <NavBar />
          <div className="WelcomeText">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
            </Routes>
          </div>
        </>
    )
}