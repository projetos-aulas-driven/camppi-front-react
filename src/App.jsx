import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import MarketPage from "./pages/MarketPage"
import SignUpPage from "./pages/SignUpPage"
import { useState } from "react"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/market" element={<MarketPage token={token}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
