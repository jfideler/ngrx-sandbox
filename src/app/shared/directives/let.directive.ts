import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  $implicit: T;
  appaLet: T;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appaLet]'
})
export class LetDirective<T> {
  private _context: LetContext<T> = { $implicit: null, appaLet: null };

  constructor(_viewContainer: ViewContainerRef, _templateRef: TemplateRef<LetContext<T>>) {
    _viewContainer.createEmbeddedView(_templateRef, this._context);
  }

  @Input()
  set appaLet(value: T) {
    this._context.$implicit = this._context.appaLet = value;
  }
}
