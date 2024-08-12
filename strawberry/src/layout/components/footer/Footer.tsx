import styled from "styled-components";

import footer from "/src/assets/images/footer/tmp_footer.svg";

function Footer() {
  return (
    <>
      <StyledFooter>
        <img src={footer} alt="footer" />
      </StyledFooter>
    </>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Color.Neutral.neutral10};
`;
