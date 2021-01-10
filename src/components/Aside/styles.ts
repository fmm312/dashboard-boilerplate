import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    padding-left: 20px;
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;    
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

