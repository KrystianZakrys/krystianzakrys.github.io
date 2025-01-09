import { Component, OnInit } from '@angular/core';
export interface CertDto {
  title: string;
  from: string;
  imageSrc: string;
  credentialLink: string;
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
    imageSrc: '../../assets/microsoft-certified-architect-expert-badge.svg',
    credentialLink: 'https://learn.microsoft.com/api/credentials/share/en-us/KrystianZakry-3302/1B7A2056F36101A4?sharingId=97F1767D36C2E56E'
  },
  {
    title: 'DevOps Engineer Expert',
    from: 'Microsoft',
    imageSrc: '../../assets/microsoft-certified-expert-badge.svg',
    credentialLink: 'https://learn.microsoft.com/api/credentials/share/en-us/KrystianZakry-3302/5E40B9B15357EB39?sharingId=97F1767D36C2E56E'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
