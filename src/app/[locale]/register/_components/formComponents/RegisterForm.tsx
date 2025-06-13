"use client";
import styled from "@emotion/styled";

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    gap: 12px;

    min-width: 538px;
    height: auto;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.grey["50"]};
    
    padding: 40px;
 
    overflow: hidden;

    @media (max-width: 600px) {
        min-width: initial;
        width: 100%;  
        padding: 20px;  
    }    
`;