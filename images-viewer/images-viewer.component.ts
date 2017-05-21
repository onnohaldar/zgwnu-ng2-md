import { Component, OnInit, Input } from '@angular/core'
import { SafeResourceUrl } from '@angular/platform-browser'

@Component({
    moduleId: module.id,
    selector: 'images-viewer',
    templateUrl: 'images-viewer.component.html',
    styleUrls: ['images-viewer.component.css']
})
export class ImagesViewerComponent implements OnInit {
    
    @Input() safeImageUrls: SafeResourceUrl[]

    overflowStyleSetting: string = 'auto'

    constructor() { }

    ngOnInit() { 
        console.log('ImagesViewerComponent.OnInit()')
    }
    
}