import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';

@NgModule({
    imports: [RouterModule],
    declarations: [StudentsComponent],
    exports: [StudentsComponent]
})

export class StudentsModule { }
