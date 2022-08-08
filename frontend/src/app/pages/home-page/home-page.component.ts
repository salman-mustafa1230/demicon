import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {DataService} from './../../services/data/data.service';
import { country } from 'src/app/constants/general.constants';
import * as _ from 'lodash';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
// can create in a different folder ie interface
export interface UserElement {
  name: string;
  email: string;
  country: string;
  gender: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userForm: FormGroup;
  countryArray:Array<any> = country;
  displayedColumns: string[] = ['name', 'email', 'country', 'gender'];
  // ELEMENT_DATA: UserElement[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  currentPage = 0;
  pageSize = 5;
  totalRows = 0;
  dataSource = new MatTableDataSource<UserElement>();
  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private service: DataService) {
    this.dataSource.paginator = this.paginator;
   }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      country: [null, Validators.required]
    });
  }

  submit() {
    if (!this.userForm.valid) {
      return;
    }
    this.service.get(this.userForm.value, this.currentPage).subscribe((rec: any) => {
      console.log("data:", rec);  
      this.dataSource.data = [...rec.data];
      this.paginator.pageIndex = this.currentPage;
          this.paginator.length = rec.count;
      // this.showError("Reservation saved successfully.");
    }, async error  =>{
      const errors = error.error.errors;
      this.showError("There are some error, please try again later.")
      console.log("error:", error);
    });
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.currentPage = event.pageIndex;
    this.submit();
  }

  async showError (msg: any) {
    await this._snackBar.open(msg, "OK", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"

    });
  }

}
