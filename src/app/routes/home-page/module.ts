/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { HomePageComponent } from './home-page.component';
    import { Routing } from "./router";
    import { CustomersCardComponent } from '../../components/customers-card/customers-card.component';
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ HomePageComponent, CustomersCardComponent ],
        imports: [ 
            CommonModule, 

            // Ajouter le router dans la tableau des imports
            Routing
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//