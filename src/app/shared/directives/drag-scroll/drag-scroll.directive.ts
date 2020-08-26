import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[dragScroll]'
})
export class DragScrollDirective {
    private position: { top: number, left: number, x: number, y: number };

    constructor(private el: ElementRef) { }

    get element() { return this.el.nativeElement as HTMLElement; }

    @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
        if (!this.element) { return; }

        // クリック時の位置を保持
        this.position = {
            top: this.element.scrollTop,
            left: this.element.scrollLeft,
            x: event.clientX,
            y: event.clientY,
        };

        return false;
    }

    @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
        if (this.position) {
            if (event.clientX && event.clientY) {
                // マウスの移動距離を算出
                const moveX = event.clientX - this.position.x;
                const moveY = event.clientY - this.position.y;
                // 移動距離だけスクロール
                this.element.scrollLeft = this.position.left - moveX;
                this.element.scrollTop = this.position.top - moveY;

                return false;
            }
        }
        return true;
    }
    @HostListener('mouseup') onMouseUp() { this.position = null; }
    @HostListener('mouseleave') onMouseLeave() { this.position = null; }
}
