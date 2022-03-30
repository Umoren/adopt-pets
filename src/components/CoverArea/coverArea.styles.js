import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 100%;
    height: 70vh;
`;

export const ImgWrapper = styled.div`
    width: 100%;
    box-sizing: content-box;
    position: relative;
    z-index: 5;
`;

export const CoverImg = styled.img`
    width: 100%;
    position: absolute;
    object-fit: cover;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
        url('https://res.cloudinary.com/samtech/image/upload/v1648545585/jana-shnipelson--gcWNE_R3cc-unsplash.jpg');
    background-size: 100%;
    height: 70vh;
`;

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 6;
    height: 70vh;
    display: grid;
    place-content: center;
`;

export const HeadTextContent = styled.h1`
    font-size: 3rem;
    font-weight: ${(props) => (props.fWeight ? props.fWeight : '700')};
    color: ${(props) => (props.color ? props.color : '#f0fff0')};
    line-height: 40px;
`;
export const SubTextContent = styled.p`
    font-size: 1.125rem;
    font-weight: ${(props) => (props.fWeight ? props.fWeight : '700')};
    color: ${(props) => (props.color ? props.color : '#f0fff0')};
`;

export const InputContainer = styled.div`
    margin: auto;
    margin-top: 1rem;
    width: 80%;
    background-color: #f0fff0;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    height: 60px;
    input[type='text'],
    input[type='search'] {
        box-shadow: inset 0 -3px #fff;
        color: #4d4751;
        height: 60px;
        padding: 12px;
        width: inherit;
        appearance: none;
        background-color: #fff;
        border: 1px solid #d2d1d3;
        border-radius: 5px;
        box-sizing: border-box;
        display: block;
        font-size: 16px;
        line-height: normal;
        padding: 15px;
        outline: none;
        transition: border-color 0.15s;
        outline: none;
    }
    select {
        border-radius: 5px;
        border: none;
        outline: none;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`;
