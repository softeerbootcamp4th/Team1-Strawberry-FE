import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { EventButton, Wrapper } from "../../../../core/design_system";
import { useCheckLogin } from "../../../../core/hooks/useCheckLogin";

import { useDrawingLandingState } from "../../hooks/useDrawingLandingState";

import DrawingChance from "./DrawingChance";

import { getChanceFromLastTime } from "../../services/getChanceFromLastTime";

function DrawingBanner() {
  const [possibleChance, setPossibleChance] = useState<number>(0);
  const { drawingLandingData: landData, eventUserData: eventData } =
    useDrawingLandingState();
  const navigate = useNavigate();
  const checkLogin = useCheckLogin();

  const isFinished =
    landData?.endAt && new Date(landData.endAt).getTime() < Date.now();

  useEffect(() => {
    if (eventData) {
      setPossibleChance(
        Math.min(
          getChanceFromLastTime(eventData?.lastChargeAt) + eventData?.chance,
          2,
        ),
      );
    }
  }, [eventData]);

  const handleEventClick = () => {
    checkLogin(() => {
      navigate("/drawing/play");
    });
  };

  return (
    <Wrapper $position="relative" height="calc(100vh - 70px)">
      <BannerImage src={landData?.bannerImgUrl}></BannerImage>
      <BannerContentWrapper>
        {!isFinished && <DrawingChance />}
        <EventButton
          type="DRAWING"
          status={
            isFinished
              ? "EVENT_END"
              : possibleChance === 0
                ? "DISABLED"
                : "DEFAULT"
          }
          content="이벤트 참여하기"
          onClick={handleEventClick}
        />
      </BannerContentWrapper>
    </Wrapper>
  );
}

export default DrawingBanner;

const BannerContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  padding-bottom: 77px;
  gap: 32px;
`;

const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
