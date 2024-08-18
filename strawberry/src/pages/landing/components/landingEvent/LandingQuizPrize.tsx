interface LandingQuizPrizeProps {
  quizPrizeImg: string;
}

function LandingQuizPrize({ quizPrizeImg }: LandingQuizPrizeProps) {
  return (
    <>
      <img src={quizPrizeImg} width="100%" />
    </>
  );
}

export default LandingQuizPrize;
