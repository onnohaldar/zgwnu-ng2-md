import { DomSanitizer } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'
import { MdIconRegistry } from '@angular/material'

import { ZgwnuToolbarService } from './zgwnu-toolbar.service'

@Component({
  moduleId: module.id,
  selector: 'zgwnu-toolbar',
  templateUrl: 'zgwnu-toolbar.component.html',
  styleUrls: [ 'zgwnu-toolbar.component.css' ],
})

export class ZgwnuToolbarComponent implements OnInit {
  private iconsPath: string = 'assets/icons/material-design/'
  private contentIconsPath: string = this.iconsPath + 'content/'
  private navigationIconsPath = this.iconsPath + 'navigation/'
  private actionIconsPath = this.iconsPath + 'action/'

  constructor(
    public toolbarService: ZgwnuToolbarService,
    private mdIconRegistry: MdIconRegistry, 
    private sanitizer: DomSanitizer, 
  )
  {

    // register all used material icons here
    mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'save', 
      sanitizer.bypassSecurityTrustResourceUrl(this.contentIconsPath + 'ic_save_24px.svg'))
    mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'close', 
      sanitizer.bypassSecurityTrustResourceUrl(this.navigationIconsPath + 'ic_close_24px.svg'))
    mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'cancel', 
      sanitizer.bypassSecurityTrustResourceUrl(this.navigationIconsPath + 'ic_cancel_24px.svg'))
    mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'menu', 
      sanitizer.bypassSecurityTrustResourceUrl(this.navigationIconsPath + 'ic_menu_24px.svg'))
    mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'send', 
      sanitizer.bypassSecurityTrustResourceUrl(this.contentIconsPath + 'ic_send_24px.svg'))
    mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'settings', 
      sanitizer.bypassSecurityTrustResourceUrl(this.actionIconsPath + 'ic_settings_black_24px.svg'))
  }

  ngOnInit():void {
    console.log('InitZgwnuToolbarComponent')
  }

  onClickExit() {
    this.toolbarService.componentReference.onToolbarClickExit()
  }

  onClickSettings() {
    this.toolbarService.componentReference.onToolbarClickSettings()
  }

  onClickSave() {
    this.toolbarService.componentReference.onToolbarClickSave()
  }

  onClickCancel() {
    this.toolbarService.componentReference.onToolbarClickCancel()
  }

  onClickMenu() {
    this.toolbarService.componentReference.onToolbarClickMenu()
  }

  onClickSend() {
    this.toolbarService.componentReference.onToolbarClickSend()
  }


}