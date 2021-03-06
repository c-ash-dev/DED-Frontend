import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Ignite UI Imports
import { IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxDividerModule, IgxIconModule, IgxCardModule,
         IgxDropDownModule, IgxInputGroupModule, IgxToggleModule, IgxExpansionPanelModule } from 'igniteui-angular';

// Components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreatesetComponent } from './components/createset/createset.component';
import { StartComponent } from './components/start/start.component';
import { TrackComponent } from './components/track/track.component';
import { CreateComponent } from './components/create/create.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LogoComponent } from './components/logo/logo.component';
import { CreateexerciseComponent } from './components/createexercise/createexercise.component';
import { CreateworkoutComponent } from './components/createworkout/createworkout.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'create', component: CreateComponent},
  { path: 'start', component: StartComponent},
  { path: 'track', component: TrackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreatesetComponent,
    StartComponent,
    TrackComponent,
    CreateComponent,
    DropdownComponent,
    LogoComponent,
    CreateexerciseComponent,
    CreateworkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    IgxDialogModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDividerModule,
    IgxIconModule,
    IgxCardModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxToggleModule,
    IgxExpansionPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
