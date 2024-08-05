import { useState } from "react";

import styled from "styled-components";
import { Label, theme, Wrapper } from "../../core/design_system";

import {
  ExpectationTitle,
  ExpectationBanner,
  ExpectationInput,
  ExpectationList,
  Pagination,
} from "./components";
import { EventNotice } from "../common/components";

import { ExpectationListProps } from "./contexts/useExpectationListQuery";

function ExpectationPage() {
  const totalpage = expectations.length;
  const [nowPage, setNowPage] = useState(1);

  return (
    <>
      <ExpectationWrapper>
        <ExpectationTitle />
        {/* content Wrapper */}
        <ExpectationContentWrapper>
          <ExpectationBanner />
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
            $justifycontent="center"
            $alignitems="center"
          >
            {expectations[nowPage - 1].map(
              ({ writerName, content }: ExpectationListProps, idx: number) => (
                <ExpectationList
                  key={idx}
                  writerName={writerName}
                  content={content}
                />
              ),
            )}
          </Wrapper>
          <Wrapper $margin="0 0 80px 0">
            <Pagination
              totalPages={totalpage}
              currentPage={nowPage}
              onPageChange={(page) => setNowPage(page)}
            />
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

const expectations = [
  [
    {
      writerName: "최*빈",
      content:
        "디 올 뉴 싼타페의 새로운 디자인이 정말 기대돼요. 현대차의 혁신적인 디자인 언어가 어떻게 반영됐을지 궁금하네요! 하이브리드 모델도 나온다고 하니, 친환경적인 측면에서도 얼마나 발전했을지 기대됩니다. 실내 인테리어가 고급스러워졌다는 이야기를 들었어요. 고급 소재와 세련된 디자인이 어떻게 적용됐을지 궁금합니다.",
    },
    {
      writerName: "최*우",
      content:
        "첨단 기술이 탑재된다고 들었는데, 디지털 센터 미러와 스마트한 인포테인먼트 시스템이 얼마나 향상됐을지 기대됩니다. 연비가 개선됐다고 들었어요. 장거리 운전 시 경제성을 얼마나 느낄 수 있을지 기대됩니다.",
    },
    {
      writerName: "윤*린",
      content:
        "실내 공간이 더욱 넓어지고 편안해졌다고 하는데, 가족 여행에 딱 맞는 SUV가 될 것 같아요.",
    },
    {
      writerName: "최*빈",
      content:
        "디 올 뉴 싼타페의 새로운 디자인이 정말 기대돼요. 현대차의 혁신적인 디자인 언어가 어떻게 반영됐을지 궁금하네요! 하이브리드 모델도 나온다고 하니, 친환경적인 측면에서도 얼마나 발전했을지 기대됩니다. 실내 인테리어가 고급스러워졌다는 이야기를 들었어요. 고급 소재와 세련된 디자인이 어떻게 적용됐을지 궁금합니다.",
    },
  ],
  [
    {
      writerName: "최*우",
      content:
        "첨단 기술이 탑재된다고 들었는데, 디지털 센터 미러와 스마트한 인포테인먼트 시스템이 얼마나 향상됐을지 기대됩니다. 연비가 개선됐다고 들었어요. 장거리 운전 시 경제성을 얼마나 느낄 수 있을지 기대됩니다.",
    },
    {
      writerName: "윤*린",
      content:
        "실내 공간이 더욱 넓어지고 편안해졌다고 하는데, 가족 여행에 딱 맞는 SUV가 될 것 같아요.",
    },
    {
      writerName: "최*빈",
      content:
        "디 올 뉴 싼타페의 새로운 디자인이 정말 기대돼요. 현대차의 혁신적인 디자인 언어가 어떻게 반영됐을지 궁금하네요! 하이브리드 모델도 나온다고 하니, 친환경적인 측면에서도 얼마나 발전했을지 기대됩니다. 실내 인테리어가 고급스러워졌다는 이야기를 들었어요. 고급 소재와 세련된 디자인이 어떻게 적용됐을지 궁금합니다.",
    },
    {
      writerName: "최*우",
      content:
        "첨단 기술이 탑재된다고 들었는데, 디지털 센터 미러와 스마트한 인포테인먼트 시스템이 얼마나 향상됐을지 기대됩니다. 연비가 개선됐다고 들었어요. 장거리 운전 시 경제성을 얼마나 느낄 수 있을지 기대됩니다.",
    },
  ],
  [
    {
      writerName: "윤*린",
      content:
        "실내 공간이 더욱 넓어지고 편안해졌다고 하는데, 가족 여행에 딱 맞는 SUV가 될 것 같아요.",
    },
    {
      writerName: "최*우",
      content:
        "첨단 기술이 탑재된다고 들었는데, 디지털 센터 미러와 스마트한 인포테인먼트 시스템이 얼마나 향상됐을지 기대됩니다. 연비가 개선됐다고 들었어요. 장거리 운전 시 경제성을 얼마나 느낄 수 있을지 기대됩니다.",
    },
    {
      writerName: "윤*린",
      content:
        "실내 공간이 더욱 넓어지고 편안해졌다고 하는데, 가족 여행에 딱 맞는 SUV가 될 것 같아요.",
    },
    {
      writerName: "최*빈",
      content:
        "디 올 뉴 싼타페의 새로운 디자인이 정말 기대돼요. 현대차의 혁신적인 디자인 언어가 어떻게 반영됐을지 궁금하네요! 하이브리드 모델도 나온다고 하니, 친환경적인 측면에서도 얼마나 발전했을지 기대됩니다. 실내 인테리어가 고급스러워졌다는 이야기를 들었어요. 고급 소재와 세련된 디자인이 어떻게 적용됐을지 궁금합니다.",
    },
  ],
  [
    {
      writerName: "최*우",
      content:
        "첨단 기술이 탑재된다고 들었는데, 디지털 센터 미러와 스마트한 인포테인먼트 시스템이 얼마나 향상됐을지 기대됩니다. 연비가 개선됐다고 들었어요. 장거리 운전 시 경제성을 얼마나 느낄 수 있을지 기대됩니다.",
    },
    {
      writerName: "윤*린",
      content:
        "실내 공간이 더욱 넓어지고 편안해졌다고 하는데, 가족 여행에 딱 맞는 SUV가 될 것 같아요.",
    },
  ],
];

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
