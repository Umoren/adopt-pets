import React from 'react';
import { GenericHeader, GenericFooter } from 'shared';
import { Content } from './genericLayout.styles';
// import { PropTypes } from 'prop-types';

export default function genericLayout({ children }) {
    return (
        <>
            <GenericHeader />
            <Content>{children}</Content>
            <GenericFooter />
        </>
    );
}
