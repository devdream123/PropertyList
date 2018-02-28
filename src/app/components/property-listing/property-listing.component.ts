import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PropertyService } from '../../services/property.service';
import { Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss']
})
export class PropertyListingComponent implements OnInit {
  public propertyList = [];
  public savedPropertyList = [];
  constructor(public propertyService:PropertyService) { }

  ngOnInit() {
    this.displayProperty();
  }

 private displayProperty():void{
    this.propertyService.getProperty().subscribe(
      resp => {
        resp.results.forEach(property => {
          this.propertyList.push(property);
        });
          console.log("test result:  " , this.propertyList);          
      },
      error => {
        console.log("error: " , error);
      }
    );
  }


  private addProperty(property) { 
      let indexProperty;
      indexProperty = this.savedPropertyList.indexOf(property);  
      if(indexProperty === -1){
        this.savedPropertyList.push(property);
      }
      console.log("savedPropertyList: " , this.savedPropertyList);

  }

  private removeProperty(property) { 
    let indexProperty;
    if(this.savedPropertyList.length !== 0){
      indexProperty = this.savedPropertyList.indexOf(property);
      this.savedPropertyList.splice(indexProperty);
      console.log("savedPropertyList-remove: " , this.savedPropertyList);
    }
   

}
}
