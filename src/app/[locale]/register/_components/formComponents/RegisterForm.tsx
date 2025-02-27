"use client";
import styled from "@emotion/styled";

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    gap: 12px;
    width: 100%;
    max-width: 538px;
    height: 100%;
    max-height: 569px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.grey["50"]};
    padding-left: 29px;
    padding-right: 29px;
    padding-top: 35px;
    padding-bottom: 60px;
`;