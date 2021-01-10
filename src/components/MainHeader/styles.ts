import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.secondary};
    padding: 10px 25px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    color: #ffffff;
`;
