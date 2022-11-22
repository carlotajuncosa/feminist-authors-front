import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { HackersComponent } from './pages/hackers/hackers.component';
import { WavesComponent } from './pages/waves/waves.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsDetailsComponent } from './pages/authors/authors-details/authors-details.component';
import { ContributeComponent } from './components/contribute/contribute.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthorsComponent,
    HackersComponent,
    WavesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AuthorsDetailsComponent,
    ContributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
