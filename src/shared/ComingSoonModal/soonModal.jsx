/* eslint-disable no-unused-vars */
import React from 'react';

import PropTypes from 'prop-types';
import { ContainerModal, OverallWrapper, CloseButton, ChildrenWrapper } from './soonModal.styles';

import CloseIcon from 'assets/svgs/close.svg';

export default function SoonModal({ close, text }) {
    const closeOut = (e) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };
    return (
        <ContainerModal onClick={(e) => closeOut(e)}>
            <OverallWrapper>
                <CloseButton onClick={() => close()}>
                    <img width="30px" src={CloseIcon} />
                </CloseButton>
                <ChildrenWrapper>{text && <h1>{text}</h1>}</ChildrenWrapper>
            </OverallWrapper>
        </ContainerModal>
    );
}

SoonModal.propTypes = {
    close: PropTypes.func,
    text: PropTypes.string
};
