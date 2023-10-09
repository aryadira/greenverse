import { BoxContainer, SpacingLayout } from "../layouts";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SpacingLayout>
        <BoxContainer>
          <div className="box-1 bg-red-300">BOX 1</div>
          <div className="box-2 bg-red-400">BOX 2</div>
        </BoxContainer>
      </SpacingLayout>
      <div className="box-3 bg-red-500">
        <SpacingLayout className="bg-green-300">
          <BoxContainer>BOX 3</BoxContainer>
        </SpacingLayout>
      </div>
      <SpacingLayout>
        <BoxContainer>
          <div className="box-4 bg-red-600">BOX 4</div>
        </BoxContainer>
      </SpacingLayout>
      <div className="box-5 bg-red-700">
        <SpacingLayout>
          <BoxContainer>BOX 5</BoxContainer>
        </SpacingLayout>
      </div>
    </div>
  );
};

export default LandingPage;
