"use client";
import styled from "@emotion/styled";

export const LogoutButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;

    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.secondary[700]};
    color: white;
    font-size: 16px;
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary[800]};
    }
`;
