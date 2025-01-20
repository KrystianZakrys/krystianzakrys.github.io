import { Component, OnInit } from '@angular/core';

export interface Tool {
  imageUrl: string;
  name: string;
}
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  tools: Tool[] = [
    { imageUrl: '../../assets/tools/figma.svg', name: 'Figma' },
    { imageUrl: '../../assets/tools/visual-studio.svg', name: 'Visual Studio' },
    { imageUrl: '../../assets/tools/visual-studio-code.svg', name: 'Visual Studio Code' },
    { imageUrl: '../../assets/tools/git.svg', name: 'Git' },
    { imageUrl: '../../assets/tools/github.svg', name: 'GitHub' },
    { imageUrl: '../../assets/tools/bitbucket.png', name: 'BitBucket' },
    { imageUrl: '../../assets/tools/jira.svg', name: 'Jira' },
    { imageUrl: '../../assets/tools/confluence.svg', name: 'Confluence' },
    { imageUrl: '../../assets/tools/azure-data-studio.svg', name: 'Azure Data Studio' },
    { imageUrl: '../../assets/tools/vmware-horizon.png', name: 'VMware Horizon' },
    { imageUrl: '../../assets/tools/azure-devops.png', name: 'Azure DevOps' },
    { imageUrl: '../../assets/tools/azure.webp', name: 'Azure' },
    { imageUrl: '../../assets/tools/notion.svg', name: 'Notion' },
    { imageUrl: '../../assets/tools/figma.svg', name: 'Figma' },
    { imageUrl: '../../assets/tools/miro.webp', name: 'Mirro' },
    { imageUrl: '../../assets/tools/iis.png', name: 'IIS' },
    { imageUrl: '../../assets/tools/teams.svg', name: 'Teams' },
    { imageUrl: '../../assets/tools/npm.svg', name: 'npm' },
    { imageUrl: '../../assets/tools/jenkins.svg', name: 'Jenkins' },
    { imageUrl: '../../assets/tools/docker.svg', name: 'Docker' },
    { imageUrl: '../../assets/tools/figma.svg', name: 'Figma' },
    { imageUrl: '../../assets/tools/visual-studio.svg', name: 'Visual Studio' },
    { imageUrl: '../../assets/tools/visual-studio-code.svg', name: 'Visual Studio Code' },
    { imageUrl: '../../assets/tools/git.svg', name: 'Git' },
    { imageUrl: '../../assets/tools/github.svg', name: 'GitHub' },
    { imageUrl: '../../assets/tools/bitbucket.svg', name: 'BitBucket' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
