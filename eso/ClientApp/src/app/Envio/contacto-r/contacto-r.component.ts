import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from 'src/app/Eso/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto-r',
  templateUrl: './contacto-r.component.html',
  styleUrls: ['./contacto-r.component.css']
})
export class ContactoRComponent implements OnInit {
  formGroup: FormGroup;

  persona: Contacto;
  constructor(private personaService: ContactoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.persona = new Contacto();
    this.persona.nombre = '';
    this.persona.email = '';
    this.persona.subject = '';
    this.persona.descripcion = '';

    this.formGroup = this.formBuilder.group({
      nombre: [this.persona.nombre],
      emil: [this.persona.email, Validators.required],
      suject: [this.persona.subject],
      descripcion:[this.persona.descripcion]
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }
  get control() { return this.formGroup.controls; }

// aqui va la validadcion de estado
  add() {
    this.persona = this.formGroup.value;
    //this.personaService.post(this.persona).subscribe(p => {
      //if (p != null) {
      alert('(/*-*)/(/*-*)/(/*-*)/ --- la enviado! --- (/*-*)/(/*-*)/(/*-*)/');
       //this.persona = p;
      //}
    //});
  }
}
