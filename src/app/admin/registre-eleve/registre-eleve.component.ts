import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre-eleve',
  templateUrl: './registre-eleve.component.html',
  styleUrls: ['./registre-eleve.component.css']
})
export class RegistreEleveComponent implements OnInit {
  imagePreview: any;
  eleveForm: any = FormGroup
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: Router,) { }

  ngOnInit(): void {
    this.eleveForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      telephone: [''],
      pwd: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      ConfirmePwd: [''],
      emploi: [''],
      parent: [''],
      telephoneParent: [''],
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
