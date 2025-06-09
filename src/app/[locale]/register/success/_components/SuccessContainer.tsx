"use client";
import styled from "@emotion/styled";

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 100%;
    max-width: 538px;
    height: 100%;
    max-height: 569px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.grey["50"]};
    padding: 35px 29px 60px;
    text-align: center;
`; 