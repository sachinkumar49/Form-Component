import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormValidationService } from '../services/form-validation.service';
import { DateLocaleService } from '../services/date-locale.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-combo-field',
  templateUrl: './combo-field.component.html',
  styleUrls: ['./combo-field.component.scss']
})
export class ComboFieldComponent extends FormComponent implements OnInit {
@Input() comboData;
@Input() comboFormControl;
disabled;
 locale;
 fields;
 public formControlObject;

  constructor(private validate: FormValidationService, private dateLocale: DateLocaleService) {
    super();
   }

  ngOnInit() {
    this.locale = this.dateLocale.getLocale();
    if (this.comboFormControl) {
      this.formControlObject = this.comboFormControl;;
    } else {
        this.creatingFormControl();
    }
    this.fields = this.comboData.fields || this.comboData;
  }
  creatingFormControl() {
    this.formControlObject = this.validate.FormValidation([this.comboData]);
  }

}
