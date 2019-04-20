import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { ModalComponent } from '../modal/modal.component';
import { SaveQueriesService } from '../services/save-queries.service';

@Component({
  selector: 'app-saved-search',
  templateUrl: './saved-search.component.html',
  styleUrls: ['./saved-search.component.scss']
})
export class SavedSearchComponent implements OnInit {
  @ViewChild( ModalComponent) Modal: ModalComponent;
  @Input() savedQueries;
  isVertical: boolean = false;
  showMenu: boolean = true;
  @Input() loadOperator;
  @Output() queryClick = new EventEmitter <any> ();
  @Output() listClick = new EventEmitter <any> ();
  dataSource;
  queriesLength = 0;
  saveQueriesUrl;
  savedQueryUrl;
  editQueryUrl;
  addQueryUrl;
  sliderData;
  formQueryObject;
  advanceSliderData;
  buttonConfig = [
    { 'label': 'Clear', 'type': 'button', 'severity': 'flat', 'icon': '', 'iconPos': '', 'id': 'clear' },
    { 'label': 'Search', 'type': 'submit', 'Severity': '', 'icon': '', 'iconPos': '', 'id': 'search' }
  ];
  constructor(private formService: FormDataService,
              private backendQuery: SaveQueriesService) {
              }
  ngOnInit() {
    this.saveQueriesUrl = this.savedQueries && this.savedQueries.savedQueries;
    this.savedQueryUrl = this.savedQueries && this.savedQueries.saveQuerySlider;
    this.editQueryUrl = this.savedQueries && this.savedQueries.editQuerySlider;
    this.addQueryUrl = this.savedQueries && this.savedQueries.saveQuerySlider;
    // this.formService.getSavedQueries(this.saveQueriesUrl).subscribe( data => {
    //   this.savedQueries = data['data'];
    //   this.findQueriesLength(this.savedQueries);
    // });
  }
  findQueriesLength(data) {
    data.items.forEach(element => {
      this.queriesLength =  element.queries.length + this.queriesLength;
    });
  }
  onQueryAction(item, event) {
    const url = item.url + '/' + event.id;
      if (item.id.toLowerCase() === 'loadcriteria') {
       
      } else if (item.id.toLowerCase() === 'edit') {
        this.formService.getEditQueryData().subscribe( data => {
          this.openSlider(data['searchDetails']);
          this.advanceSliderData = [];
          this.advanceSliderData = data;
        });
      } else if (item.id.toLowerCase() === 'delete') {
        this.backendQuery.deleteQuery(url).subscribe(data => {
            this.showBanner(data['data']);
        });
      } else {
        this.backendQuery.markAndUnmarkDefault(url).subscribe(data => {
            this.showBanner(data['data']);
        });
      }
  }
  runSavedQuery(query) {
    const url = this.savedQueries && this.savedQueries.rowActions && this.savedQueries.rowActions[0].url;
   // this.events.fire('runQuery', {'url': url + '/' + query.id});
  }
  saveQ(event) {
    if (event.item.type === 'submit') {
      alert(event);
    }
  }
  clearForm(event) {
    console.log('clearForm');
  }
  showBanner(details) {
    const params = {
      status: details.status,
      message: details.message
    };
  //  this.bannerService.showBannerOnResponse(params);
  }
  openSlider(data) {
      this.sliderData = {};
      this.sliderData['items'] = data;
      this.Modal.open({backdrop: true});
  }
}
