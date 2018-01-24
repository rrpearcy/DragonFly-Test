import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }
