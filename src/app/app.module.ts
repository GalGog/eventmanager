import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';





import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule
      }
    ])
  ],
  providers: [
  FormioAuthService,
  {provide: FormioAuthConfig, useValue: AuthConfig},
  {provide: FormioAppConfig, useValue: AppConfig}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
