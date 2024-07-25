import styled, { css } from "styled-components";

type ButtonType = "QUIZ" | "DRAWING";
type ButtonStatus = "DEFAULT" | "DISABLED" | "EVENT_END";

interface EventButtonProps {
  type: ButtonType;
  status: ButtonStatus;
  content: string;
  onClick?: () => void;
}

function Arrow({ type, status }: { type: ButtonType; status: ButtonStatus }) {
  if (type === "DRAWING" && status === "DEFAULT") {
    return (
      <img
        src="/src/assets/images/icons/Arrow_Right_L_Black.svg"
        alt="화살표"
        height={"28px"}
        width={"28px"}
      />
    );
  }
  if (status !== "EVENT_END") {
    return (
      <img
        src="/src/assets/images/icons/Arrow_Right_L_White.svg"
        alt="화살표"
        height={"28px"}
        width={"28px"}
      />
    );
  }
}

function EventButton({ type, status, content, onClick }: EventButtonProps) {
  return (
    <StyledButton
      type={type}
      status={status}
      onClick={onClick}
      disabled={status !== "DEFAULT"}
    >
      <ContentWrapper>
        <p>{content}</p>
        <Arrow type={type} status={status} />
      </ContentWrapper>
    </StyledButton>
  );
}

export default EventButton;

const StyledButton = styled.button<{ type: ButtonType; status: ButtonStatus }>`
  // 공통 css
  display: inline-flex;
  padding: 20px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  ${({ theme }) => theme.Shadow.Strong};
  ${({ theme }) => theme.Typography.Title3Medium};

  // status css
  ${({ type, status, theme }) => {
    if (type === "DRAWING" && status === "DEFAULT") {
      return css`
        background-color: ${theme.Color.Event.drawing_default};
        color: ${theme.Color.TextIcon.default};
      `;
    }
    if (type === "DRAWING" && status === "DISABLED") {
      return css`
        color: ${theme.Color.TextIcon.reverse};
        background-color: ${theme.Color.Event.drawing_disabled};
      `;
    }
    if (type === "QUIZ" && status === "DEFAULT") {
      return css`
        background-color: ${theme.Color.Event.quiz_default};
        color: ${theme.Color.TextIcon.reverse};
      `;
    }
    if (type === "QUIZ" && status === "DISABLED") {
      return css`
        color: ${theme.Color.TextIcon.reverse};
        background-color: ${theme.Color.Event.quiz_disabled};
      `;
    }
    if (status === "EVENT_END") {
      return css`
        background-color: ${theme.Color.TextIcon.disable};
        color: ${theme.Color.TextIcon.info};
      `;
    }
  }}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
