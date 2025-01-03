import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { SkillsComponent } from './skills/skills.component';
import { YoExpComponent } from './yo-exp/yo-exp.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DateDifferencePipe } from './date-difference.pipe';
import { YoExpSmallComponent } from './yo-exp-small/yo-exp-small.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsCarouselleComponent } from './projects-carouselle/projects-carouselle.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloComponent,
    SkillsComponent,
    YoExpComponent,
    TimelineComponent,
    DateDifferencePipe,
    YoExpSmallComponent,
    TechStackComponent,
    ContactMeComponent,
    ProjectsCarouselleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
