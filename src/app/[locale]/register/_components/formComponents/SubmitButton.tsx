"use client";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const SubmitButton = styled(Button)`
    padding: 10px;
    border: none;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    text-transform: none;

    width: 100%;
    max-width: 368px;
    &:hover {
        background-color: ${({ theme }) => theme.palette.grey[700]};
    }
`;