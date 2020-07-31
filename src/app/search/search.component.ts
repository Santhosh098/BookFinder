import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild,Inject } from '@angular/core';
import { RestClientService } from '../services/rest-client.service';
import { FetchBookService} from '../services/fetch-book.service';
import { ConfigUrls } from '../common/app-config';
import { componentItem } from '../common/componentItem';
import { ComponentDirective } from '../common/comp-directive';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ConfigUrls]
})
export class SearchComponent implements OnInit {
  public isSpinnerActive:boolean = false;
  public searchQ: string;
  public _components:componentItem;
  public googleBooks: any;
  //@ViewChild(ComponentDirective, {static: true}) compRef: ComponentDirective;
  constructor(public dialog: MatDialog,private restClientService: RestClientService,private configUrls:ConfigUrls,public viewContainerRef: ViewContainerRef,private componentFactoryResolver: ComponentFactoryResolver,private fetchBookService:FetchBookService) { }

  ngOnInit() {
  }

  public searchBook() {
    try {
      let restURL = this.getURL(this.searchQ);
      if(this.searchQ){
        this.isSpinnerActive = true;
        this.restClientService.makeRestCall(restURL).subscribe(Response => {
          
          console.log("response from rest", Response);
          if(Response.totalItems != 0){
            this.googleBooks = Response;
            this.isSpinnerActive = false;
          }else{
            this.openDialog();
          }
        })
      }else{
        this.openDialog();
      }
      
    } catch (exception) {
      console.log("exception occured in search", exception)
    }

  }
  
  private getURL(searchQ: any) {
    try {
      let GoogleApi = this.configUrls.URLS.GOOGLE_BOOK_AP+'?q='+searchQ+'+'+'inauthor:'+searchQ;
      return GoogleApi;
    } catch (exception) {
      console.log("exception occured while forming URL", exception)
    }
  }

  public openDialog(): void {
    this.isSpinnerActive = false;
    this.dialog.open(InfoModal);
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'angular-dialog-modal.html',
})
export class InfoModal {

  constructor(
    public dialogRef: MatDialogRef<InfoModal>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}