"use client";

import { styled } from "@mui/material/styles";
import { Box, TextField, IconButton, Snackbar, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect, useRef } from "react";
import { ChatArea } from './ChatArea';

const ChatBoxContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    max-height: fit-content;
    overflow: scroll;
`;

const ChatMessagesContainer = styled(Box)`
    flex: 1;
    display: flex;
    overflow-y: scroll;
`;

const InputContainer = styled(Box)`
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
    const [, setResponse] = useState("");
    const [messages, setMessages] = useState<{ from: string; message: string; }[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isSnackbarOpen, setSnackbarOpen] = useState(false);

    const messagesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (message.trim()) {
            console.log("Sending message: ", message);
            try {
                const response = await fetch(`/mockserver/chatbot`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message: message }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setResponse(data.message);
                console.log("Response from API:", data.message);

                setMessages([...messages, { from: 'user', message: message }, { from: 'bot', message: data.message }]);
                setMessage("");
            } catch (error) {
                console.log("Error sending message:", error);
                setError("Failed to send message. Please try again.");
                setSnackbarOpen(true);
            }
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <>
            <ChatBoxContainer>
                <ChatMessagesContainer ref={messagesContainerRef}>
                    <ChatArea messages={messages} />
                </ChatMessagesContainer>
                <InputContainer>
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
                </InputContainer>
            </ChatBoxContainer>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </>
    );
};
