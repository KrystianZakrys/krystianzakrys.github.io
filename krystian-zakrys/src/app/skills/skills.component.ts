import { Component, OnInit } from '@angular/core';

export interface SkillDto {
  name: string;
  rating: number;
  description: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: SkillDto[] = [
    {
      name: 'C#',
      description: ' Warning: Hovering too long may result in a sudden craving for cookies!',
      rating: 4
    },
    {
      name: '.NET',
      description: ' Warning: Hovering too long may result in a sudden craving for cookies!',
      rating: 4
    },
    {
      name: 'LINQ',
      description: ' Warning: Hovering too long may result in a sudden craving for cookies!',
      rating: 4
    },
    {
      name: 'SQL/ T-SQL',
      description: ' Warning: Hovering too long may result in a sudden craving for cookies!',
      rating: 4
    },
    {
      name: 'TypeScript',
      description: ' Warning: Hovering too long may result in a sudden craving for cookies!',
      rating: 4
    },
    {
      name: 'Angular',
      description: ' Warning: Hovering too long may result in a sudden craving for cookies!',
      rating: 4
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
