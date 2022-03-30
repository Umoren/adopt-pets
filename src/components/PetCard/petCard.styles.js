import styled from 'styled-components';

export const Card = styled.div`
    border-radius: 5px;
    box-shadow: 0 1px 4px #0000001a;
    img {
        width: 100%;
        height: 10rem;
        object-fit: cover;
    }
`;

export const CardBody = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    padding: 4px;
    position: relative;
    text-align: left;
`;
export const CardText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    padding: 4px;

    span {
        font-weight: 700;
        margin: 0;
    }
`;
