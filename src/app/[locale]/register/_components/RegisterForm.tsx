"use client";
import styled from "@emotion/styled";

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 300px;
    margin: auto;
    padding: 36px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.primary.light};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;