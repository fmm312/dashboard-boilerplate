import React from 'react';
import { 
  Container, 
  Content, 
  Filter 
} from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {
  const months = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
  ]

  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ]

  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#e44c4e">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filter>
        <button 
          type="button"
          className="tag-filter tag-filter-recurrent"
        >
          Recorrentes
        </button>

        <button 
          type="button"
          className="tag-filter tag-filter-eventual"
        >
          Eventuais
        </button>
      </Filter>

      <Content>
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
      </Content>
    </Container>
  );
}

export default List;
