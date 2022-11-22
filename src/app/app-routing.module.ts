import { ContributeComponent } from './components/contribute/contribute.component';
import { AuthorsDetailsComponent } from './pages/authors/authors-details/authors-details.component';
import { WavesComponent } from './pages/waves/waves.component';
import { AboutComponent } from './pages/about/about.component';
import { HackersComponent } from './pages/hackers/hackers.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'hackers', component: HackersComponent},
  {path: 'waves', component: WavesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'authors/:id', component: AuthorsDetailsComponent},
  {path: 'contribute', component: ContributeComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
