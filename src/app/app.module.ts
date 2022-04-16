import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { SocialItemComponent } from './components/social-item.component';
import { AppService } from './shared/services/app-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    SocialItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
