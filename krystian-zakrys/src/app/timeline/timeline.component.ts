import { Component, OnInit } from '@angular/core';
export interface Position {
  date: string;
  timeline: string;
  title: string;
  description: string;
  urlText: string;
  url: string;
  iconUrl: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  positions: Position[] = [
    {
      date: "2018",
      timeline: 'Graduation',
      title: "Bachelor of Engineering",
      description: "Bachelor of Engineering degree in Computer Science from Bialystok University of Technology, where I developed a strong foundation in software development, algorithms, and modern IT solutions.",
      urlText: "Bialystok University of Technology",
      url: "https://wi.pb.edu.pl/en/",
      iconUrl:'../../assets/icons/graduation.png'
    },
    {
      date: 'June 2017 – October 2017',
      timeline: '5 months',
      title: 'IT Specialist',
      description: "From June to October 2017, I completed an internship based on an employment contract through a task-specific agreement. I performed a full range of IT Specialist duties, including assisting in the expansion of the company's IT infrastructure, maintenance, repair, and replacement of computer equipment, among others. One of the more interesting tasks was developing an application to support the IT department in managing fixed assets inventory. The application was based on PHP and a MySQL database.",
      urlText: 'Inwido Production S.A.',
      url:'https://sokolka.com.pl/kontakt/',
      iconUrl: '',
    },
    {
      date: "April 2018 – August 2020 ",
      timeline: '2 years 5 months',
      title: "Fullstack Developer",
      description: "Fullstack Developer in the Research, Development, and Implementation of Electronic Services department, utilizing technologies like jQuery and .NET Framework.",
      urlText: "Centrum Informatyki ZETO S.A.",
      url: "https://zeto.bialystok.pl/",
      iconUrl: '',
    },
    {
      date: "September 2020 – Present",
      timeline: '+5 years',
      title: "Fullstack Developer (.NET + Angular)",
      description: "Designed solutions for education, banking, and oil services, enhancing operations with scalable systems using microservices and Azure. Skilled in .NET for backend and Angular for responsive, dynamic frontends.",
      urlText: "Altkom Software",
      url: "https://www.altkomsoftware.com/",
      iconUrl:''
    },
    {
      date:'World Wide Projects',
      timeline:'+4',
      title:'Projects for Saudi Arabia',//Realizuję projekty dla klientów z Arabii Saudyjskiej, takich jak Bank AlJazira i Saudi Aramco. W Bank AlJazira rozwijałem rozwiązania webowe w technologiach DNN (DotNetNuke), .NET i Angular. Dla Saudi Aramco współtworzyłem systemy raportowania zbudowane w technologii .NET Core, które usprawniły analizę danych i operacje.
      description: 'Working on projects for clients from Saudi Arabia, including Bank AlJazira and Saudi Aramco. At Bank AlJazira, I developed web solutions using DNN (DotNetNuke), .NET, and Angular. For Saudi Aramco, I contributed to reporting systems built with .NET Core, enhancing operational insights and efficiency.',
      iconUrl: '../../assets/icons/globe.png',
      url: '',
      urlText:'',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
