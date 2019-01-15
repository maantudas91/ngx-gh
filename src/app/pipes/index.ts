import { NgModule } from '@angular/core';
import { KeyPipe } from './key.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [KeyPipe, FilterPipe],
  imports: [
  ],
  exports:[KeyPipe, FilterPipe]
})
export class PipeModule { }
