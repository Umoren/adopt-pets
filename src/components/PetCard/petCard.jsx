import React from 'react';
import { CardText, Card, CardBody } from './petCard.styles';
import PropTypes from 'prop-types';

export default function PetCard({ petName, petImage, petBreed }) {
    return (
        <Card>
            <img
                src={
                    petImage
                        ? petImage
                        : 'https://res.cloudinary.com/samtech/image/upload/v1648545583/jana-shnipelson--gcWNE_R3cc-unsplash_1.jpg'
                }
                alt="test"
            />
            <CardBody>
                <CardText>
                    <span>Name: </span>
                    {petName}
                </CardText>
                <CardText>
                    <span>Breed: </span>
                    {petBreed}
                </CardText>
            </CardBody>
        </Card>
    );
}

PetCard.propTypes = {
    petName: PropTypes.string,
    petImage: PropTypes.any,
    petBreed: PropTypes.string
};
