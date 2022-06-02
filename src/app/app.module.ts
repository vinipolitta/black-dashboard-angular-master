import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { MessagesComponent } from './shared/messages/messages.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './pages/restaurant-detail/menu/menu.component';
import { ShoppingCardComponent } from './pages/restaurant-detail/shopping-card/shopping-card.component';
import { MenuItemComponent } from './pages/restaurant-detail/shopping-card/menu-item/menu-item.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        // positionClass: 'toast-bottom-left',
        preventDuplicates: true,
        progressBar: true,
      }
    )
  ],
  exports: [],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, RestaurantDetailComponent, MenuComponent, ShoppingCardComponent, MenuItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
