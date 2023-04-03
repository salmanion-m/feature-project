import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Menu, SideNavToggle} from "../../models";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // asideSelfDisplay: true;
  // asideMenuStatic: true;
  // asideCSSClasses: string;
  // contentExtended: false;
  //

  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  ngOnInit(): void {
  }


  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      color: '#ffcc80',
      link: '/home',
    },
    {
      title: 'link',
      icon: 'link',
      color: '#ffcc80',
      link: '/dashbord/link',
    },
    {
      title: 'جداول',
      icon: 'bar_chart',
      color: '#ffcc80',
      subMenu: [
        {
          title: 'قیمت روزانه',
          icon: 'currency_exchange',
          color: '#ffcc80',
          link: '/day/daily-table',
        },
        {
          title: 'صندوق',
          icon: 'inventory_2',
          color: '#ffcc80',
          link: '/fund/fund-table',
        },
        {
          title: 'صنعت',
          icon: 'miscellaneous_services',
          color: '#ffcc80',
          link: '/industry/industry-table',
        },
        {
          title: 'نماد',
          icon: '',
          color: '#ff7f0e',
          link: '/instrument/inst-table',
        },
        {
          title: 'نوع نامه ',
          icon: 'mail',
          color: '#ffcc80',
          link: '/letter/letter-table',
        },
      ],
    },
  ];

  // @Input() collapsed = false;
  // @Input() screenWidth = 0;
  //
  // getBodyClass(): string {
  //   let styleClass= '';
  //   if(this.collapsed && this.screenWidth > 768){
  //     styleClass = 'body-trimmed';
  //   }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
  //     styleClass = 'body-md-screen'
  //   }
  //   return styleClass;
  // }


  isSideNaveCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data : SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNaveCollapsed = data.collapsed;

  }


}
