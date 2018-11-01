import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
 
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ROUTING } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

 
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
	HomeComponent,
	AboutComponent,
	GalleryComponent,
	ContactComponent
	
    
  ],
  imports: [
    BrowserModule,
    rootRouting,
    ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }