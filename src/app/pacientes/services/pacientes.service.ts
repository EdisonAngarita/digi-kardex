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
      },
      {
        id: 2, name: 'Angél Hernandez Garcia', numberIdentification: '80822854', room: 'HB 505', company: 'Compensar',
        medications: [
          { id: 1, name: 'Glucolato Calcio', dosage: '10mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 2, name: 'Hidroxido Aluminio', dosage: '10cc', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 3, name: 'Omeprazol', dosage: '40mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 4, name: 'Penisilina', dosage: '5mg', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 5, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'IV', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 6, name: 'Aspirina', dosage: '5mg', drugRoute: 'VO', frequency: 'C 12', daytimeSchedule: '05:00', afternoonSchedule: '15:00', nigthSchedule: '20:00' },
          { id: 7, name: 'Paracetamol', dosage: '55mg', drugRoute: 'IV', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 8, name: 'Amlodipina', dosage: '15mg', drugRoute: 'VO', frequency: 'C 12', daytimeSchedule: '03:00', afternoonSchedule: '13:00', nigthSchedule: '19:00' },
        ]
      },
      {
        id: 3, name: 'Maria Paula Mora', numberIdentification: '89828441', room: 'HB 102', company: 'Sura',
        medications: [
          { id: 1, name: 'Glucolato Calcio', dosage: '10mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 2, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'IV', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 3, name: 'Aspirina', dosage: '5mg', drugRoute: 'VO', frequency: 'C 12', daytimeSchedule: '05:00', afternoonSchedule: '15:00', nigthSchedule: '20:00' },
          { id: 4, name: 'Paracetamol', dosage: '55mg', drugRoute: 'IV', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 5, name: 'Hidroxido Aluminio', dosage: '10cc', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 6, name: 'Omeprazol', dosage: '40mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 7, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' }
        ]
      }, {
        id: 4, name: 'Mauricio Florez Manrrique', numberIdentification: '854785445', room: 'HB 305', company: 'Compensar',
        medications: [
          { id: 1, name: 'Glucolato Calcio', dosage: '10mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 2, name: 'Hidroxido Aluminio', dosage: '10cc', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 3, name: 'Omeprazol', dosage: '40mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 4, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' }
        ]
      },
      {
        id: 5, name: 'Ana Maria Hernandez', numberIdentification: '110005151', room: 'HB 401', company: 'Compensar',
        medications: [
          { id: 1, name: 'Glucolato Calcio', dosage: '10mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 2, name: 'Hidroxido Aluminio', dosage: '10cc', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 3, name: 'Omeprazol', dosage: '40mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 4, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' }
        ]
      },
      {
        id: 6, name: 'Omar Yesid Yepes', numberIdentification: '592988145', room: 'HB 101', company: 'Sura',
        medications: [
          { id: 1, name: 'Glucolato Calcio', dosage: '10mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 2, name: 'Hidroxido Aluminio', dosage: '10cc', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 3, name: 'Omeprazol', dosage: '40mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 4, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 6, name: 'Aspirina', dosage: '5mg', drugRoute: 'VO', frequency: 'C 12', daytimeSchedule: '05:00', afternoonSchedule: '15:00', nigthSchedule: '20:00' },
          { id: 7, name: 'Paracetamol', dosage: '55mg', drugRoute: 'IV', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
        ]
      },
      {
        id: 7, name: 'Angelica Maria Yepes Murcia', numberIdentification: '5842914145', room: 'HB 106', company: 'Sura',
        medications: [
          { id: 1, name: 'Glucolato Calcio', dosage: '10mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 2, name: 'Hidroxido Aluminio', dosage: '10cc', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 3, name: 'Omeprazol', dosage: '40mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 4, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 6, name: 'Aspirina', dosage: '5mg', drugRoute: 'VO', frequency: 'C 12', daytimeSchedule: '05:00', afternoonSchedule: '15:00', nigthSchedule: '20:00' },
          { id: 7, name: 'Paracetamol', dosage: '55mg', drugRoute: 'IV', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
        ]
      },
      {
        id: 8, name: 'Yesid Perez', numberIdentification: '590914145', room: 'HB 109', company: 'Sura',
        medications: [
          { id: 1, name: 'Glucolato Calcio', dosage: '10mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 2, name: 'Hidroxido Aluminio', dosage: '10cc', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 3, name: 'Omeprazol', dosage: '40mg', drugRoute: 'IV', frequency: 'C 12', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 4, name: 'Acetaminofen', dosage: '5mg', drugRoute: 'VO', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
          { id: 6, name: 'Aspirina', dosage: '5mg', drugRoute: 'VO', frequency: 'C 12', daytimeSchedule: '05:00', afternoonSchedule: '15:00', nigthSchedule: '20:00' },
          { id: 7, name: 'Paracetamol', dosage: '55mg', drugRoute: 'IV', frequency: 'DIA', daytimeSchedule: '08:00', afternoonSchedule: '18:00', nigthSchedule: '22:00' },
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
