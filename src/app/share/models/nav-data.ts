import {INavbarData} from "./i-navbar-data";

// export const navbarData: INavbarData[] = [
//   {
//     routeLink: '/dashbord/link',
//     icon: 'fa-solid fa-house',
//     // icon: 'fas fa-user',
//     // icon: 'fa-regular fa-user',
//     label: 'Dashboard',
//   },
//   {
//     routeLink: '/day/daily-table',
//     icon: 'fa fa-list',
//     label: 'Products',
//   },
//   //baraye list haye to dar to
//   {
//     routeLink: 'products',
//     icon: 'fa fa-box-open',
//     label: 'Products',
//     expanded: true,
//     items: [
//       {
//         routeLink: 'products/level1.1',
//         label: 'Level 1.1',
//         items: [
//           {
//             routeLink: 'products/level2.1',
//             label: 'Level 2.1',
//           },
//           {
//             routeLink: 'products/level2.2',
//             label: 'Level 2.2',
//             items: [
//               {
//                 routeLink: 'products/level3.1',
//                 label: 'Level 3.1'
//               },
//               {
//                 routeLink: 'products/level3.2',
//                 label: 'Level 3.2'
//               },
//               {
//                 routeLink: 'products/level1.1',
//                 label: 'Level 1.1',
//                 items: [
//                   {
//                     routeLink: 'products/level2.1',
//                     label: 'Level 2.1',
//                   },
//                   {
//                     routeLink: 'products/level2.2',
//                     label: 'Level 2.2',
//                     items: [
//                       {
//                         routeLink: 'products/level3.1',
//                         label: 'Level 3.1'
//                       },
//                       {
//                         routeLink: 'products/level3.2',
//                         label: 'Level 3.2'
//                       }
//                     ]
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//       {
//         routeLink: 'products/level1.2',
//         label: 'Level 1.2',
//       }
//     ]
//   },
//   {
//     routeLink: '/fund/fund-table',
//     icon: 'fa fa-chart-bar',
//     label: 'Statistics'
//   },
//   {
//     // routeLink: '/industry/industry-table',
//     routeLink: 'Coupens',
//     icon: 'fa fa-tags',
//     label: 'Coupens',
//     items: [
//       {
//         routeLink: 'Coupens/list' ,
//         label: 'list',
//       },
//       {
//         routeLink: 'Coupens/create' ,
//         label: 'create',
//       },
//     ]
//   },
//   {
//     routeLink: '/instrument/inst-table',
//     icon: 'fa fa-file',
//     label: 'Pages',
//     expanded: true,
//     items:[
//       {
//         routeLink: 'settin/1.1',
//         label: 'setin1.1'
//       },
//       {
//         routeLink: 'settin/1.2',
//         label: 'setin1.2'
//       },
//     ]
//   },
//   {
//     routeLink: '/letter/letter-table',
//     icon: 'fa fa-camera',
//     label: 'Media',
//     expanded: true,
//     items:[
//       {
//         routeLink: 'settin/1.1',
//         label: 'setin1.1'
//       },
//       {
//         routeLink: 'settin/1.2',
//         label: 'setin1.2'
//       },
//     ]
//   },
//   {
//     routeLink: '',
//     icon: 'fa fa-cog',
//     label: 'Settings',
//     expanded: true,
//     items:[
//       {
//         routeLink: 'settin/1.1',
//         label: 'setin1.1'
//       },
//       {
//         routeLink: 'settin/1.2',
//         label: 'setin1.2'
//       },
//     ]
//   },
//
// ];

export const navbarData: INavbarData[] = [
  {
    routeLink: '/dashbord/link',
    icon: 'fa-solid fa-house',
    // icon: 'fas fa-user',
    // icon: 'fa-regular fa-user',
    label: 'داشبورد',
  },
  {
    routeLink: '',
    icon: 'fa fa-list',
    label: 'جداول',
    items:[
      {
        routeLink: '/day/daily-table',
        label: 'قیمت روزانه',
      },
      {
        routeLink: '/fund/fund-table',
        label: 'صندوق',
      },
      {
        routeLink: '/industry/industry-table',
        label: 'صنعت',
      },
      {
        routeLink: '/instrument/inst-table',
        label: 'نماد',
      },
      {
        routeLink: '/letter/letter-table',
        label: 'نوع نامه',
      },
    ]
  },
  // {
  //   routeLink: '-',
  //   icon: 'fa fa-chart-bar',
  //   label: 'Statistics'
  // },
  // {
  //   routeLink: '-',
  //   routeLink: 'Coupens',
  //   icon: 'fa fa-tags',
  //   label: 'Coupens',
  //   items: [
  //     {
  //       routeLink: 'Coupens/list' ,
  //       label: 'list',
  //     },
  //     {
  //       routeLink: 'Coupens/create' ,
  //       label: 'create',
  //     },
  //   ]
  // },
  // {
  //   routeLink: '-',
  //   icon: 'fa fa-file',
  //   label: 'Pages',
  //   expanded: true,
  //   items:[
  //     {
  //       routeLink: 'settin/1.1',
  //       label: 'setin1.1'
  //     },
  //     {
  //       routeLink: 'settin/1.2',
  //       label: 'setin1.2'
  //     },
  //   ]
  // },
  // {
  //   routeLink: '-',
  //   icon: 'fa fa-camera',
  //   label: 'Media',
  //   expanded: true,
  //   items:[
  //     {
  //       routeLink: 'settin/1.1',
  //       label: 'setin1.1'
  //     },
  //     {
  //       routeLink: 'settin/1.2',
  //       label: 'setin1.2'
  //     },
  //   ]
  // },
  // {
  //   routeLink: '',
  //   icon: 'fa fa-cog',
  //   label: 'Settings',
  //   expanded: true,
  //   items:[
  //     {
  //       routeLink: 'settin/1.1',
  //       label: 'setin1.1'
  //     },
  //     {
  //       routeLink: 'settin/1.2',
  //       label: 'setin1.2'
  //     },
  //   ]
  // },
  //baraye list haye to dar to
  // {
  //   routeLink: 'products',
  //   icon: 'fa fa-box-open',
  //   label: 'Products',
  //   expanded: true,
  //   items: [
  //     {
  //       routeLink: 'products/level1.1',
  //       label: 'Level 1.1',
  //       items: [
  //         {
  //           routeLink: 'products/level2.1',
  //           label: 'Level 2.1',
  //         },
  //         {
  //           routeLink: 'products/level2.2',
  //           label: 'Level 2.2',
  //           items: [
  //             {
  //               routeLink: 'products/level3.1',
  //               label: 'Level 3.1'
  //             },
  //             {
  //               routeLink: 'products/level3.2',
  //               label: 'Level 3.2'
  //             },
  //             {
  //               routeLink: 'products/level1.1',
  //               label: 'Level 1.1',
  //               items: [
  //                 {
  //                   routeLink: 'products/level2.1',
  //                   label: 'Level 2.1',
  //                 },
  //                 {
  //                   routeLink: 'products/level2.2',
  //                   label: 'Level 2.2',
  //                   items: [
  //                     {
  //                       routeLink: 'products/level3.1',
  //                       label: 'Level 3.1'
  //                     },
  //                     {
  //                       routeLink: 'products/level3.2',
  //                       label: 'Level 3.2'
  //                     }
  //                   ]
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       routeLink: 'products/level1.2',
  //       label: 'Level 1.2',
  //     }
  //   ]
  // },

];
