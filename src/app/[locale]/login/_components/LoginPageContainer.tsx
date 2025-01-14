"use client";
import styled from "@emotion/styled";

export const LoginPageContainer = styled.div`
    min-height: 100vh;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://7i2wrzbr0panhthc.public.blob.vercel-storage.com/static/stem-logo-background-NAWgmAojRRHvzK1PWKxlky2J9uy8S4.png');
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
        background-color: rgba(0, 22, 52, 0.4);
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }
`;