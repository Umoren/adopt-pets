import React from 'react';
import { CardsContainer, ErrorContainer } from 'components/PetList/petList.styles';
import PetCard from 'components/PetCard/petCard';
import { CenteredSpinner } from 'shared/Spinner/spinner.jsx';
import { SubTextContent, HeadTextContent } from 'components/CoverArea/coverArea.styles';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import GenericLayout from 'layouts/GenericLayout/genericLayout';

export default function ExplorePets() {
    const url = 'http://127.0.0.1:3000/pets';
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = useSWR(url, fetcher);
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
            <CardsContainer>
                {data?.map((pet) => {
                    return (
                        <>
                            <HeadTextContent> Discover your new best friend</HeadTextContent>
                            <Link to={`/pet/${pet?.id}`}>
                                <PetCard
                                    petName={pet?.name}
                                    petImage={pet?.img}
                                    key={pet?.id}
                                    petBreed={pet?.breed}
                                />
                            </Link>
                        </>
                    );
                })}
            </CardsContainer>
        </GenericLayout>
    );
}
