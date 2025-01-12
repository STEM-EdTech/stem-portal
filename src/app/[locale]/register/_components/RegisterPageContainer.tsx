"use client";
import styled from "@emotion/styled";

export const RegisterPageContainer = styled.div`
    min-height: 100vh;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/images/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

    &::before {
        content: ''; 
        position: absolute; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/images/overlay.png');
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }
`;