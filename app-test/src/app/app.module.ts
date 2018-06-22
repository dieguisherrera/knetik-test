import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './devices/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSlideToggleModule } from '@angular/material';

import {
  DxDataGridModule, DxTooltipModule, DxCircularGaugeModule,
  DxSelectBoxModule, DxTextBoxModule, DxValidatorModule, DxButtonModule
} from 'devextreme-angular';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    DxDataGridModule,
    DxTooltipModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxValidatorModule,
    DxCircularGaugeModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
