import { GfSymbolIconModule } from '@ghostfolio/client/components/symbol-icon/symbol-icon.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CreateOrUpdatePlatformDialog } from './create-or-update-platform-dialog.component';

@NgModule({
  declarations: [CreateOrUpdatePlatformDialog],
  imports: [
    CommonModule,
    GfSymbolIconModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class GfCreateOrUpdatePlatformDialogModule {}
