"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

const ChatContainer = styled(Box)`
    flex: 1;
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing(2)};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
`;

interface MessageBubbleProps {
    isUser?: boolean;
}

const MessageBubble = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isUser'
}) <MessageBubbleProps>`
    max-width: 80%;
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme, isUser }) =>
        isUser ? theme.palette.primary.main : theme.palette.grey[100]};
    color: ${({ theme, isUser }) =>
        isUser ? theme.palette.primary.contrastText : theme.palette.text.primary};
    align-self: ${({ isUser }) => isUser ? 'flex-end' : 'flex-start'};
`;

interface ChatAreaProps {
    messages: { from: string; message: string; }[];
}

export const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <ChatContainer ref={chatContainerRef}>
            {messages.map((msg, index) => (
                <MessageBubble key={index} isUser={msg.from === 'user'}>
                    <Typography>{msg.message}</Typography>
                </MessageBubble>
            ))}
        </ChatContainer>
    );
};
