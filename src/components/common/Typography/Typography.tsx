"use client";
import React from "react";
import styled from "@emotion/styled";
import { Interweave } from "interweave";

const StyledTypography = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: ${({ theme }) => theme.palette.text};
    margin-block: 18px;
`;

type TypographyProps = React.PropsWithChildren<{
    as?: string;
}>;

export const Typography = (props: TypographyProps) => {
    const { children, as } = props;

    if (as === "Interweave" && typeof children === "string") {
        return (
            <StyledTypography as={Interweave} content={children} />
        );
    }

    return (
        <StyledTypography>
            {children}
        </StyledTypography>
    );
};

export const StyledH1 = styled.h1`
    font-size: 50px;
    font-weight: 500;
    line-height: 70px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.text};
    margin-block-start: 18px;
    text-align: center;
`;