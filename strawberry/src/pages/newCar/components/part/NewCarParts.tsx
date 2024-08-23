import { Label, theme, Wrapper } from "../../../../core/design_system";

import { partDatas } from "../../models/Part";

import CarPart from "./CarPart";

function NewCarParts() {
  const groupedParts = [];
  for (let i = 0; i < partDatas.length; i += 2) {
    groupedParts.push(partDatas.slice(i, i + 2));
  }

  return (
    <section>
      <Wrapper
        $boxsizing="border-box"
        $padding="80px 240px 120px 240px"
        $gap="36px"
      >
        <Label
          width="100%"
          $textalign="center"
          $token="Title1Medium"
          color={theme.Color.TextIcon.default}
        >
          디 올 뉴 싼타페, 일단 핵심부터
        </Label>
        {groupedParts.map((group, groupIndex) => (
          <Wrapper
            key={groupIndex}
            $padding="36px 0 0 0"
            display="flex"
            $justifycontent="space-between"
          >
            {group.map((data, index) => (
              <CarPart key={index} part={data} />
            ))}
          </Wrapper>
        ))}
      </Wrapper>
    </section>
  );
}

export default NewCarParts;
