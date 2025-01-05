"use client";

import React from 'react';
import { useRouter } from '~/i18n/routing';

export const GoBackButton = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <button onClick={handleGoBack}>Go Back</button>
    );
};