import { useState } from "react"
import styled from "styled-components"
import BigLogo from "../components/BigLogo"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link } from "react-router-dom"

export default function LoginPage() {
  const [city, setCity] = useState("BH")

  return (
    <Container>
      <BigLogo />
      <form>
        <Input
          type="text"
          placeholder="Nome"
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          required
        />
        <Input
          type="url"
          placeholder="Imagem"
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          required
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
