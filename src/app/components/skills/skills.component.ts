import { Component, OnInit } from '@angular/core';
import { SkillCardModel } from '../skill-card/skill-card.component';
import { SkillsCardConstant } from './skills-card.constant';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillCardModels: SkillCardModel[] = SkillsCardConstant.skillCardModels;
  constructor() { }

  ngOnInit(): void {
  }
}
