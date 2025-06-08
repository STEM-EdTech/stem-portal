"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const ChatContainer = styled(Box)`
    flex: 1;
    height: calc(100vh - 180px);
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

export const ChatArea = () => {
    return (
        <ChatContainer>
            <MessageBubble>
                <Typography>Hello! How can I help you today?</Typography>
            </MessageBubble>
            <MessageBubble isUser>
                <Typography>I have a question about the project.</Typography>
            </MessageBubble>
        </ChatContainer>
    );
}; 