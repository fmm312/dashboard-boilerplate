import React from 'react';
import { 
  Container,
  Header,
  Title,
  MenuContainer,
} from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
        <Header>
          <Title>Título</Title>
        </Header>

        <MenuContainer>
          <Title>Menu</Title>
        </MenuContainer>
    </Container>
  );
}

export default Aside;
