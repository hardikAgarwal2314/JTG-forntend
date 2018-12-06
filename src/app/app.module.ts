import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {routers} from './routes';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ProdutsComponent} from './produts/produts.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {HeaderComponent} from './header/header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactUsComponent,
        AboutUsComponent,
        ProdutsComponent,
        SlideshowComponent,
        HeaderComponent,
    ],
    imports: [
        MatIconModule,
        MatTableModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        RouterModule.forRoot(routers),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
