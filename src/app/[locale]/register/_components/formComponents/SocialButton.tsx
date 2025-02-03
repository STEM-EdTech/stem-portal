"use client";
import styled from "@emotion/styled";

export const SocialButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: 1px solid #ddd; 
    border-radius: 8px; 
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 400; 
    color: #333; 
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #f5f5f5;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
        background-color: #e9e9e9;
    }
`;