"use client";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const SubmitButton = styled(Button)`
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-transform: none;

  width: 100%;
  max-width: 368px;
  min-width: 180px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[700]};
  }

  @media (max-width: 600px) {
    padding: 14px;
    border-radius: 12px;
    font-size: 16px;
  }
`;
