import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SubTextContent, HeadTextContent } from '../CoverArea/coverArea.styles';
import GenericLayout from 'layouts/GenericLayout/genericLayout';
import { ErrorContainer } from '../PetList/petList.styles';
import useSWR from 'swr';
import { CenteredSpinner } from 'shared/Spinner/spinner.jsx';
import GenericButton from 'shared/GenericButton/genericButton';
import {
    PetImg,
    GridBox,
    ContentWrapper,
    NormalText,
    AboutPet,
    SimpleCard,
    SideCardWrapper
} from './petDetails.styles';
import SoonModal from '../../shared/ComingSoonModal/soonModal';

export default function PetDetails() {
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const url = `http://127.0.0.1:3000/pets/${id}`;
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    console.log('sdds', showModal);

    const { data, error } = useSWR(url, fetcher);
    console.log('data', data);
    if (!data && !error) return <CenteredSpinner />;
    if (error)
        return (
            <ErrorContainer>
                <HeadTextContent> An Error Occured </HeadTextContent>
                <SubTextContent> {error} </SubTextContent>
            </ErrorContainer>
        );
    return (
        <GenericLayout>
            <PetImg image={data?.img} />
            {/* TODO: Implement previous page / navigation guards */}
            <ContentWrapper>
                <GridBox height={'100%'} bgColor={'#fff'}>
                    <HeadTextContent color={'#18191f'} fWeight={'500'}>
                        {data?.name} says Hi!
                    </HeadTextContent>

                    <SubTextContent color={'#18191f'} style={{ marginTop: '2rem' }}>
                        {' '}
                        About
                    </SubTextContent>
                    <AboutPet>
                        <NormalText>
                            <span className="about"> BREED </span> <br />
                            <span className="normal"> {data?.breed} </span>
                        </NormalText>

                        <NormalText top={'3rem'}>
                            <span className="about"> AGE </span> <br />
                            <span className="normal"> {data?.age} </span>
                        </NormalText>
                    </AboutPet>
                </GridBox>

                <GridBox height={'50%'} bgColor={'#18191f'}>
                    <SimpleCard>
                        <SubTextContent> Considering {data?.name} for adoption?</SubTextContent>
                        <SideCardWrapper>
                            <GenericButton
                                fontWeight={'700'}
                                fontSize={'1rem'}
                                type={'outline'}
                                buttonWidth={'80%'}
                                onClick={() => setShowModal(true)}>
                                Learn more
                            </GenericButton>
                        </SideCardWrapper>
                    </SimpleCard>
                </GridBox>
            </ContentWrapper>
            {showModal && (
                <>
                    <SoonModal text="Watch this space" close={() => setShowModal(false)} />
                </>
            )}
        </GenericLayout>
    );
}
