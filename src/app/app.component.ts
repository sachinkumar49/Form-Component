import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public columns =  [ {
    "textAlign": "left",
    "sort": true,
    "label": "Supplier name",
    "isVisible": true,
    "key": "SupplierName"
  },  {
    "textAlign": "left",
    "sort": true,
    "label": "",
    "isVisible": true,
    "key": "Action"
  }]
  items = [{
    "SupplierName": "SCRr, Pilger & Mayer LLP",
    "Action":""

  }, {
    "SupplierName": "SCRUBN DISTB INC",
    "Action":""
  }];
  data ={
    "columns":this.columns,
    "items": this.items
  }
  formData = {
		"type": "TASK_PAGE_COUPON_DEDUCTIONS_QUESTION_TO_ANSWER_SEARCH",
		"status": "success",
		"items": [{
			"id": "taskID",
			"label": "Task ID",
			"value": "",
			"rules": {},
			"type": "text",
			"operator": {
				"id": "Contains",
				"label": "Contains"
			}
		}, {
			"id": "NCHDeductionNumber",
			"label": "NCH deduction #",
			"value": "",
			"rules": {
				"maxLength": 9
			},
			"type": "text",
			"operator": {
				"id": "EqualsTo",
				"label": "EqualsTo"
			}
		}, {
			"id": "NCHInvoiceNumber",
			"label": "NCH invoice #",
			"value": "",
			"rules": {
				"maxLength": 9
			},
			"type": "text",
			"operator": {
				"id": "EqualsTo",
				"label": "EqualsTo"
			}
		}, {
			"id": "NCHManufacturerNumber",
			"label": "NCH manufacturer #",
			"value": "",
			"rules": {
				"maxLength": 9
			},
			"type": "text",
			"operator": {
				"id": "EqualsTo",
				"label": "EqualsTo"
			}
		}, {
			"id": "NCHManufacturerName",
			"label": "NCH manufacturer name",
			"value": "",
			"rules": {
				"maxLength": 35
			},
			"type": "text",
			"operator": {
				"id": "EqualsTo",
				"label": "EqualsTo"
			}
		}, {
			"id": "SupplierERPID",
			"label": "Supplier ERP ID",
			"value": "",
			"rules": {
				"maxLength": 8
			},
			"type": "text",
			"operator": {
				"id": "EqualsTo",
				"label": "EqualsTo"
			}
		}, {
			"id": "SupplierName",
			"label": "Supplier name",
			"value": "",
			"rules": {
				"maxLength": 35
			},
			"type": "text",
			"operator": {
				"id": "Contains",
				"label": "Contains"
			}
		}, {
			"id": "NCHinvoicedate",
			"label": "NCH invoice date",
			"value": "",
			"rules": {
				"maxLength": 10
			},
			"selectionMode":"range",
			"type": "date",
			"operator": {
				"id": "Between",
				"label": "Between"
			}
		}, {
			"id": "Reportdate",
			"label": "Report date",
			"value": "",
			"rules": {
				"maxLength": 10
			},
			"selectionMode":"range",
			"type": "date",
			"operator": {
				"id": "Between",
				"label": "Between"
			}
		}, {
			"id": "AssignedUser",
			"label": "Assigned user",
			"value": "",
			"rules": {},
			"type": "multiSelect",
			"options": [{
				"label": "KrogerAdmin (Lavante) (Kroger.admin@Kroger.com)",
				"value": {
					"id": "227965",
					"name": "KrogerAdmin (Lavante) (Kroger.admin@Kroger.com)"
				}
			}],
			"operator": {
				"id": "IN",
				"label": "IN"
			}
		}, {
			"id": "AssignedRole",
			"label": "Assigned role",
			"value": "",
			"rules": {},
			"type": "multiSelect",
			"options": [{
				"label": "Administrator",
				"value": {
					"id": "65",
					"name": "Administrator"
				}
			}, {
				"label": "AP",
				"value": {
					"id": "66",
					"name": "AP"
				}
			}, {
				"label": "Buyer",
				"value": {
					"id": "67",
					"name": "Buyer"
				}
			}, {
				"label": "Viewer",
				"value": {
					"id": "68",
					"name": "Viewer"
				}
			}, {
				"label": "Kroger Admin",
				"value": {
					"id": "301",
					"name": "Kroger Admin"
				}
			}, {
				"label": "Kroger Assistant Controller",
				"value": {
					"id": "309",
					"name": "Kroger Assistant Controller"
				}
			}, {
				"label": "Kroger Buyers",
				"value": {
					"id": "305",
					"name": "Kroger Buyers"
				}
			}, {
				"label": "Kroger Category Manager",
				"value": {
					"id": "304",
					"name": "Kroger Category Manager"
				}
			}, {
				"label": "Kroger Clerk",
				"value": {
					"id": "302",
					"name": "Kroger Clerk"
				}
			}, {
				"label": "Kroger Coordinator",
				"value": {
					"id": "308",
					"name": "Kroger Coordinator"
				}
			}, {
				"label": "Kroger PRGX Clerk",
				"value": {
					"id": "307",
					"name": "Kroger PRGX Clerk"
				}
			}, {
				"label": "Kroger Traffic",
				"value": {
					"id": "306",
					"name": "Kroger Traffic"
				}
			}, {
				"label": "Kroger Warehouse",
				"value": {
					"id": "303",
					"name": "Kroger Warehouse"
				}
			}, {
				"label": "Kroger Clerk FAR",
				"value": {
					"id": "311",
					"name": "Kroger Clerk FAR"
				}
			}, {
				"label": "Kroger Clerk NAR",
				"value": {
					"id": "313",
					"name": "Kroger Clerk NAR"
				}
			}, {
				"label": "Kroger Clerk PAR",
				"value": {
					"id": "312",
					"name": "Kroger Clerk PAR"
				}
			}, {
				"label": "Kroger Coordinator FAR",
				"value": {
					"id": "316",
					"name": "Kroger Coordinator FAR"
				}
			}, {
				"label": "Kroger Coordinator NAR",
				"value": {
					"id": "318",
					"name": "Kroger Coordinator NAR"
				}
			}, {
				"label": "Kroger Coordinator PAR",
				"value": {
					"id": "317",
					"name": "Kroger Coordinator PAR"
				}
			}, {
				"label": "Kroger Merch DMM",
				"value": {
					"id": "315",
					"name": "Kroger Merch DMM"
				}
			}, {
				"label": "Kroger NAR Gen Merch",
				"value": {
					"id": "314",
					"name": "Kroger NAR Gen Merch"
				}
			}, {
				"label": "Kroger PRGX Manager",
				"value": {
					"id": "310",
					"name": "Kroger PRGX Manager"
				}
			}, {
				"label": "Kroger Vendor Non-Compliance",
				"value": {
					"id": "323",
					"name": "Kroger Vendor Non-Compliance"
				}
			}, {
				"label": "Kroger Coupon Clerk",
				"value": {
					"id": "339",
					"name": "Kroger Coupon Clerk"
				}
			}, {
				"label": "Kroger Promo Clerk",
				"value": {
					"id": "338",
					"name": "Kroger Promo Clerk"
				}
			}],
			"operator": {
				"id": "IN",
				"label": "IN"
			}
		}, {
			"id": "AssignedGroup",
			"label": "Assigned group",
			"value": "",
			"rules": {},
			"type": "multiSelect",
			"options": [{
				"label": "Kroger FAR and PAR",
				"value": {
					"id": "KRG-FARPAR",
					"name": "Kroger FAR and PAR"
				}
			}, {
				"label": "Notifications-235",
				"value": {
					"id": "Notifications-235",
					"name": "Notifications-235"
				}
			}],
			"operator": {
				"id": "IN",
				"label": "IN"
			}
		}, {
			"id": "taskStatus",
			"label": "Task status",
			"value": "",
			"rules": {},
			"type": "select",
			"options": [{
				"label": "Completed",
				"value": {
					"id": "17102",
					"name": "Completed"
				}
			}, {
				"label": "Outstanding",
				"value": {
					"id": "17101",
					"name": "Outstanding"
				}
			}, {
				"label": "Select status",
				"value": {
					"id": "-1"
				}
			}],
			"operator": {
				"id": "EqualsTo",
				"label": "EqualsTo"
			}
		}, {
			"id": "AssignedAt",
			"label": "Assigned on",
			"value": "",
			"rules": {},
			"type": "date",
			"selectionMode":"single",
			"operator": {
				"id": "EqualsTo",
				"label": "EqualsTo"
			}
		}]
	};
  deleteRow(rowDetails) {
   alert("row deleted"+JSON.stringify(rowDetails))
  }

}
