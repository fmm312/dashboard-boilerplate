import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'Felipe', label: 'Felipe' },
    { value: 'Maria', label: 'Maria' },
    { value: 'Ana', label: 'Ana' },
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;
