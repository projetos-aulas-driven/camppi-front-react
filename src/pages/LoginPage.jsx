import styled from "styled-components"
import BigLogo from "../components/BigLogo"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <Container>
      <BigLogo />
      <form>
        <Input
          type="email"
          placeholder="E-mail"
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          required
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
