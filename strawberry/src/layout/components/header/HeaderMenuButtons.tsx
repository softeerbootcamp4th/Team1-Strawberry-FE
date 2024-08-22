import DefaultButton from "../../../core/design_system/styles/DefaultButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HeaderMenuButtons() {
  return (
    <Ul>
      <li>
        <Link to="/introduce">
          <MenuButton>디 올 뉴 싼타페</MenuButton>
        </Link>
      </li>
      <li>
        <Link to="/">
          <MenuButton>이벤트 소개 및 참여방법</MenuButton>
        </Link>
      </li>
      <li>
        <button onClick={() => (location.href = "/quiz")}>
          <MenuButton>초성 퀴즈 이벤트</MenuButton>
        </button>
      </li>
      <li>
        <Link to="/drawing">
          <MenuButton>드로잉 이벤트</MenuButton>
        </Link>
      </li>
      <li>
        <Link to="/expectation">
          <MenuButton>기대평</MenuButton>
        </Link>
      </li>
    </Ul>
  );
}

export default HeaderMenuButtons;

const MenuButton = styled(DefaultButton)`
  ${({ theme }) => theme.Typography.Heading2Regular};
  color: ${({ theme }) => theme.Color.TextIcon.default};
`;

const Ul = styled.ul`
  width: 713px;
  height: 100%;
  margin-left: 219px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
