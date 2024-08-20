import { ImageEnum } from "../../../../core/design_system";

interface ChanceIconsProps {
  chance: number;
  bonusChance: number;
}

function ChanceIcons({ chance, bonusChance }: ChanceIconsProps) {
  const getIconSrc = (type: "normal" | "bonus", level: number) => {
    if (type === "normal") {
      return chance >= level
        ? ImageEnum.ICONS.EVENT_BADGE_NORMAL
        : ImageEnum.ICONS.EVENT_BADGE_NORMAL_DISABLED;
    } else {
      return bonusChance >= level
        ? ImageEnum.ICONS.EVENT_BADGE_BONUS
        : ImageEnum.ICONS.EVENT_BADGE_BONUS_DISABLED;
    }
  };

  return (
    <>
      <img
        src={getIconSrc("normal", 2)}
        width="50px"
        height="50px"
        alt="Normal Badge 1"
      />
      <img
        src={getIconSrc("normal", 1)}
        width="50px"
        height="50px"
        alt="Normal Badge 2"
      />
      <img
        src={getIconSrc("bonus", 1)}
        width="50px"
        height="50px"
        alt="Bonus Badge 1"
      />
      <img
        src={getIconSrc("bonus", 2)}
        width="50px"
        height="50px"
        alt="Bonus Badge 2"
      />
    </>
  );
}

export default ChanceIcons;
