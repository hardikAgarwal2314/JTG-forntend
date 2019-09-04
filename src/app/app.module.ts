import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {routers} from './routes';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Slider1Component} from './slider1/slider1.component';
import {Slider2Component} from './slider2/slider2.component';
import {ResourcePopupComponent} from './resource-popup/resource-popup.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideshowComponent,
    HeaderComponent,
    Slider1Component,
    Slider2Component,
    ResourcePopupComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routers),
    BrowserModule
  ],
  entryComponents: [
    ResourcePopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
