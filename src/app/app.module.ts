import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { DetailsComponent } from './page/details/details.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { MenuComponent } from './components/menu/menu.component';

import { ButtonModule } from 'primeng/button'
import { PanelModule } from 'primeng/panel'
import { TabMenuModule } from 'primeng/tabmenu'
import { CardModule } from 'primeng/card'
import { TagModule } from 'primeng/tag'
import { DialogModule } from 'primeng/dialog'
import { ToastModule } from 'primeng/toast';
import { PanelComponent } from './components/panel/panel.component';
import { LoaderService } from './services/loading/loader.service';
import { LoaderInterceptor } from './services/loading/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    LoadingOverlayComponent,
    MenuComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    PanelModule,
    TabMenuModule,
    CardModule,
    TagModule,
    DialogModule,
    ToastModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
