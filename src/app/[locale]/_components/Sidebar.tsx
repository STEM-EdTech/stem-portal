"use client";

import { styled } from "@mui/material/styles";
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

const SidebarContainer = styled(Box)`
    width: 260px;
    height: 100vh;
    border-right: 1px solid ${({ theme }) => theme.palette.divider};
    background-color: ${({ theme }) => theme.palette.background.paper};
    padding: ${({ theme }) => theme.spacing(2)};
`;

const SidebarHeader = styled(Box)`
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <Typography variant="h6">Chat History</Typography>
            </SidebarHeader>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="New Chat" />
                    </ListItemButton>
                </ListItem>
                {/* Add more chat history items here */}
            </List>
        </SidebarContainer>
    );
}; 