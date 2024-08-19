import styled from "styled-components";

type Variant = "SOLID" | "OUTLINE";
interface FoundationButtonStyle {
  variant: Variant;
}

interface FoundationButtonProps extends FoundationButtonStyle {
  title: string;
  onClick: () => void;
}

function FoundationButton(props: FoundationButtonProps) {
  const { variant, title, onClick } = props;
  return (
    <Button variant={variant} onClick={onClick}>
      {title}
    </Button>
  );
}

export default FoundationButton;

const Button = styled.button<FoundationButtonStyle>`
  box-sizing: border-box;
  width: fit-content;
  padding: 12px 28px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  ${({ variant, theme }) => {
    switch (variant) {
      case "SOLID":
        return `
          background-color: ${theme.Color.Primary.normal};
          color: ${theme.Color.TextIcon.reverse};
          border: none;
        `;
      case "OUTLINE":
        return `
          background-color: transparent;
          color: ${theme.Color.Primary.normal};
          border: 1px solid ${theme.Color.Border.strong};
        `;
      default:
        throw new Error("CANNOT FIND VARAINT OF FOUNDATION BUTTON");
    }
  }}

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
