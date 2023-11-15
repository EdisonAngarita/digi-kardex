import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { medications, patientElement } from '../Models/patientElement';


@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit, AfterViewInit {

  patient: patientElement;
  dataSource = new MatTableDataSource<medications>();
  displayedColumns: string[] = ['name', 'dosage', 'drugRoute', 'frequency', 'daytimeSchedule', 'afternoonSchedule', 'nigthSchedule'];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(
    public dialogRef: MatDialogRef<KardexComponent>,
    @Inject(MAT_DIALOG_DATA) public data: patientElement) {
    this.patient = data;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource.data = this.data.medications;

  }

  

}
