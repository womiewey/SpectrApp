import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BudgetPage } from '../pages/budget/budget';
import { RecipePage } from '../pages/recipe/recipe';
import { SignupPage } from '../pages/signup/signup';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { HttpModule } from '@angular/http';
import { AdoboPage } from '../pages/adobo/adobo';
import { SinigangPage } from '../pages/sinigang/sinigang';
import { SpaghettiPage } from '../pages/spaghetti/spaghetti';
@NgModule({
  declarations: [
    MyApp,
    HomePage,    
    LoginPage,
    BudgetPage,
    RecipePage,
    SignupPage,
    AdoboPage,
    SinigangPage,
    SpaghettiPage,    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BudgetPage,
    RecipePage,
    SignupPage,
    AdoboPage,
    SinigangPage,
    SpaghettiPage,    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider,
  ]
})
export class AppModule {}
