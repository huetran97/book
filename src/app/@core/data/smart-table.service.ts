import {
  Injectable
 } from '@angular/core';
 import axios from 'axios';
 import {
  reject
 } from 'q';
 @Injectable()
 export class SmartTableService {
  getListUser() {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
                  query{
                           users(is_active:true){
                             list_user{
                               id
                               name
                               user_name
                               email
                               phone_number
                               address
                             }
                           }
                         }
                    `
       }
      }).then((result) => {
       return resolve(result.data.data.users.list_user);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
 
 
  removeUser(id: string) {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
                mutation removeUser($id:String!){
                 removeUser(id:$id){
                   message
                 }
               }
                  `,
        variables: {
         id: id
        },
       }
      }).then((result) => {
       return resolve(result.data.data.removeUser.message);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
 
  updateUser(id, user) {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
             mutation updateUser($id:String!,$name:String,$email:String!,$phone_number:String, $address:String){
               updateUser(id:$id,name:$name,email:$email,phone_number:$phone_number,address:$address){
                 name
               }
             }
               `,
        variables: {
         id: id,
         name: user.name,
         email: user.email,
         phone_number: user.phone_number,
         address: user.address
        },
       }
      }).then((result) => {
       return resolve(result.data.data.updateUser);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
 
 
  addUser(user) {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
             mutation addUser($user_name: String!,$email: String!,$name: String,$phone_number: String!,$address: String){
               addUser(user_name:$user_name,name:$name,email:$email,phone_number:$phone_number,address:$address){
                 user_name
                 name
                 email
                 phone_number
                 address
               }
             }
               `,
        variables: {
         user_name: user.user_name,
         name: user.name,
         email: user.email,
         phone_number: user.phone_number,
         address: user.address
        },
       }
      }).then((result) => {
       return resolve(result.data.data.addUser);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
 
 }