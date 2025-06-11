"use client";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const LogoutButton = styled(Button)`
    background-color: ${({ theme }) => theme.palette.primary.main};
`;
