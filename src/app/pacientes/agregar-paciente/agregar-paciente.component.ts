
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { medications } from 'src/app/Models/patientElement';
import { PacientesService } from './../services/pacientes.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})
export class AgregarPacienteComponent implements OnInit {
  medications: medications[] = [
    {}
  ];
  step = 0;

  constructor(private dialogRef: MatDialog,private pacientesService: PacientesService) { }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    this.medications.push({});
    console.log(this.medications);
  }

  prevStep(index: number) {
    this.step--;
    this.medications.splice(index, 1);
    console.log(this.medications);
  }

  guardarPaciente(patient: NgForm) {
    if (patient.valid) {
      this.pacientesService.AddPatient(
        {
          id: 1,
          name: patient.value.name,
          numberIdentification: patient.value.numberIdentification,
          room: patient.value.room,
          company: patient.value.company,
          medications: this.medications
        }
      );
      this.dialogRef.closeAll();
    }
  }


}
