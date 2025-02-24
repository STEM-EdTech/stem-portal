"use client";

import styled from "@emotion/styled";
import Link from "next/link";

export const FooterLink = styled(Link)`
    margin-left: 5px;
    color: #16213e;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;