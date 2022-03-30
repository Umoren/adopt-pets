import React from 'react';
import { PuffLoader } from 'react-spinners';

export function CenteredSpinner() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
            <PuffLoader color="#f40101" size={40} />
        </div>
    );
}

export function FullscreenSpinner() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                left: '0',
                right: '0',
                bottom: '0',
                top: '0'
            }}>
            <PuffLoader color="#f40101" size={40} />
        </div>
    );
}

export function NormalizedSpinner() {
    return <PuffLoader color="#f40101" size={40} />;
}
