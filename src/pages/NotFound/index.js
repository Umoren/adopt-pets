import React from 'react';
import GenericLayout from 'layouts/GenericLayout/genericLayout';

import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <GenericLayout>
            <h1> Hey there is nothing here</h1>

            <a>
                {' '}
                <Link to="/">Go Home</Link>{' '}
            </a>
        </GenericLayout>
    );
}
