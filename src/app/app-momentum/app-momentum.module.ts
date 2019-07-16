import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SideBarModule,
  SideBarBodyModule,
  SidebarNavModule,
  SidebarNavItemModule,
  SidebarHeaderModule,
  SidebarFooterModule,
  ButtonModule,
  IconModule,
  ListModule,
  ListItemModule,
  TopbarModule,

} from '@momentum-ui/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarModule,
    SideBarBodyModule,
    SidebarNavModule,
    SidebarNavItemModule,
    SidebarHeaderModule,
    SidebarFooterModule,
    ButtonModule,
    IconModule,
    ListModule,
    ListItemModule,
    TopbarModule,

  ],
  exports: [
    SideBarModule,
    SideBarBodyModule,
    SidebarNavModule,
    SidebarNavItemModule,
    SidebarHeaderModule,
    SidebarFooterModule,
    ButtonModule,
    IconModule,
    ListModule,
    ListItemModule,
    TopbarModule,

  ]
})
export class AppMomentumModule { }
