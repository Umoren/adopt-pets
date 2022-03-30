import styled from 'styled-components';

export const ContainerModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(64, 64, 64, 0.5);
    backdrop-filter: blur(8px);

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 100vh;
    }
`;

export const OverallWrapper = styled.div`
    width: 600px;
    background: #ffff;
    height: 400px;
    border-radius: 15px;
    display: grid;
    place-content: center;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const ChildrenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 2rem;
    font-family: 'Inter';
    font-size: 3rem;
    color: #404040;
    h1 {
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
        margin: auto;
        justify-content: center;
        align-items: center;

        h1 {
            width: 100%;
            text-align: center;
            font-size: 23px;
        }
    }
`;

export const CloseButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background: transparent;
    position: absolute;
    top: 1rem;
    right: 1rem;
`;
export const CloseButtonContainer = styled.div`
    margin-right: 0.8rem;
`;
