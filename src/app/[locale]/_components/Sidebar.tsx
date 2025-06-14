"use client";

import { styled } from "@mui/material/styles";
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect, useRef } from "react";

const SidebarContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isMinimised" && prop !== "isMobileOpen",
}) <{ isMinimised: boolean; isMobileOpen: boolean; }>`
    height: calc(100vh - 60px);
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-right: 1px solid ${({ theme }) => theme.palette.divider};
    transition: width 0.3s ease-in-out;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: ${({ isMinimised }) => (isMinimised ? "60px" : "450px")};
        align-items: ${({ isMinimised }) => (isMinimised ? "center" : "flex-start")};
        padding: ${({ isMinimised, theme }) => theme.spacing(1)};
        height: 100%;
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 65px;
        left: 0;
        z-index: 1200;
        width: 250px;
        padding: ${({ theme }) => theme.spacing(2)};
        opacity: ${({ isMobileOpen }) => (isMobileOpen ? 1 : 0)};
        visibility: ${({ isMobileOpen }) => (isMobileOpen ? "visible" : "hidden")};
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }
`;

const SidebarHeader = styled(Box)`
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const ContentWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isMinimised"
}) <{ isMinimised: boolean; }>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    width: 100%;
    min-width: 100%;
    white-space: nowrap;
    overflow: scroll;
    opacity: ${({ isMinimised }) => (isMinimised ? 0 : 1)};
    transition: opacity 0.15s ease-in-out;
    transition-delay: ${({ isMinimised }) => (isMinimised ? "0s" : "0.15s")};
    padding: ${({ theme }) => theme.spacing(2)};
`;

const SidebarToggleButton = styled(IconButton)`
    margin-left: auto;
`;

export const Sidebar: React.FC<{ isMobileOpen: boolean; setIsMobileOpen: (open: boolean) => void; }> = ({
    isMobileOpen,
    setIsMobileOpen,
}) => {
    const [isMinimised, setisMinimised] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                !(event.target as Element).closest('.MuiIconButton-root')
            ) {
                setIsMobileOpen(false);
            }
        };

        if (isMobileOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobile, isMobileOpen, setIsMobileOpen]);

    return (
        <SidebarContainer
            data-testid="sidebar"
            ref={sidebarRef}
            id="sidebar-container"
            isMinimised={isMinimised}
            isMobileOpen={isMobileOpen}
        >
            {!isMobile && (
                <SidebarToggleButton onClick={() => setisMinimised(!isMinimised)}>
                    {isMinimised ? <ArrowRightIcon /> : <ArrowLeftIcon />}
                </SidebarToggleButton>
            )}

            <ContentWrapper isMinimised={isMinimised}>
                {(!isMinimised || isMobileOpen) && (
                    <>
                        <SidebarHeader>
                            <Typography variant="h6">Chat History</Typography>
                        </SidebarHeader>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText
                                        primary="New Chat"
                                        sx={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </>
                )}
            </ContentWrapper>
        </SidebarContainer>
    );
};;
