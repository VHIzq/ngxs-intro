import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeValueComponent } from './change-value/change-value.component';
import { DisplayValueComponent } from './display-value/display-value.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { SimpleValueState } from './state/simple-value.state';


@NgModule({
  declarations: [AppComponent, ChangeValueComponent, DisplayValueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    MatSlideToggleModule,
    NgxsModule.forRoot([SimpleValueState], {
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
