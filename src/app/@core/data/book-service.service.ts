import { Injectable } from '@angular/core';
import axios from 'axios';
import { store } from '@angular/core/src/render3/instructions';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  getBook(store ){
    return new Promise(
      (resolve, reject) => {
        try {
         axios({
          url: 'http://159.89.206.182:4001/graphql/cms',
          method: 'post',
          data: {
           query: `
           query books($store:String){
            books(is_active:true,store: $store){
              total_book,
              list_book{
                id
                name
                book_code
                description
                author{
                  name
                  id
                }
                rate
                quantity_sold
                price
                publisher{
                  id
                  name
                }
                publication_date
                language{
                  id
                  name
                }
                domain_knowledge{
                  name
                  id
                }
                subjects{
                  list_subject{
                    name
                    id
                  }
                }
                size
                thumbnail
                issuing_company{
                  id
                  name
                }
                print_length
                cover_type
                amount
                total_sold
                book_store{
                  store{
                    id
                    name
                  }
                }
                
              }
            }
          }
                    `,
                    variables: {
                      store: store.id,
                    }
          }
         }).then((result) => {
          return resolve(result.data.data.books);
         }).catch(reject);
        } catch (err) {
         return reject(err);
        }
       }
    )
  }
}
