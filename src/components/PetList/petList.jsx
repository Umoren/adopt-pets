import React from 'react';
import { CardsContainer, ErrorContainer } from './petList.styles';
import PetCard from '../PetCard/petCard';
import { CenteredSpinner } from 'shared/Spinner/spinner.jsx';
import { SubTextContent, HeadTextContent } from 'components/CoverArea/coverArea.styles';
import useSWR from 'swr';
import { Link } from 'react-router-dom';

export default function PetList() {
    const url = 'http://127.0.0.1:3000/pets';
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = useSWR(url, fetcher);
    const pets = data?.slice(0, 10);
    if (!data && !error) return <CenteredSpinner />;
    if (error)
        return (
            <ErrorContainer>
                <HeadTextContent> An Error Occured </HeadTextContent>
                <SubTextContent> {error} </SubTextContent>
            </ErrorContainer>
        );
    return (
        <CardsContainer>
            {pets?.map((pet) => {
                return (
                    <>
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
    );
}
