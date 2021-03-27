import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NzFormModule } from 'ng-zorro-antd/form';
// import { NgZorroAntdModule } from '../../node_modules/ng-zorro-antd/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { DialogComponent } from './dialog/dialog.component';
import { SpicesComponent } from './spices/spices.component';
import { HandicraftComponent } from './handicraft/handicraft.component';
import { ClothComponent } from './cloth/cloth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewProductComponent } from './new-product/new-product.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SideNavComponent,
    HeaderComponent,
    LoginComponent,
    CartComponent,
    DialogComponent,
    SpicesComponent,
    HandicraftComponent,
    ClothComponent,
    NewProductComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    SlickCarouselModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    HttpClientModule,
    NzModalModule,
    NzFormModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
