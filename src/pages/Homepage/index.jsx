import React from 'react';
import GenericLayout from 'layouts/GenericLayout/genericLayout';
import CoverArea from 'components/CoverArea/coverArea';
import PetsList from 'components/PetList/petList';

export default function HomePage() {
    return (
        <GenericLayout>
            <CoverArea />
            <PetsList />
        </GenericLayout>
    );
}
