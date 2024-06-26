import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'buildApp-form-list-entry',
  template: `<buildApp-nx-welcome></buildApp-nx-welcome>`,
})
export class RemoteEntryComponent {}
