import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import MarketPage from "./pages/MarketPage"
import SignUpPage from "./pages/SignUpPage"
import { useState } from "react"
import UserContext from "./contexts/UserContext"
import AuthContext from "./contexts/AuthContext"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/market" element={<MarketPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
