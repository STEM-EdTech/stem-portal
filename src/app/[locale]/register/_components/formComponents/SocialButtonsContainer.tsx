"use client";
import styled from "@emotion/styled";

export const SocialButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 600px) {
    margin-top: 15px;
    gap: 25px;
  }
`;
