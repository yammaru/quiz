import { Injectable } from '@angular/core';
import { Contacto } from '../Eso/models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
  post(persona: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.baseUrl + 'api/Persona', persona)
    .pipe(
    tap(_ => this.handleErrorService.log('datos enviados')),
    catchError(this.handleErrorService.handleError<Contacto>('Registrar Persona', null))
    );
    }
}
