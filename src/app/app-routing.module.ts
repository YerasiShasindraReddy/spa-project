import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {path:'landing', component:LandingComponent,
  
  children : [
    {path:'' ,component: HomeComponent},
    {path:'about-page', component:AboutPageComponent},
    {path:'skills', component: SkillsComponent},
    {path:'project', component: ProjectComponent},
    {path:'experience', component: ExperienceComponent},
    {path: 'contact',component:ContactComponent},
    {path: 'education', component: EducationComponent}
    ]},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
