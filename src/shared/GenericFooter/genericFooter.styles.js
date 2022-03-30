import styled from 'styled-components';
import { SubTextContent } from 'components/CoverArea/coverArea.styles';

export const Wrapper = styled.footer`
    display: grid;
    place-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: #f0fff0;
    position: relative;
    top: 3rem;
    a {
        color: #6504b5;
    }
`;

export const FooterText = styled(SubTextContent)`
    color: #000;
`;
