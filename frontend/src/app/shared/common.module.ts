import { NgModule } from '@angular/core';

// material
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button"
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from "@angular/material/select"
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDividerModule,
        MatCardModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule, 
        MatProgressSpinnerModule
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDividerModule,
        MatCardModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule, 
        MatProgressSpinnerModule
    ],
    providers: []
  })
  export class CommonComponentModule { }