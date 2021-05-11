import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimesComponent],

  exports: [AnimesComponent],
})
export class AnimesModule { }
