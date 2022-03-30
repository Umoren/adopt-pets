import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    background: #f0fff0;
    border-bottom: 1px solid #005ce6;
    height: 4rem;
    padding: 2rem;
`;

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`;
export const LogoWrapper = styled.div``;

export const MenuListWrapper = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
`;

export const MenuListItem = styled.li`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        opacity: 0.7;
    }
`;
