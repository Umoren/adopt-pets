import styled from 'styled-components';

export const Button = styled.button`
    font-family: 'Inter';
    position: relative;
    font-size: ${(props) => props.fSize};
    height: 3rem;
    /* transition: all 200ms linear; */
    border-radius: 0.625rem;
    width: ${(props) => props.width};
    letter-spacing: -0.04em;
    padding: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
    border: none;
    cursor: pointer;
    outline: 0;
    cursor: pointer;
    text-decoration: none;
    font-weight: ${(props) => props.FWeight};

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 600px) {
        font-size: 0.875rem;
    }
`;
