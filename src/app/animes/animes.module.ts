import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes.component';
import { AnimesDetailComponent } from './animes-detail/animes-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimesComponent, AnimesDetailComponent],

  exports: [AnimesComponent],
})
export class AnimesModule { }
