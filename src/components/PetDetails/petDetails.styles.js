import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const PetImg = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    object-fit: cover;
    width: 100%;
    background-image: url(${(props) => props.image});
    height: calc(0.5 * 100vw);
    background-position: center;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const PreviousPage = styled.button`
    background: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.75rem;
    pointer: cursor;
    position: absolute;
    top: 5rem;
    left: 2rem;
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.75fr;
    padding: 1.5rem;
    grid-gap: 2rem;
    height: 70vh;
`;
export const GridBox = styled.div`
    background-color: ${(props) => props.bgColor};
    border-radius: 5px;
    height: ${(props) => props.height};
    padding: 2rem;
    color: #18191f;
`;

export const AboutPet = styled.div`
    margin-top: 2rem;
`;

export const NormalText = styled.p`
    font-size: 14px;
    font-weight: 20px;
    margin-top: ${(props) => props.top};
    span.about {
        font-weight: 700;
    }

    span.normal {
        font-weight: 400;
        position: relative;
        top: 0.5rem;
    }
`;

export const SimpleCard = styled.div`
    padding: 1rem;
    color: #fff;
`;

export const SideCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 2rem;
`;
