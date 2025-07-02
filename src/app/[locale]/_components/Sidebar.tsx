"use client";

import { styled } from "@mui/material/styles";
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect, useRef } from "react";

const SidebarContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isMinimised" && prop !== "isMobileSidebarOpen",
}) <{ isMinimised: boolean; isMobileSidebarOpen: boolean; }>`
    height: calc(100vh - 64px);
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-right: 1px solid ${({ theme }) => theme.palette.divider};
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
    position: fixed;
    top: 64px;
    left: 0;
    z-index: 1200;
    width: 75%;
    padding: ${({ theme }) => theme.spacing(2)};
    transform: translateX(${({ isMobileSidebarOpen }) => (isMobileSidebarOpen ? "0" : "-100%")});

@media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    position: static;
    top: auto;
    left: auto;
    z-index: auto;
    width: ${({ isMinimised }) => (isMinimised ? "60px" : "25%")};
    align-items: ${({ isMinimised }) => (isMinimised ? "center" : "flex-start")};
    padding: ${({ isMinimised, theme }) => theme.spacing(1)};
    height: 100%;
    transform: translateX(0);
}
`;

const SidebarHeader = styled(Box)`
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ContentWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isMinimised" && prop !== "isMobile",
}) <{ isMinimised: boolean; isMobile: boolean; }>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    width: 100%;
    min-width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    opacity: ${({ isMinimised, isMobile }) => (isMobile ? 1 : isMinimised ? 0 : 1)};
    transition: opacity 0.15s ease-in-out;
    transition-delay: "0.15s";
    padding: ${({ theme }) => theme.spacing(2)};
`;

const SidebarToggleButton = styled(IconButton)`
    margin-left: auto;
`;

const StyledListItemText = styled(ListItemText)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

export const Sidebar: React.FC<{ isMobileSidebarOpen: boolean; setIsMobileSidebarOpen: (open: boolean) => void; }> = ({
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
}) => {
    const [isMinimised, setisMinimised] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        if (!isMobile) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                !(event.target as Element).closest('.MuiIconButton-root')
            ) {
                setIsMobileSidebarOpen(false);
            }
        };

        if (isMobileSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobile, isMobileSidebarOpen, setIsMobileSidebarOpen]);

    return (
        <SidebarContainer
            data-testid="sidebar"
            ref={sidebarRef}
            isMinimised={isMinimised}
            isMobileSidebarOpen={isMobileSidebarOpen}
        >
            {!isMobile && (
                <SidebarToggleButton onClick={() => setisMinimised(!isMinimised)}>
                    {isMinimised ? <ArrowRightIcon /> : <ArrowLeftIcon />}
                </SidebarToggleButton>
            )}

            <ContentWrapper isMinimised={isMinimised} isMobile={isMobile}>
                {(!isMinimised || isMobileSidebarOpen) && (
                    <>
                        <SidebarHeader>
                            <Typography variant="h6">Chat History</Typography>
                        </SidebarHeader>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <StyledListItemText primary="New Chat" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </>
                )}
            </ContentWrapper>
        </SidebarContainer>
    );
};;
