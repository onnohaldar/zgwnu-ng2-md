// imports generic angular 2 modules
import { DomSanitizer } from '@angular/platform-browser'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MdIconRegistry } from '@angular/material'

@Component({
    moduleId: module.id,
    selector: 'file-input',
    templateUrl: 'file-input.component.html',
    styleUrls: [ 'file-input.component.css' ],
})

export class FileInputComponent implements OnInit {
    private iconsPath: string = 'assets/icons/material-design/'
    private fileIconsPath: string = this.iconsPath + 'file/'

    @Input() fileInputId: string 
    @Output() onFileSelected = new EventEmitter<any>()


    constructor (
        private mdIconRegistry: MdIconRegistry,
        private sanitizer: DomSanitizer, 
    )
    {
        mdIconRegistry.addSvgIconInNamespace('file_input', 'file_upload', 
            sanitizer.bypassSecurityTrustResourceUrl(this.fileIconsPath + 'ic_file_upload_24px.svg'))
    }

    ngOnInit() {
        console.log('BonitaFileUploadComponent');        
    }
  
    onSelectFile(fileSelectEvent: any) {
        this.onFileSelected.emit(fileSelectEvent)
    }

}