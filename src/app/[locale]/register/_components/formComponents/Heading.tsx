"use client";

import styled from "@emotion/styled";

export const Heading = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
