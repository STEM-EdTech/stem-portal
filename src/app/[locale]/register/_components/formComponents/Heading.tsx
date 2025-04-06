"use client";

import styled from "@emotion/styled";

export const Heading = styled.h1`
    text-align: center;
    font-size: clamp(24px, 5vw, 32px);
    font-weight: 700;
    line-height: clamp(32px, 6vw, 48px);
    color: ${({ theme }) => theme.palette.text.primary};;
`;