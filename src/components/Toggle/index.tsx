import React from 'react';
import { 
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';

const Toogle: React.FC = () => (
    <Container>
        <ToggleLabel>Ligth</ToggleLabel>
        <ToggleSelector
            checked
            onChange={() => console.log('mudou')}
            uncheckedIcon={false}
            checkedIcon={false}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toogle;