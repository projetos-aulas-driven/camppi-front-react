import { useState } from "react"
import styled from "styled-components"
import BigLogo from "../components/BigLogo"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function SignUpPage() {
  const [city, setCity] = useState("BH")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function createAccount(e) {
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/auth/sign-up"
    const body = { name, email, image, password, city }

    axios.post(URL, body)
      .then(() => navigate("/"))
      .catch(err => console.log(err.response.data))
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={createAccount}>
        <Input
          type="text"
          placeholder="Nome"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="url"
          placeholder="Imagem"
          required
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Grid>
          <Button type="button" isActive={city === 'BH'} onClick={() => setCity("BH")}>BH</Button>
          <Button type="button" isActive={city === 'RJ'} onClick={() => setCity("RJ")}>RJ</Button>
          <Button type="button" isActive={city === 'SP'} onClick={() => setCity("SP")}>SP</Button>
        </Grid>

        <Button type="submit">Cadastrar</Button>
      </form>
      <StyledLink to="/">Já possui uma conta? Faça login</StyledLink>
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

const Grid = styled.div`
  display: flex;
  width: 100%;

  *:not(:last-child) {
    margin-right: 10px;
  }
`

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`
