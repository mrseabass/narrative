import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatSelectModule, BrowserAnimationsModule],
  exports: [MatSelectModule, BrowserAnimationsModule]
})
export class CustomMaterialModule {}
