import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
@Input() control;
@Input() label;
@Input() message;
@Input() changeAt;
@Input() errorMessage;
oldStatus;
  constructor() { }

  ngOnInit() {
	  this.label = this.label || "this"
  }
  ngDoCheck(){
   if(this.control.status === "INVALID" && this.control.dirty)
   { 
	   const errorKeys = Object.keys(this.control.errors);
	   const errorField = errorKeys[0];
		switch(errorField){
		case "min" :{
		  this.message = this.label + " should have a minimum " +this.control.errors[errorField].min;
		  break;
		}
		case "minLength" :{
			this.message = this.label + " should have a minLength " +this.control.errors[errorField].minLength;
			break;
		  }
		case "max" :{
			this.message = this.label + " should have a max " +this.control.errors[errorField].max;
			break;
		}
		case "maxLength" :{
			this.message = this.label + " should have a maxLength " +this.control.errors[errorField].maxLength;
			break;
		}
		case "required" :{
			this.message = this.label + " is a required field ";
			break;
		}
		default :{
			this.message = this.control.errors[errorField];
			break;
		}
	} 
   }else{
		this.message = undefined;
	}
  }
}
