import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre-parent',
  templateUrl: './registre-parent.component.html',
  styleUrls: ['./registre-parent.component.css']
})
export class RegistreParentComponent implements OnInit {
  parentForm: any = FormGroup;
  submitted: boolean = false


  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.parentForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      telephone: [''],
      pwd: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      ConfirmePwd: [''],
      emploi: [''],
      cin: [''],
      salaire: [''],
      diplome: [''],
      genre: [''],
      role: [''],
      date: [''],
      naissance: [''],
      adresse: [''],
      img: [''],

      statut: ['NonActive']
    })
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.parentForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.parentForm.value, null, 2));
  }

}
