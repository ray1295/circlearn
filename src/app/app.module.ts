import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { MaterialModule } from './material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MatSidenavModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SettingComponent } from './setting/setting.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FooterComponent,
    NavigationComponent,
    SettingComponent,
    SidenavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
