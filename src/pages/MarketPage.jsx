import styled from "styled-components"
import FloatingCartButton from "../components/FloatingCartButton"
import Location from "../components/Location"
import Item from "../components/Item"
import TopBar from "../components/TopBar"

export default function MarketPage() {
  return (
    <Container>
      <TopBar />
      <Location />
      <Item
        title={"Pão de queijo"}
        description={"Isso é tudo que eu desejo"}
        image={"https://vovopalmirinha.com.br/wp-content/uploads/2019/06/pao-de-queijo-702x336.jpg"}
        price={20} />
      <Item
        title={"Pão de queijo"}
        description={"Isso é tudo que eu desejo"}
        image={"https://vovopalmirinha.com.br/wp-content/uploads/2019/06/pao-de-queijo-702x336.jpg"}
        price={20} />
      <FloatingCartButton />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 27px 20px;
  background-color: #F7F7F7;
`