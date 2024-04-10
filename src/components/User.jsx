import styled from "styled-components"

export default function User({ name, image }) {
  return (
    <Container>
      <Text>Olá, {name}</Text>
      <UserImage src={image} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  top: 5px;
  display: flex;
  align-items: center;
`

const Text = styled.div`
  margin-right: 10px;
  font-size: 12px;
  color: #000000;
`

const UserImage = styled.img`
  height: 28px;
  width: 28px;
  object-fit: cover;
  border: 1px solid #5A5A5A;
  border-radius: 50%;
`
