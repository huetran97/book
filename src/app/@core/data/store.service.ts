import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  getStore(){
    return new Promise(
      (resolve, reject) => {
        try {
         axios({
          url: 'http://159.89.206.182:4001/graphql/cms',
          method: 'post',
          data: {
           query: `
           query{
            stores{
              list_store{
                id
                name
              }
              
            }
          }
                    `
          }
         }).then((result) => {
          return resolve(result.data.data.stores.list_store);
         }).catch(reject);
        } catch (err) {
         return reject(err);
        }
       }
    )
  }
}
