"use client";

import styled from "@emotion/styled";
import { useTranslations, useLocale } from "next-intl";
import { AppBar as MuiAppBar, useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { logoutAction } from "./actions";

export const StyledAppBar = styled(MuiAppBar)`
    background-color: ${({ theme }) => theme.palette.primary.dark};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledToolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;
    padding: 0 24px;
`;

const AppBarContainer = styled(Box)`
    height: 60px;
    background-color: ${({ theme }) => theme.palette.primary.dark};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.spacing(2)};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
    width: 100%;
`;

const LogoutButton = styled(Button)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
    padding: ${({ theme }) => theme.spacing(0.5, 2)};
    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.main};
    }
`;

const AppBarTitle = styled(Typography)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: 1.25rem;
    font-weight: bold;
    flex-grow: 1;
    text-align: center;
`;

export const AppBar: React.FC<{ isMobileSidebarOpen: boolean; setIsMobileSidebarOpen: (open: boolean) => void; }> = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const t = useTranslations("HomePage");
    const locale = useLocale();

    return (
        <StyledAppBar position="static" data-testid="app-bar">
            <StyledToolbar>
                {isMobile && (
                    <IconButton onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}>
                        <MenuIcon style={{ color: "white" }} />
                    </IconButton>
                )}
                <AppBarTitle>User Dashboard</AppBarTitle>
                <LogoutButton
                    onClick={() => logoutAction(locale)}
                    variant="contained"
                    data-testid="app-bar-logout-button"
                >
                    {t("logout")}
                </LogoutButton>


            </StyledToolbar>
        </StyledAppBar>
    );
};
