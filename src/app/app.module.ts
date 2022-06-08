import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      // positionClass: 'toast-bottom-left',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
  exports: [],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
