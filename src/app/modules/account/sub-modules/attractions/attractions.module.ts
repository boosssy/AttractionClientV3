import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttractionBrowserComponent } from './pages/attraction-browser/attraction-browser.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AttractionBrowserComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AttractionsModule { }
