"use client";
import styled from "@emotion/styled";
import { useTranslations, useLocale } from "next-intl";
import { AppBar as MuiAppBar } from "@mui/material";
import { LogoutButton } from "./LogoutButton";
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

export const AppBarTitle = styled.h1`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.common.white};
`;

export const AppBar = () => {
    const t = useTranslations("HomePage");
    const locale = useLocale();

    return (
        <StyledAppBar position="static" data-testid="app-bar">
            <StyledToolbar>
                <AppBarTitle>User Dashboard</AppBarTitle>
                <LogoutButton onClick={() => logoutAction(locale)} variant="contained">
                    {t("logout")}
                </LogoutButton>
            </StyledToolbar>
        </StyledAppBar>
    );
};