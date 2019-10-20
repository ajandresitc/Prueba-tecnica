import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/home/clients',
    title: 'Clients',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-puzzle-10',
    class: ''
  },
  {
    path: '/home/dashboard',
    title: 'Dashboard',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/home/icons',
    title: 'Icons',
    rtlTitle: 'الرموز',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '/home/notifications',
    title: 'Notifications',
    rtlTitle: 'إخطارات',
    icon: 'icon-bell-55',
    class: ''
  },

  {
    path: '/home/user',
    title: 'User Profile',
    rtlTitle: 'ملف تعريفي للمستخدم',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/home/tables',
    title: 'Table List',
    rtlTitle: 'قائمة الجدول',
    icon: 'icon-puzzle-10',
    class: ''
  },
  {
    path: '/home/typography',
    title: 'Typography',
    rtlTitle: 'طباعة',
    icon: 'icon-align-center',
    class: ''
  },
  {
    path: '/home/rtl',
    title: 'RTL Support',
    rtlTitle: 'ار تي ال',
    icon: 'icon-world',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
