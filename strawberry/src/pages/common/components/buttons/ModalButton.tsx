import React from "react";
import styled from "styled-components";

const PrimarySmallButton = styled.button`
  width: 220px;
  ${({ theme }) => theme.Typography.Body1Medium}
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.Color.Primary.normal};
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
`;

const WhiteSmallButton = styled.button`
  width: 220px;
  ${({ theme }) => theme.Typography.Body1Medium}
  padding: 16px 32px;
  border: ${({ theme }) => `1px solid ${theme.Color.Border.strong}`};
  box-sizing: border-box;
`;

const PrimaryLargeButton = styled.button`
  width: 455px;
  ${({ theme }) => theme.Typography.Body1Medium}
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.Color.Primary.normal};
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
`;

const WhiteLargeButton = styled.button`
  width: 455px;
  ${({ theme }) => theme.Typography.Body1Medium}
  padding: 16px 32px;
  border: ${({ theme }) => `1px solid ${theme.Color.Border.strong}`};
  box-sizing: border-box;
`;

const buttonTypeMap = {
  PRIMARY_SMALL: PrimarySmallButton,
  PRIMARY_LARGE: PrimaryLargeButton,
  WHITE_SMALL: WhiteSmallButton,
  WHITE_LARGE: WhiteLargeButton,
} as const;

interface ModalButtonProps {
  content: string;
  modalType: keyof typeof buttonTypeMap;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ModalButton({ content, modalType, onClick }: ModalButtonProps) {
  const ButtonComponent = buttonTypeMap[modalType];

  return ButtonComponent ? (
    <ButtonComponent onClick={onClick}>{content}</ButtonComponent>
  ) : null;
}

export default ModalButton;
