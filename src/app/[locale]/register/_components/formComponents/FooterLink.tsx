"use client";

import styled from "@emotion/styled";
import { Link } from "~/i18n/routing";

export const FooterLink = styled(Link)`
  margin-left: 5px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    margin-left: 2px;
  }
`;
