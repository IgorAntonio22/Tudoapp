import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent {

  @ViewChild('inputTarefa')
  ipt!: ElementRef

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  @Input() tarefas: Array<string> = []
  
  @Input() add(valor: string): void { /* Método push, puxa a array */
  this.tarefas.push("" + valor)
  this.ipt.nativeElement.value = ''
  }

  @Input() remove(valor: string): void {
    this.tarefas.splice(this.tarefas.indexOf(valor), 1)
  }

  @Input() emitirEvento(): void {
    this.btnClickEvent.emit()
  }
}