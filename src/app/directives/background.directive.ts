import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
    @Input('appBackground') hoverColor: string;
    @Input() defaultColor: string;
    @HostBinding('style.backgroundColor') background: string;//Декоратор

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {
    }

    @HostListener('mouseenter') mouseEnter() {
        const element = this.element.nativeElement;
        //this.renderer.setStyle(element, 'background-color', 'blue');
        this.background=this.hoverColor;
        this.renderer.addClass(element, 'white-text');
    }

    @HostListener('mouseleave') mouseLeave() {
        const element = this.element.nativeElement;
        //this.renderer.setStyle(element, 'background-color', 'transparent');
        this.background=this.defaultColor;
        this.renderer.removeClass(element, 'white-text');

    }
}