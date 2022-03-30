import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Wrapper,
    NavWrapper,
    LogoWrapper,
    MenuListWrapper,
    MenuListItem
} from './genericHeader.styles';
import SoonModal from '../../shared/ComingSoonModal/soonModal';

export default function GenericHeader() {
    const [showUploadInfo, setShowUpdateInfo] = useState(false);
    return (
        <Wrapper>
            <NavWrapper>
                <LogoWrapper>
                    <NavLink to="/"> Adoptly </NavLink>
                </LogoWrapper>

                <MenuListWrapper>
                    <MenuListItem>
                        <NavLink to="" onClick={() => setShowUpdateInfo(true)}>
                            {' '}
                            Upload Pets{' '}
                        </NavLink>
                    </MenuListItem>
                    <MenuListItem>
                        <NavLink to="/pets"> Explore </NavLink>
                    </MenuListItem>
                </MenuListWrapper>
            </NavWrapper>
            {showUploadInfo && (
                <>
                    <SoonModal text="Watch this space" close={() => setShowUpdateInfo(false)} />
                </>
            )}
        </Wrapper>
    );
}
