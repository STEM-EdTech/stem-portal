"use client";

import { styled } from "@mui/material/styles";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const ChatBoxContainer = styled(Box)`
    padding: ${({ theme }) => theme.spacing(2)};
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
    background-color: ${({ theme }) => theme.palette.background.paper};
    display: flex;
    gap: ${({ theme }) => theme.spacing(1)};
`;

const StyledTextField = styled(TextField)`
    flex: 1;
    & .MuiOutlinedInput-root {
        border-radius: ${({ theme }) => theme.spacing(3)};
    }
`;

export const ChatBox = () => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            // TODO: Implement send message logic
            console.log("Sending message:", message);
            setMessage("");
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <ChatBoxContainer>
            <StyledTextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                multiline
                maxRows={4}
            />
            <IconButton
                color="primary"
                onClick={handleSend}
                disabled={!message.trim()}
                sx={{ alignSelf: "center" }}
            >
                <SendIcon />
            </IconButton>
        </ChatBoxContainer>
    );
}; 