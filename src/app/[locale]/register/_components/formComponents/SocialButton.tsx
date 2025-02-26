"use client";
import styled from "@emotion/styled";

export const SocialButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.palette.grey[100]};
    border-radius: 8px; 
    background-color: ${({ theme }) => theme.palette.grey[100]};
    font-size: 16px;
    font-weight: 400; 
    color: ${({ theme }) => theme.palette.text.primary}; 
    cursor: pointer;

    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.palette.grey["100"]};
        box-shadow: 0 2px 4px ${({ theme }) => theme.palette.grey["400"]};
    }

    &:active {
        background-color: ${({ theme }) => theme.palette.grey[50]};
    }
`;