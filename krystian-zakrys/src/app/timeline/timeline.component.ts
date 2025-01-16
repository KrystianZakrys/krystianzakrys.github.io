import { Component, OnInit } from '@angular/core';
export interface Position {
  date: string;
  timeline: string;
  title: string;
  description: string;
  urlText: string;
  url: string;
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
      timeline: '👩🏻‍🎓',
      title: "Bachelor of Engineering",
      description: "Bachelor of Engineering degree in Computer Science from Bialystok University of Technology, where I developed a strong foundation in software development, algorithms, and modern IT solutions.",
      urlText: "Bialystok University of Technology",
      url: "https://wi.pb.edu.pl/en/"
    },
    {
      date: 'June 2017 – October 2017',
      timeline: '5 months',
      title: 'IT Specialist',
      description: "From June to October 2017, I completed an internship based on an employment contract through a task-specific agreement. I performed a full range of IT Specialist duties, including assisting in the expansion of the company's IT infrastructure, maintenance, repair, and replacement of computer equipment, among others. One of the more interesting tasks was developing an application to support the IT department in managing fixed assets inventory. The application was based on PHP and a MySQL database.",
      urlText: 'Inwido Production S.A.',
      url:'https://sokolka.com.pl/kontakt/'
    },
    {
      date: "April 2018 – August 2020 ",
      timeline: '2 years 5 months',
      title: "Fullstack Developer",
      description: "Fullstack Developer in the Research, Development, and Implementation of Electronic Services department, utilizing technologies like jQuery and .NET Framework.",
      urlText: "Centrum Informatyki ZETO S.A.",
      url: "https://zeto.bialystok.pl/"
    },
    {
      date: "September 2020 – Present",
      timeline: '+5 years',
      title: "Fullstack Developer (.NET + Angular)",
      description: "Designed solutions for education, banking, and oil services, enhancing operations with scalable systems using microservices and Azure. Skilled in .NET for backend and Angular for responsive, dynamic frontends.",
      urlText: "Altkom Software",
      url: "https://www.altkomsoftware.com/"
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
