import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding, HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';

import { StatusComponent } from '../status/status.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[status]',
})

export class StatusDirective implements OnInit, OnDestroy {

  private element: HTMLElement;
  private statusRef: ComponentRef<StatusComponent>;

  @Input()
  status: string = '';

  @HostListener('click') onclick(): void {
    this.showStatus();
  }

  @HostListener('mouseleave') onmouseleave(): void {
    this.hideStatus();
  }


constructor(private elementRef: ElementRef,
            private viewContainer: ViewContainerRef,
            private componentFactoryResolver: ComponentFactoryResolver){
  }

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement;
  }

  ngOnDestroy(): void {
    this.hideStatus();
  }

  hideStatus(): void {
    if (this.statusRef) {
      this.statusRef.destroy();
      this.statusRef = null;
    }
  }
  showStatus(): void {
    this.statusRef = this.createStatus(this.status);
    const statusEl = this.statusRef.location.nativeElement;
    console.log(this.status);
  }

  private createStatus(content: string): ComponentRef<StatusComponent> {
    this.viewContainer.clear();
    const statusComponentFactory = this.componentFactoryResolver.resolveComponentFactory(StatusComponent);
    const statusComponentRef = this.viewContainer.createComponent(statusComponentFactory);
    statusComponentRef.instance.content = content;
    return statusComponentRef;
  }

}
