import styled from "styled-components";
import FoundationButton from "./FoundationButton";

interface FoundationRadioButtonsProps<T, S, A> {
  buttons: { title: string; value: T }[];
  actionCreator: (value: T) => void;
  selector: string;
}

function FoundationRadioButtons<T, S, A>({
  buttons,
  actionCreator,
  selector,
}: FoundationRadioButtonsProps<T, S, A>) {
  const selectedValue = selector;

  const handleButtonClick = (buttonValue: T) => {
    actionCreator(buttonValue);
  };

  return (
    <ButtonGroup>
      {buttons.map(({ title, value }) => (
        <FoundationButton
          key={title}
          title={title}
          variant={selectedValue === value ? "SOLID" : "OUTLINE"}
          onClick={() => handleButtonClick(value)}
        />
      ))}
    </ButtonGroup>
  );
}

export default FoundationRadioButtons;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
