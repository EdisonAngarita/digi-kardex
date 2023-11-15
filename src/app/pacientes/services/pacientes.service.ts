import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { patientElement } from 'src/app/Models/patientElement';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  patientSubject = new Subject<patientElement>();
  ELEMENT_DATA: patientElement[] =
    [
      {
        id: 1, name: 'Daniela Lopéz', numberIdentification: '2192914145', room: 'HB 202', company: 'Sura',
        medications: [
          { id: 1, name: 'Glucolato Calcio', dosage: '10mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 2, name: 'Hidroxido Aluminio', dosage: '10cc', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 3, name: 'Omeprazol', dosage: '40mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 4, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' }
        ]
      }
    ];
  constructor() { }

  GetPatients(): patientElement[] {
    return this.ELEMENT_DATA.slice();
  }

  AddPatient(patient: patientElement) {
    patient.id = this.ELEMENT_DATA.length + 1;
    this.ELEMENT_DATA.push(patient);
    this.patientSubject.next(patient);
    console.log(this.ELEMENT_DATA);
  }

  DeletePatient(patient: patientElement) {
    this.ELEMENT_DATA.splice(this.ELEMENT_DATA.findIndex((patient) => { patient.id == patient.id }), 1);
    this.patientSubject.next(patient);
  }
}
