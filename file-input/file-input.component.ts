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
    @Output() onFilesSelected = new EventEmitter<FileList>()


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
  
    onSelectFiles(filesSelectEvent: any) {
        let selectedFiles: FileList = filesSelectEvent.target.files
        this.onFilesSelected.emit(selectedFiles)
    }

}