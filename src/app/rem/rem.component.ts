import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rem',
  templateUrl: './rem.component.html',
  styleUrls: ['./rem.component.css']
})
export class RemComponent {
  
  @Input() tarefas: Array<string> = []
  
  @Input() clearAll(): void {
    this.tarefas.splice(0, this.tarefas.length)
  }
}
