import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from "@angular/core";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderItensComponent } from "./order-itens/order-itens.component";
import { OrderComponent } from "./order.component";
import { Routes } from '@angular/router';


const ROUTES: Routes = [
  { path: "", component: OrderComponent },

]
@NgModule({
  declarations: [OrderComponent, OrderItensComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {}
