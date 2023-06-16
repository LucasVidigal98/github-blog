import { Container, HeaderCover } from "./styles";

import HeaderImg from '../../assets/header.png';

export function Header() {
  return (
    <Container>
      <HeaderCover src={HeaderImg} />
    </Container>
  )
}