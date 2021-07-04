import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skillName: string = '';
  @Input() skillImage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

export interface SkillCardModel {
  image: string;
  label: string;
}
