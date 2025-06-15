"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { Sidebar, ChatArea, ChatBox, AppBar } from "~/app/[locale]/_components";

export const ClientPage = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <AppBar isMobileSidebarOpen={isMobileSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <Sidebar isMobileSidebarOpen={isMobileSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
                <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <ChatBox />
                </Box>
            </Box>
        </Box>
    );
};