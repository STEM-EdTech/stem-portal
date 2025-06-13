"use client";

import styled from "@emotion/styled";

export const FormFooter = styled.footer`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;

  @media (max-width: 600px) {
    gap: 2px;
    margin-top: 6px;
    font-size: 14px;
  }
`;
