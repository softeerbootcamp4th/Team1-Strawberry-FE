import styled from "styled-components";

import { Label, theme, Wrapper } from "../../core/design_system";

import { EventNotice } from "../common/components";

import useExpectationPage from "./hooks/logics/useExpectationPage";

import {
  ExpectationTitle,
  ExpectationBanner,
  ExpectationInput,
  ExpectationList,
  Pagination,
} from "./components";

function ExpectationPage() {
  const { expectationList, nowPage, totalPage, changePage, bannerImg } =
    useExpectationPage();

  return (
    <>
      <ExpectationWrapper>
        <ExpectationTitle />
        {/* content Wrapper */}
        <ExpectationContentWrapper>
          <ExpectationBanner bannerImg={bannerImg} />
          <Label
            $margin="48px 0 0 0"
            width="100%"
            $token="Title1Medium"
            $textalign="center"
          >
            디 올 뉴 싼타페 기대평
          </Label>
          <Wrapper
            display="flex"
            $margin="40px 0 0 0"
            $justifycontent="center"
            $alignitems="center"
          >
            <ExpectationInput />
          </Wrapper>
          <Wrapper
            display="flex"
            $flexdirection="column"
            $margin="40px 0 0 0"
            $alignitems="center"
            $minheight="1276px"
          >
            {expectationList?.map(({ name, comment }, idx) => (
              <ExpectationList key={idx} name={name} comment={comment} />
            ))}
            <Wrapper $margin="0 0 80px 0">
              <Pagination
                totalPages={totalPage}
                currentPage={nowPage}
                onPageChange={(page) => changePage(page)}
              />
            </Wrapper>
          </Wrapper>
        </ExpectationContentWrapper>
        <EventNotice title="기대평 유의사항" notices={notices} />
      </ExpectationWrapper>
    </>
  );
}

export default ExpectationPage;

const ExpectationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.Color.Background.default};
  align-items: center;
`;

const ExpectationContentWrapper = styled.div`
  width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 193px 0 0 0;
`;

const notices = [
  "이벤트 기간은 2024년 9월 1일 오후 12시부터 2024년 9월 21일 오후 10시까지입니다. 기간 내에 작성된 기대평만 유효합니다.",
  "현대자동차 공식 홈페이지 또는 지정된 이벤트 페이지에서 참여 가능합니다.",
  "비속어, 욕설, 허위 사실 등을 포함한 기대평은 삭제되며, 이벤트 참여가 취소될 수 있습니다.",
  "이벤트 참여를 위해 제공된 개인정보는 기대평 이벤트 운영과 마케팅 운영 목적 외에는 사용되지 않으며, 일정 기간 후 파기됩니다.",
  "당첨자는 이벤트 종료 후 10일 이내에 개별 연락을 통해 발표됩니다.",
  "발표일은 상황에 따라 변경될 수 있으며, 변경 시 홈페이지를 통해 공지됩니다.",
  "이벤트 참여자는 본 유의사항을 숙지하고 동의한 것으로 간주합니다.",
  "주최 측의 사정에 따라 이벤트 내용이 변경될 수 있으며, 변경 시 홈페이지를 통해 공지됩니다.",
  "기타 문의 사항은 현대자동차 고객센터로 연락 바랍니다.",
];
