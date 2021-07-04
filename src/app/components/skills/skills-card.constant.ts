import { SkillCardModel } from "../skill-card/skill-card.component";

export class SkillsCardConstant {
  public static readonly imagePath: string = 'assets/skills/';
  public static readonly skillCardModels: SkillCardModel[] = [
    {
      image: SkillsCardConstant.imagePath + 'skill-angular.png',
      label: 'Angular'
    },
    {
      image: SkillsCardConstant.imagePath + 'skill-azure.png',
      label: 'Azure'
    },
    {
      image: SkillsCardConstant.imagePath + 'skill-java.png',
      label: 'Java'
    },
    {
      image: SkillsCardConstant.imagePath + 'skill-spring.png',
      label: 'Spring'
    }
  ]
}
