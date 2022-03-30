import styled from 'styled-components';

export const CardsContainer = styled.div`
    margin: auto;
    margin-bottom: 5rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    align-items: end;
    background-color: #f5f5f5;
    min-height: 1%;
`;

export const ErrorContainer = styled.div`
    margin: auto;
    display: grid;
    place-content: center;
`;
