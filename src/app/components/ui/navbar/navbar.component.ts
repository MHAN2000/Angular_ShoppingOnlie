import { Component, OnInit } from '@angular/core';
import { IMenuItem } from './types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  catalogs: IMenuItem[] | undefined;
  userOptions: IMenuItem [] | undefined;

  ngOnInit(): void {
    this.catalogs = [
      {
        label: 'Catalogs',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-user',
            routerLink: ['/users']
          },
          {
            label: 'Products',
            icon: 'pi pi-shopping-cart',
            routerLink: ['/products']
          },
          {
            label: 'Tickets',
            icon: 'pi pi-ticket',
            routerLink: ['/']
          },
        ]
      }
    ]
    this.userOptions = [
      {
        label: "User",
        items: [
          {
            label: 'Options',
            icon: 'pi pi-bars',
            routerLink: ['/']
          },
          {
            label: 'Log out',
            icon: 'pi pi-times',
            routerLink: ['/']
          }
        ]
      }
    ]
  }
}
