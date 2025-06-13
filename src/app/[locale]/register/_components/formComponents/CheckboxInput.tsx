"use client";

import styled from "@emotion/styled";

export const CheckboxInput = styled.input`
  cursor: pointer;
  margin-top: 10px;

  width: 15px;
  height: 15px;

  @media (max-width: 600px) {
    width: 12px;
    height: 12px;
    margin-top: 5px;
  }
`;
