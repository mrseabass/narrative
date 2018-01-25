import { NgModule } from '@angular/core';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } }
  ],
  imports: [MatSelectModule, MatButtonModule, BrowserAnimationsModule],
  exports: [MatSelectModule, MatButtonModule, BrowserAnimationsModule]
})
export class CustomMaterialModule {}
