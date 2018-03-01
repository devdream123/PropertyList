import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';


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
    this.displayAllProperty();
    this.displaySavedProperty();
  }

 private displayAllProperty():void{
    this.propertyService.getProperty().subscribe(
      resp => {
        resp.results.forEach(property => {
          this.propertyList.push(property);
        });
          console.log("All property result:  " , this.propertyList);          
      },
      error => {
        console.log("error: " , error);
      }
    );
  }

  private displaySavedProperty():void{
    this.propertyService.getProperty().subscribe(
      resp => {
        resp.saved.forEach(savedProperty => {
          this.savedPropertyList.push(savedProperty);
        });
          console.log("Saved result:  " , this.savedPropertyList);          
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
        this.propertyService.addProperty(property);
      }
  }

  private removeProperty(property) { 
    let indexProperty;
    if(this.savedPropertyList.length !== 0){
      indexProperty = this.savedPropertyList.indexOf(property);
      this.savedPropertyList.splice(indexProperty);
      this.propertyService.removeProperty(property);
    }
   

}
}
