"use client";
import styled from "@emotion/styled";

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 24px;
    width: 100%;
    max-width: 538px;
    height: 100%;
    max-height: 569px;
    margin: auto;
    padding: 36px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.primary[100]};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;