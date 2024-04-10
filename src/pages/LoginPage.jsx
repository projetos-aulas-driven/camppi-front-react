import styled from "styled-components"
import BigLogo from "../components/BigLogo"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export default function LoginPage({ setToken }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function sendLogin(e) {
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/auth/login"
    const body = { email, password }

    axios.post(URL, body)
      .then(res => {
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
        navigate("/market")
      })
      .catch(err => console.log(err.response.data))
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={sendLogin}>
        <Input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </form>

      <StyledLink to="/sign-up">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F60919;
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`
