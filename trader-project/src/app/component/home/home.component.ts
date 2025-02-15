import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "atributo name";
  status = true; // estado
  listItens = ["welligton", "priscila", "isis", "yuri"];
  private enviaformularioservice = inject(EnviaFormularioService);
  // @Input() minhaPropsDeFora! : string;
  @Input("name") minhaPropsDeFora! : string; //recebe
  @Output() emitindoEvent = new EventEmitter<string>();



  // click(event: any){  // metodo
  //   console.log(event);
  // }

  submit(){
    this.emitindoEvent.emit(this.name);
    this.enviaformularioservice.enviaFormularioService("enviando formulario");
  }
  
}
