"use client";
import styled from "@emotion/styled";

export const Header = styled.h1`
    margin: auto;
    margin-top: calc(50vh - 200px);
    padding: 24px;
    color: ${({ theme }) => theme.palette.grey[800]};
    font-size: 72px;
    text-align: center;
`;