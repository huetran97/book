import { Injectable } from '@angular/core';
import axios from 'axios';
import { resolve, reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }
  getListStaff(){
    return new Promise(
         (resolve,reject)=>{
           try{
             axios({
               url: 'http://159.89.206.182:4001/graphql/cms',
               method: 'post',
               data: {
                 query: `
                 query{
                  staffs(is_active:true){
                  list_staff{
                  id
                  user_name
                  email
                  date_of_birth
                  sex
                  id_card_number
                  id_card_number_date
                  id_card_number_location
                  tax_number
                  insurrance_number
                  start_work_date
                  end_work_date
                  name
                  phone_number
                  address
                  last_login
                  store{
                    id
                    name
                  }
                  role
                }
                  }
                }
                   `
               }
             }).then((result) => {
               return resolve(result.data.data.staffs.list_staff);
             }).catch(reject);
           } catch(err){
             return reject(err);
           }
         }
    )
  }

editStaff(Staff){
  return new Promise(
       (resolve,reject)=>{
         try{
           axios({
             url: 'http://159.89.206.182:4001/graphql/cms',
             method: 'post',
             data: {
               query: `
               mutation updateStaff(
                $name:String,
                $id: String!,
                $user_name:String,
                $email:String,
                $date_of_birth:Float,
                $sex:SEX,
                $id_card_number:String,
                $id_card_number_date:Float,
                $id_card_number_location:String,
                $tax_number:String,
                $insurrance_number:String,
                $store:String,
                $role:String,
                $address:String,
                $start_work_date:Float,
                $end_work_date:Float,
                $phone_number: String
              ){
                updateStaff(
                  phone_number: $phone_number,
                  name:$name,
                  user_name:$user_name,
                  id:$id,
                  email:$email,
                  date_of_birth:$date_of_birth,
                  sex:$sex,
                  id_card_number:$id_card_number,
                  id_card_number_date:$id_card_number_date,
                  id_card_number_location:$id_card_number_location,
                  tax_number:$tax_number,
                  insurrance_number:$insurrance_number,
                  store:$store,
                  role:$role,
                  address:$address,
                  start_work_date:$start_work_date,
                  end_work_date:$end_work_date,
                  ){
                    phone_number
                  name
                  user_name
                  id
                  email
                  date_of_birth
                  sex
                  id_card_number
                  id_card_number_date
                  id_card_number_location
                  tax_number
                  insurrance_number
                  store{
                    id
                    name
                  }
                  role
                  address
                  start_work_date
                  end_work_date

                  
                }
              }
                 `,
                 variables: {
                  name:Staff.name,
                  id: Staff.id,
                  user_name:Staff.user_name,
                  email:Staff.email,
                  date_of_birth:Staff.date_of_birth,
                  sex:Staff.sex,
                  id_card_number:Staff.id_card_number,
                  id_card_number_date:Staff.id_card_number_date,
                  id_card_number_location:Staff.id_card_number_location,
                  tax_number:Staff.tax_number,
                  insurrance_number:Staff.insurrance_number,
                  store:Staff.store.id,
                  role:Staff.role,
                  address:Staff.address,
                  start_work_date: Staff.start_work_date,
                  end_work_date:Staff.end_work_date,
                  phone_number: Staff.phone_number

                },
             }
           }).then((result) => {
             return resolve(result.data.data.updateStaff);
           }).catch(reject);
         } catch(err){
           return reject(err);
         }
       }
  )
}
addStaff(Staff){
  return new Promise(
       (resolve,reject)=>{
         try{
           axios({
             url: 'http://159.89.206.182:4001/graphql/cms',
             method: 'post',
             data: {
               query: `
               mutation addStaff(
                $name:String!,
                $user_name:String!,
                $email:String!,
                $date_of_birth:Float,
                $sex:SEX,
                $id_card_number:String,
                $id_card_number_date:Float,
                $id_card_number_location:String,
                $tax_number:String,
                $insurrance_number:String,
                $store:String!,
                $role:String!,
                $address:String,
                $start_work_date:Float!,
                $end_work_date:Float,
                $phone_number: String!
              ){
                addStaff(
                  phone_number: $phone_number,
                  name:$name,
                  user_name:$user_name,
                  email:$email,
                  date_of_birth:$date_of_birth,
                  sex:$sex,
                  id_card_number:$id_card_number,
                  id_card_number_date:$id_card_number_date,
                  id_card_number_location:$id_card_number_location,
                  tax_number:$tax_number,
                  insurrance_number:$insurrance_number,
                  store:$store,
                  role:$role,
                  address:$address,
                  start_work_date:$start_work_date,
                  end_work_date:$end_work_date,
                  ){
                  phone_number
                  name
                  user_name
                  id
                  email
                  date_of_birth
                  sex
                  id_card_number
                  id_card_number_date
                  id_card_number_location
                  tax_number
                  insurrance_number
                  store{
                    id
                    name
                  }
                  role
                  address
                  start_work_date
                  end_work_date

                  
                }
              }
                 `,
                 variables: {
                  name:Staff.name,
                  user_name:Staff.user_name,
                  email:Staff.email,
                  date_of_birth:Staff.date_of_birth,
                  sex:Staff.sex,
                  id_card_number:Staff.id_card_number,
                  id_card_number_date:Staff.id_card_number_date,
                  id_card_number_location:Staff.id_card_number_location,
                  tax_number:Staff.tax_number,
                  insurrance_number:Staff.insurrance_number,
                  store:Staff.store.id,
                  role:Staff.role,
                  address:Staff.address,
                  start_work_date: Staff.start_work_date,
                  end_work_date:Staff.end_work_date,
                  phone_number: Staff.phone_number

                },
             }
           }).then((result) => {
             return resolve(result.data.data.addStaff);
           }).catch(reject);
         } catch(err){
           return reject(err);
         }
       }
  )
}
removeUser(id:string){
  return new Promise(
       (resolve,reject)=>{
         try{
           axios({
             url: 'http://159.89.206.182:4001/graphql/cms',
             method: 'post',
             data: {
               query: `
               mutation removeStaff($id:String!){
                removeStaff(id:$id){
                  message
                }
              }
                 `,
                 variables: {
                  id: id
                },
             }
           }).then((result) => {
             return resolve(result.data.data.removeStaff.message);
           }).catch(reject);
         } catch(err){
           return reject(err);
         }
       }
  )
}
}
