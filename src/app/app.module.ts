import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
 
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

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
    FormsModule,
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }