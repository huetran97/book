import {
  Injectable
 } from '@angular/core';
 import axios from 'axios';
 @Injectable({
  providedIn: 'root'
 })
 export class SubjectManageService {
 
  constructor() {}
  getSubject() {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
               query{
                 subjects(is_active:true){
                   list_subject{
                     id
                     name
                     domain_knowledge{
                       id
                       name
                       language{
                         name
                       }
                     }
                   }
                 }
               }
                 `
       }
      }).then((result) => {
       return resolve(result.data.data.subjects.list_subject);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
  getSubjectbyDomain(domain) {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
               query subjects($domain:String){
                 subjects(is_active:true,domain_knowledge:$domain){
                   list_subject{
                     id
                     name
                     domain_knowledge{
                       id
                       name
                       language{
                         name
                       }
                     }
                   }
                 }
               }
                 `,
        variables: {
         domain: domain
        }
       }
      }).then((result) => {
       return resolve(result.data.data.subjects.list_subject);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
  deleteSubject(id) {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
               mutation removeSubject($id:String!){
                 removeSubject(id:$id){
                   message
                 }
               }
                 `,
        variables: {
         id: id
        }
       }
      }).then((result) => {
       return resolve(result.data.data.removeSubject.message);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
 
  updateSubject(subject) {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
               mutation updateSubject($id: String!, $name:String, $domain_knowledge:String ){
                 updateSubject(id:$id,name:$name,domain_knowledge:$domain_knowledge){
                   id
                   name
                   domain_knowledge{
                     language{
                       name
                       id
                     }
                     name
                     id
                   }
                 
                 }
               }
                 `,
        variables: {
         id: subject.id,
         name: subject.name,
         domain_knowledge: subject.domain_knowledge
        }
       }
      }).then((result) => {
       return resolve(result.data.data.updateSubject);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
  addSubject(subject) {
   return new Promise(
    (resolve, reject) => {
     try {
      axios({
       url: 'http://159.89.206.182:4001/graphql/cms',
       method: 'post',
       data: {
        query: `
               mutation addSubject($name:String!, $domain_knowledge: String!){
                 addSubject(name:$name, domain_knowledge:$domain_knowledge){
                   id
                   name
                   domain_knowledge{
                     id
                     name
                   }
                 }
               }
                 `,
        variables: {
         name: subject.name,
         domain_knowledge: subject.domain_knowledge
        }
       }
      }).then((result) => {
       return resolve(result.data.data.addSubject);
      }).catch(reject);
     } catch (err) {
      return reject(err);
     }
    }
   )
  }
 }