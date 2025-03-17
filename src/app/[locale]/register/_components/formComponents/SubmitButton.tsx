"use client";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const SubmitButton = styled(Button)`
    padding: clamp(8px, 1.5vw, 14px);
    border: none;
    border-radius: clamp(8px, 1.5vw, 12px);
    background-color: ${({ theme }) => theme.palette.primary.dark};
    font-size: clamp(14px, 1.2vw, 16px);
    cursor: pointer;
    transition: background-color 0.2s;
    text-transform: none;

    width: 100%;
    max-width: 368px;
    min-width: 180px;
    
    &:hover {
        background-color: ${({ theme }) => theme.palette.grey[700]};
    }
`;