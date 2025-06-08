"use client";
import styled from "@emotion/styled";

export const Header = styled.h1`
    margin: 0;
    padding: 32px 24px;
    color: ${({ theme }) => theme.palette.primary.dark};
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;