import { Component, OnInit } from '@angular/core';
export interface CertDto {
  title: string;
  from: string;
  imageSrc: string;
  credentialLink: string;
  desc: string;
}
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  certs: CertDto[] = [ {
    title: 'Azure Solutions Architect Expert',
    from: 'Microsoft',
    desc: 'This certification validates expertise in designing and implementing scalable, secure Azure solutions, covering compute, storage, networking, and security.',
    imageSrc: '../../assets/microsoft-certified-architect-expert-badge.svg',
    credentialLink: 'https://learn.microsoft.com/api/credentials/share/en-us/KrystianZakry-3302/1B7A2056F36101A4?sharingId=97F1767D36C2E56E'
  },
  {
    title: 'DevOps Engineer Expert',
    from: 'Microsoft',
    desc: 'This certification demonstrates expertise in implementing DevOps practices, focusing on CI/CD, infrastructure as code, and efficient collaboration using Microsoft Azure tools.',
    imageSrc: '../../assets/microsoft-certified-expert-badge.svg',
    credentialLink: 'https://learn.microsoft.com/api/credentials/share/en-us/KrystianZakry-3302/5E40B9B15357EB39?sharingId=97F1767D36C2E56E'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
