import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const List: React.FC = () => {
  const options = [
    { value: 'Felipe', label: 'Felipe' },
    { value: 'Maria', label: 'Maria' },
    { value: 'Ana', label: 'Ana' },
  ]

  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
}

export default List;
