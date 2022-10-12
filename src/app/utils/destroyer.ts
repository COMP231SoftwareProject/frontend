import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

@Component({ template: '' })
export class Destroyer implements OnDestroy {
  private subSink = new SubSink();
  set subs(value: Subscription) {
    this.subSink.sink = value;
  }
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
