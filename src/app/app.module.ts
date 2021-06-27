import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectShowcaseComponent,
    ProjectCardComponent,
    SectionContainerComponent,
    ContactMeComponent,
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
