import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ToastModule,
    MenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    TagModule,
    DividerModule,
    TableModule,
    DialogModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimengModule { }
