import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
    HOME,
    PET_LIST,
    LOGIN,
    REGISTER,
    ADOPTIONS,
    USER_PROFILE,
    NOT_FOUND,
    PET_DETAILS
} from 'routes';

import AdoptionsPage from 'pages/Adoptions/Loadable';
import LoginPage from 'pages/Login/Loadable';
import PetsPage from 'pages/Pets/Loadable';
const HomePage = React.lazy(() => import('pages/Homepage/Loadable'));
import RegisterPage from 'pages/Signup/Loadable';
import UserPage from 'pages/Users/Loadable';
import NotFound from 'pages/NotFound/Loadable';
import PetDetails from 'components/PetDetails/petDetails';

import { CenteredSpinner } from 'shared';

function Routing() {
    return (
        <Suspense fallback={<CenteredSpinner />}>
            <BrowserRouter>
                <Routes>
                    <Route path={HOME} element={<HomePage />} />
                    <Route path={PET_LIST} element={<PetsPage />} />
                    <Route path={LOGIN} element={<LoginPage />} />
                    <Route path={REGISTER} element={<RegisterPage />} />
                    <Route path={ADOPTIONS} element={<AdoptionsPage />} />
                    <Route path={USER_PROFILE} element={<UserPage />} />
                    <Route path={NOT_FOUND} element={<NotFound />} />
                    <Route path={PET_DETAILS} element={<PetDetails />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default Routing;
