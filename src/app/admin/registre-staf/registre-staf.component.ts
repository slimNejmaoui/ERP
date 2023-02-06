import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre-staf',
  templateUrl: './registre-staf.component.html',
  styleUrls: ['./registre-staf.component.css']
})
export class RegistreStafComponent implements OnInit {
  agentForm: any = FormGroup;
  submitted: any = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.agentForm = this.formBuilder.group({

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

    if (this.agentForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.agentForm.value, null, 2));
  }
}
