"use client";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const LogoutButton = styled(Button)`
    position: absolute;
    top: 24px;
    right: 24px;
    padding: 12px 24px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
`;
