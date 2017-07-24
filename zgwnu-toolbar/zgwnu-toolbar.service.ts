import { Injectable } from '@angular/core'

import { ZgwnuToolbarButtonProperties } from './zgwnu-toolbar-button-properties'

@Injectable()
export class ZgwnuToolbarService {
    private _componentReference: any

    mainTitle: string = 'ZgwnuModules2'
    subTitle: string = ''

    menuButton: ZgwnuToolbarButtonProperties = new ZgwnuToolbarButtonProperties(true, 'menu')
    saveButton: ZgwnuToolbarButtonProperties = new ZgwnuToolbarButtonProperties(false, 'save')
    sendButton: ZgwnuToolbarButtonProperties = new ZgwnuToolbarButtonProperties(false, 'send')
    cancelButton: ZgwnuToolbarButtonProperties = new ZgwnuToolbarButtonProperties(false, 'cancel')
    settingsButton: ZgwnuToolbarButtonProperties = new ZgwnuToolbarButtonProperties(false, 'settings')

    exitButton: ZgwnuToolbarButtonProperties = new ZgwnuToolbarButtonProperties(true, 'exit')

    set componentReference(reference: any) {
        this.menuButton.active = true
        this.settingsButton.active = false
        this.saveButton.active = false
        this.sendButton.active = false
        this.cancelButton.active = false
        this.exitButton.active = true
        this._componentReference = reference
    }

    get componentReference() {
        return this._componentReference
    }

}
