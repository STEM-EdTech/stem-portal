"use client";

import styled from "@emotion/styled";

export const Divider = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0;

    &::before,
    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #ccc;
    }
    
    span {
        margin: 0 10px;
        font-size: 14px;
        color: #6b6b6b;
    }
`;