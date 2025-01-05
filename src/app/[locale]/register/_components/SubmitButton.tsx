"use client";
import styled from "@emotion/styled";

export const SubmitButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.primary[500]};
    color: white;
    font-size: 16px;
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.palette.primary[600]};
    }
`;