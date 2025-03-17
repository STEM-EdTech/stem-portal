"use client";
import styled from "@emotion/styled";

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    gap: 12px;

    width: min(90%, 538px);
    min-width: 260px;
    height: auto;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.grey["50"]};
    padding: clamp(20px, 5vw, 35px) 
             clamp(15px, 5vw, 29px) 
             clamp(40px, 5vw, 60px);
    overflow: hidden;
`;