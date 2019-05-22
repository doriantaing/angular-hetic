import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/user.model";
import { CustomersService } from '../../services/customers/customers.service'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {

  public customersCollection: Array<any>
  public customersCollectionRaw: Array<any>
  public categoriesCollectionSlug: Array<String>
  public categoriesCollection: Array<any>
  public activeCategory: string

  constructor( private CustomersService: CustomersService) { 
    this.categoriesCollectionSlug = []
    this.categoriesCollection = []
    this.activeCategory = 'all'
  }

  private getCustomersList = () => {
    this.CustomersService.fetchAllItems()
    .then( apiRes => {
      this.getCustomersCategories(apiRes.data)
      this.customersCollection = apiRes.data;
      this.customersCollectionRaw = apiRes.data;
    })
    .catch( apiResponse => console.error(apiResponse) )
  }

  private getCustomersCategories = (data: any) => {
    data.map((item: any) => {
      item.category.isActive = false
      if(this.categoriesCollectionSlug.indexOf(item.category.slug) === -1){
        this.categoriesCollectionSlug.push(item.category.slug) 
        this.categoriesCollection.push(item.category) 
      }
    })
  }

  public sortCustomers = (item: any) => {

    this.activeCategory = item.slug

    let tempArray = [];
    
    item.isActive = true;

    this.customersCollectionRaw.map( el => {
      if( el.category.slug === item.slug ){
        tempArray.push(el)
      }
    })

    this.customersCollection = tempArray;    
  }

  ngOnInit() {
    this.getCustomersList();
  }

}
