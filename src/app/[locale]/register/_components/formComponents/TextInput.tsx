"use client";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  display: block;
  margin-top: 10px;
  width: 100%;
  max-width: 480px;
`;

const Icon = styled.div<{ iconSize: number }>`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.palette.grey["900"]};
  pointer-events: none;
  width: ${(props) => props.iconSize}px;
  height: ${(props) => props.iconSize}px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 600px) {
    left: 16px;
  }
`;

const Input = styled.input<{ hasIcon: boolean }>`
  height: 40px;
  width: 100%;
  max-width: 480px;
  border-radius: 6px;
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 26px;
  background: ${({ theme }) => theme.palette.grey["100"]};
  padding-left: ${(props) => (props.hasIcon ? "44px" : "10px")};

  @media (max-width: 600px) {
    height: 44px;
    font-size: 16px;
  }
`;

export const TextInput = ({
  icon,
  iconSize = 20,
  ...props
}: {
  icon?: React.ReactNode;
  iconSize?: number;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <Container>
    {icon && <Icon iconSize={iconSize}>{icon}</Icon>}
    <Input hasIcon={!!icon} {...props} />
  </Container>
);
