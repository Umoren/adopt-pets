import React from 'react';
import {
    Wrapper,
    ImgWrapper,
    CoverImg,
    HeadTextContent,
    InputContainer,
    ContentWrapper
} from './coverArea.styles.js';

export default function CoverArea() {
    return (
        <Wrapper>
            <ImgWrapper>
                <CoverImg />
            </ImgWrapper>

            <ContentWrapper>
                <HeadTextContent color={'#f0fff0'}> Meet your new best friend</HeadTextContent>
                <InputContainer>
                    <select name="sortValue">
                        <option value="All">All</option>
                        <option value="Name">Name</option>
                        <option value="Breed">Breed</option>
                    </select>

                    <input type="search" />
                </InputContainer>
            </ContentWrapper>
        </Wrapper>
    );
}
