import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KardexComponent } from '../kardex/kardex.component';
import { PacientesService } from './services/pacientes.service';
import { AgregarPacienteComponent } from './agregar-paciente/agregar-paciente.component';
import { patientElement } from '../Models/patientElement';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit, AfterViewInit, OnDestroy {
  values: string = '';
  displayedColumns: string[] = ['name', 'numberIdentification', 'room', 'company', 'action'];
  dataSource = new MatTableDataSource<patientElement>();


  constructor(private dialog: MatDialog, private patientService: PacientesService) { }

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource.data = this.patientService.GetPatients();
    this.patientService.patientSubject.subscribe(() => {
      this.dataSource.data = this.patientService.GetPatients();
    });
  }

  ngOnDestroy(): void {
    this.patientService.patientSubject.unsubscribe();
  }

  filterData(filtro: string) {
    this.dataSource.filter = filtro;
  }

  clearFilter() {
    this.values = '';
    this.filterData(this.values);
  }

  abrirKardex(patient: patientElement) {
    this.dialog.open(KardexComponent, {
      width: '80%',
      data: patient
    });
  }

  abrirAgregarModal() {
    this.dialog.open(AgregarPacienteComponent, {
      width: '80%'
    });
  }

  deletePatient(patient: patientElement){
    this.patientService.DeletePatient(patient);
  }

}
export { patientElement };

