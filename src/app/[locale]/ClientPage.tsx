"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { Sidebar, ChatArea, ChatBox, AppBar } from "~/app/[locale]/_components";

export const ClientPage = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <AppBar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
                <Box sx={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
                    <ChatArea messages={[]} />
                    <ChatBox />
                </Box>
            </Box>
        </Box>
    );
};