import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/pages/Home";
import ChampionDashboard from "./components/pages/ChampionDashboard"
import AgentDetail from "./components/pages/AgentDetail";
import NotFound from "./components/pages/NotFound";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ui/ProtectedRoute";

export default function App() {

  const [isLogged, setIsLogged] = useState(() => {
    return sessionStorage.getItem("isLogged") === "true"
  })

  const handleLogin = () => {
    sessionStorage.setItem("isLogged", "true");
    setIsLogged(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("isLogged");
    setIsLogged(false)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleLogin={handleLogin} />} />
          <Route path="/agents" element={
            <ProtectedRoute isLogged={isLogged}>
              <ChampionDashboard handleLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/agent/:id" element={
            <ProtectedRoute isLogged={isLogged}>
              <AgentDetail />
            </ProtectedRoute>
            } />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
    )
}