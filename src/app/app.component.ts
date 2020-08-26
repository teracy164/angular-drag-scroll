import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'drag-scroll';

    onMouseDown(event: MouseEvent) {
        // 親要素へのイベント伝搬を止める
        event.stopImmediatePropagation();
    }
}
