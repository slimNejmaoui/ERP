import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre-enseignant',
  templateUrl: './registre-enseignant.component.html',
  styleUrls: ['./registre-enseignant.component.css']
})
export class RegistreEnseignantComponent implements OnInit {
  enseignantForm: any = FormGroup
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.enseignantForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      telephone: [''],
      pwd: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      ConfirmePwd: [''],
      emploi: [''],
      matiere: [''],
      diplome: [''],
      genre: [''],
      classe: [''],
      niveau: [''],
      role: [''],
      date: [''],
      naissance: [''],
      adresse: [''],
      img: [''],

      statut: ['NonActive']
    })
  }




}
