import React from 'react';
import { GoBackButton } from "~/app/[locale]/error/_components/GoBackButton";

const ErrorPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Error</h1>
            <p>Sorry, an error has occurred.</p>
            <GoBackButton />
        </div>
    );
};

export default ErrorPage;