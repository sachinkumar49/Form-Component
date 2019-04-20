import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

// third party modules import starts here
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AutoCompleteModule } from 'primeng/autocomplete'
import {AccordionModule} from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button'
import {PickListModule} from 'primeng/picklist';
// third party modules import ends here


// prgx component import start from here
import { BasicFormComponent } from './basic-form/basic-form.component';
import { AdvanceFormComponent } from './advance-form/advance-form.component';
import { SavedSearchComponent } from './saved-search/saved-search.component';;
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';
import { ErrorsComponent } from './errors/errors.component';
import { ModalComponent } from './modal/modal.component';
import { ComboFieldComponent } from './combo-field/combo-field.component';
import { ModifiedPickListDirective } from './modified-pick-list.directive';
import { ButtonDropdownComponent } from './button-dropdown/button-dropdown.component';
import {HttpClientModule} from '@angular/common/http';
// prgx component import ends here


@NgModule({
  imports: [
    CommonModule, // angular modules starts from here
    FormsModule,
    ReactiveFormsModule, // angular modules till here
    DropdownModule,// prime ng modules starts from here
    InputTextModule,
    CheckboxModule,
    CalendarModule,
    RadioButtonModule,
    MultiSelectModule,
    KeyFilterModule,
    AutoCompleteModule,
    AccordionModule,
    ButtonModule,
    PickListModule,
    HttpClientModule,
    ToastModule, // prime ng modules till here
    
  ],
  declarations: [
    BasicFormComponent,
    AdvanceFormComponent,
    SavedSearchComponent,
    ButtonComponent,
    FormComponent,
    ErrorsComponent,
    ModalComponent,
    ComboFieldComponent,
    ModifiedPickListDirective,
    ButtonDropdownComponent
  ],

  exports : [
    BasicFormComponent, 
    AdvanceFormComponent, 
    SavedSearchComponent,
    ButtonComponent,
    FormComponent,
    ModalComponent,
    ButtonDropdownComponent
  ]
})
export class FormModule { }

