"use client";

import styled from "@emotion/styled";

export const SubHeading = styled.h1`
    text-align: center;
    font-size: clamp(14px, 4vw, 16px);
    line-height: clamp(22px, 4vw, 26px);
    font-weight: 400;
    color: ${({ theme }) => theme.palette.grey["600"]};
    margin-top: clamp(2px, 1vw, 7px);
`;