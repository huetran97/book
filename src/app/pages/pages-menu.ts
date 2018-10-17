import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "QUẢN TRỊ",
    group:true
  },
  {
    title: 'Quản lý con người ',
    icon: 'nb-person',
    link: '/pages/human-manage',
    children:[
      {
        title: 'Quản lý khách hàng',
        link: '/pages/human-manage/user-manage',
        
      },
      {
        title:'Quản lý nhân sự',
        link: '/pages/human-manage/staff-manage',
      },
    ]
  },
  // {
  //   title: 'E-commerce',
  //   icon: 'nb-e-commerce',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'nb-home',
  //   link: '/pages/iot-dashboard',
  // },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Quản lý sản phẩm',
    icon: 'nb-keypad',
    link: '/pages/product-manage',
    children: [
      {
        title: 'Quản lý danh mục',
        link: '/pages/product-manage/domain-knowledge',
      },
      {
        title: 'Quản lý sách',
        link: '/pages/product-manage/book-manage',
      },
      
    ],
  },
  // {
  //   title: 'Forms',
  //   icon: 'nb-compose',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //   ],
  // },
  // {
  //   title: 'Components',
  //   icon: 'nb-gear',
  //   children: [
  //     {
  //       title: 'Tree',
  //       link: '/pages/components/tree',
  //     }, {
  //       title: 'Notifications',
  //       link: '/pages/components/notifications',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'nb-shuffle',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
  
];
