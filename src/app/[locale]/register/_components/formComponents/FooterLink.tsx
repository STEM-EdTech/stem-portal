"use client";

import styled from "@emotion/styled";
import { Link } from "~/i18n/routing";

export const FooterLink = styled(Link)`
    margin-left: 5px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: bold;
    text-decoration: none;
    font-size: clamp(12px, 1vw, 14px);

    &:hover {
        text-decoration: underline;
    }
`;