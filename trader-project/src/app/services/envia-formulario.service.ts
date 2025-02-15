import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }
  enviaFormularioService(info: string){

    console.log("formulário enviado! em viado!")
  }
}
