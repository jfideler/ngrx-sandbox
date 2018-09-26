
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from './directives/let.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LetDirective
  ],
  exports: [LetDirective]})
  export class SharedModule {}
