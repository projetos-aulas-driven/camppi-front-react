import styled from "styled-components"
import FloatingCartButton from "../components/FloatingCartButton"
import Location from "../components/Location"
import Item from "../components/Item"
import TopBar from "../components/TopBar"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

export default function MarketPage() {
  const [products, setProducts] = useState(null)
  const navigate = useNavigate()
  const { token } = useContext(AuthContext)

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/items"

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.get(URL, config)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err.response.data))
  }, [])

  if (products === null) {
    return <div>Carregando...</div>
  }

  return (
    <Container>
      <TopBar />
      <Location />
      {products.map(prod => (
        <Item
          key={prod.id}
          title={prod.name}
          description={prod.description}
          image={prod.image}
          price={prod.price} />
      ))}
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