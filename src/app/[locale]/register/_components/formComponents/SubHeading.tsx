"use client";

import styled from "@emotion/styled";

export const SubHeading = styled.h1`
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.grey["600"]};
    margin-top: 2px;
`;