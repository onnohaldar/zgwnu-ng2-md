import { Component, OnInit, Input } from '@angular/core'
import { SafeResourceUrl } from '@angular/platform-browser'

@Component({
    moduleId: module.id,
    selector: 'zgwnu-images-viewer',
    templateUrl: 'zgwnu-images-viewer.component.html',
    styleUrls: ['zgwnu-images-viewer.component.css']
})
export class ZgwnuImagesViewerComponent implements OnInit {
    
    @Input() safeImageUrls: SafeResourceUrl[]

    overflowStyleSetting: string = 'auto'

    constructor() { }

    ngOnInit() { 
        console.log('ZgwnuImagesViewerComponent.OnInit()')
    }
    
}