import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

export interface ProjectDto {
  title: string;
  desc: string;
  imageUrl: string;
  url: string;
  github: string;
  techStack: string[];
}

@Component({
  selector: 'app-projects-carouselle',
  templateUrl: './projects-carouselle.component.html',
  styleUrls: ['./projects-carouselle.component.scss']
})
export class ProjectsCarouselleComponent implements OnInit {
  projects: ProjectDto[] = [
    {
      title: 'Bank AlJazira Website Facelift',
      desc: 'I was responsible for recreating and modernising Bank AlJazira landing page and others facelift.',
      github: '',
      imageUrl: '../../assets/projects/aljazira.jpg',
      techStack: ['DNN','C#','SQL', 'HTML', 'CSS','JS','jQuery'],
      url: 'https://www.bankaljazira.com/en-us'
    },
    {
      title: 'Business Account Opening in Bank AlJazira',
      desc: 'An onboarding application for business entities.',
      github: '',
      imageUrl: '../../assets/projects/bao.jpg',
      techStack: ['C#', '.NET','SQL', 'HTML', 'CSS','JS','Angular'],
      url: 'https://corporate.bankaljazira.com/cportal/BAO'
    },
    {
      title: 'Altkom Akademia',
      desc: 'I was working on a backoffice application and frontoffice application.',
      github: '',
      imageUrl: '../../assets/projects/akademia.jpg',
      techStack: ['C#', '.NET','SQL', 'HTML', 'CSS','JS','Angular'],
      url: 'https://www.altkomakademia.pl/'
    },
    {
      title: 'PKO Leasing',
      desc: 'I was working on a microservices system in .NET with microfrontends in Angular.',
      github: '',
      imageUrl: '../../assets/projects/pkol.jpg',
      techStack: ['C#', '.NET','SQL', 'HTML', 'CSS','JS','Angular'],
      url: 'https://www.pkoleasing.pl/'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
