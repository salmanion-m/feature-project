// export const navbarData = [
//   {
//     routeLink: '/dashbord/link',
//     icon: 'fa-solid fa-house',
//     // icon: 'fas fa-user',
//     // icon: 'fa-regular fa-user',
//     label: 'Dashboard',
//   },
//   {
//     routeLink: '/day/daily-table',
//     icon: 'fa fa-box-open',
//     label: 'Products'
//   },
//   {
//     routeLink: '/fund/fund-table',
//     icon: 'fa fa-chart-bar',
//     label: 'Statistics'
//   },
//   {
//     routeLink: '/industry/industry-table',
//     icon: 'fa fa-tags',
//     label: 'Coupens'
//   },
//   {
//     routeLink: '/instrument/inst-table',
//     icon: 'fa fa-file',
//     label: 'Pages'
//   },
//   {
//     routeLink: '/letter/letter-table',
//     icon: 'fa fa-camera',
//     label: 'Media'
//   },
//   {
//     routeLink: '',
//     icon: 'fa fa-cog',
//     label: 'Settings'
//   },
// ];
import {INavbarData} from "./i-navbar-data";

export const navbarData: INavbarData[] = [
  {
    routeLink: '/dashbord/link',
    // icon: 'fa-solid fa-house',
    // icon: 'fas fa-user',
    icon: 'fa-regular fa-user',
    label: 'Dashboard',
  },
  {
    routeLink: '/day/daily-table',
    icon: 'fa fa-list',
    label: 'Products',
  },
  {
    routeLink: '/fund/fund-table',
    icon: 'fa fa-chart-bar',
    label: 'Statistics'
  },
  {
    routeLink: '/industry/industry-table',
    icon: 'fa fa-tags',
    label: 'Coupens'
  },
  {
    routeLink: '/instrument/inst-table',
    icon: 'fa fa-file',
    label: 'Pages'
  },
  {
    routeLink: '/letter/letter-table',
    icon: 'fa fa-camera',
    label: 'Media'
  },
  {
    routeLink: '',
    icon: 'fa fa-cog',
    label: 'Settings'
  },
];
