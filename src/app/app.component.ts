import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicioAN5';

  @ViewChild('inputTarefa')
  ipt!: ElementRef

  tarefas: Array<string> = []

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento(): void {
    this.btnClickEvent.emit()
  }

  save(): void {
    localStorage.setItem('Dados', JSON.stringify(this.tarefas))
  }

  load(): void{
    if(localStorage.getItem('Dados') != null) {
      this.tarefas = JSON.parse( '' + localStorage.getItem('Dados'))
    }
  }

  add(valor: string): void { /* Método push, puxa a array */
    this.tarefas.push("" + valor)
    this.ipt.nativeElement.value = ''
    this.save()
  }

  remove(valor: string): void {
    this.tarefas.splice(this.tarefas.indexOf(valor), 1)
    this.save()
  }

  clearAll(): void {
    this.tarefas.splice(0, this.tarefas.length)
    this.save()
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _snackBar: MatSnackBar
    ){
    this.matIconRegistry.addSvgIcon(
      "lixeira",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/delete_white_24dp.svg")
    );

      this.load();
  }

  mostrarSnackBar(): void {
    this._snackBar.open('Você apagou este item da sua lista de tarefas!', 'Fechar')
  }
  
}
