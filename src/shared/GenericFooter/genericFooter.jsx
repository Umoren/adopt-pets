import React from 'react';
import { Wrapper, FooterText } from './genericFooter.styles';

export default function GenericFooter() {
    return (
        <Wrapper>
            <FooterText>
                {' '}
                Built by{' '}
                <a href="https://bit.ly/umoren" target="_blank" rel="noreferrer noopener">
                    Samuel Umoren
                </a>
            </FooterText>
        </Wrapper>
    );
}
