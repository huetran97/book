import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../../@core/data/book-service.service';
import { LocalDataSource } from 'ng2-smart-table';
import { StoreService } from '../../../@core/data/store.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'ngx-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent implements OnInit {
name_store : String = '';
current_store:String = "XMH BookStore";
data;
list_store;
source: LocalDataSource = new LocalDataSource();

  constructor(
    private book_service: BookServiceService,
    private store_service: StoreService
  ) { }
  async  onChangeTabs(current_store){
this.current_store = current_store.tabTitle;
console.log(this.current_store);
console.log(this.list_store.find(
  (element)=>{
    if(element.name === this.current_store)
    return element;
  }
));
const data = await this.book_service.getBook(this.current_store);
this.data = data;
// this.data.storex = this.data.store.name
this.source.load(this.data.list_book);

  }
async  ngOnInit() {
  this.list_store = await this.store_service.getStore();
  this.current_store = this.list_store.find(
    (element)=>{
      if(element.name === this.current_store)
      return element;
    }
  );


  // console.log(this.list_store);
 


  
  const data = await this.book_service.getBook(this.current_store);
  this.data = data;
  // this.data.storex = this.data.store.name
  this.source.load(this.data.list_book);
  }
  settings = {
      
    attr: {
      id: `style-view`
    },
    actions: {
      add: false,
      edit: false,
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      custom: [
        {
          name: 'view',
          title: '<i class="nb-sunny"></i>',
        },
        {
          name: 'edit',
          title: '<i class="nb-edit"></i> ',
          }
      ],
    }, 
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {      
      name: {
        title: 'Tên sách',
        type: 'string',
      },
      // thumbnail:{
      //   title: 'Ảnh',
      //   type: 'html',
      //   valuePrepareFunction: (picture) => { return `<img src=${picture} width="20px" height="20px"  />` }
      // },
      book_code:{
        title:'Mã Sách',
        type: 'String'
      },
      author:{
        title:'Tác Giả',
        type:'String',
        valuePrepareFunction: (value) => { return value.name }

      },
      quantity_sole:{
        title:'Số lượng bán',
        type: 'Number'
      },
      price:{
        title: 'Giá',
        type: 'Number'
      },
      publisher:{
        title: 'Nhà Xuất Bản',
        type: 'String',
        valuePrepareFunction: (value) => { return value.name }

      },
      
      // issuing_company:{
      //   title:'Nhà Phat Hành',
      //   type:'String',
      //   valuePrepareFunction: (value) => { return value.name }

      // },
      print_length:{
        title: 'Số Trang',
        type:'String',
      },
      cover_type:{
         title:'Bìa sách',
         type: 'String'
      },
      // total_sold:{
      //   title: 'Tổng bán',
      //   type :'Number'
      // },

      // store:{
      //   title:'Store',
      //   type:'String',
      //   valuePrepareFunction: (store) => { return store.name },
      //   filter: true,
      // }
   },
  };

}
