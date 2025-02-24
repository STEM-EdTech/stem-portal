"use client";

import styled from "@emotion/styled";

export const Divider = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 24px;
    font-size: 14px;
    &::before,
    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: ${({ theme }) => theme.palette.grey["300"]};
    }
    
    &::before {
        margin-right: 10px; 
    }

    &::after {
        margin-left: 10px; 
    }
`;