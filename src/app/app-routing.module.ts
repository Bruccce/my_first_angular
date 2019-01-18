import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
    import { WelcomeComponent } from './components/home/welcome/welcome.component';
    import { SettingComponent } from './components/home/setting/setting.component';
import { ProductsComponent } from './components/products/products.component';
    import { PcateComponent } from './components/products/pcate/pcate.component';
    import { PlistComponent } from './components/products/plist/plist.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductscontentComponent } from './components/productscontent/productscontent.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,
    children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'setting',component:SettingComponent},
      {path:'**',redirectTo:'welcome'},
    ]
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'newscontent/:aid',component:NewscontentComponent
  },
  {
    path:'products',component:ProductsComponent,
    children:[
      {path:'pcate',component:PcateComponent},
      {path:'plist',component:PlistComponent},
      {path:'**',redirectTo:'pcate'},

    ]
  },
  {
    path:'productscontent/:pid',component:ProductscontentComponent
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
