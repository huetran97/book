import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class DomainKnowledgeService {

  constructor() { }
  getListDomainKnowledge(){
    return new Promise(
      (resolve,reject)=>{
        try{
          axios({
            url: 'http://159.89.206.182:4001/graphql/cms',
            method: 'post',
            data: {
              query: `
              query{
                domainKnowledges(is_active:true){
                  total_domain_knowledge
                  list_domain_knowledge{
                    
                    id
                    name
                    language{
                      name
                      id
                    }
                  }
                }
              }
                `
            }
          }).then((result) => {
            return resolve(result.data.data.domainKnowledges.list_domain_knowledge);
          }).catch(reject);
        } catch(err){
          return reject(err);
        }
      }
 )
  }

  updateDomainKnowledge(domainKnowledges){
    return new Promise(
      (resolve,reject)=>{
        try{
          axios({
            url: 'http://159.89.206.182:4001/graphql/cms',
            method: 'post',
            data: {
              query: `
              mutation updateDomainKnowledge($id:String!,$name: String,$language:String){
                updateDomainKnowledge(id: $id,name:$name,language:$language){
                  id
                  name
                  language{
                    id
                    name
                  }
                }
              }
                `,
                variables: {
                  id:domainKnowledges.id,
                  name: domainKnowledges.name,
                  language:domainKnowledges.language
                }
            }
          }).then((result) => {
            return resolve(result.data.data.updateDomainKnowledge);
          }).catch(reject);
        } catch(err){
          return reject(err);
        }
      }
 )

  }



  removeDomainKnowledge(id){
    return new Promise(
      (resolve,reject)=>{
        try{
          axios({
            url: 'http://159.89.206.182:4001/graphql/cms',
            method: 'post',
            data: {
              query: `
              mutation removeDomainKnowledge($id:String!){
                removeDomainKnowledge(id:$id){
                  message
                }
              }
                
              
                `,
                variables: {
                  id:id
                 
                }
            }
          }).then((result) => {
            return resolve(result.data.data.removeDomainKnowledge.message);
          }).catch(reject);
        } catch(err){
          return reject(err);
        }
      }
 )
  }


addDomainKnowledge(domain){
  return new Promise(
    (resolve,reject)=>{
      try{
        axios({
          url: 'http://159.89.206.182:4001/graphql/cms',
          method: 'post',
          data: {
            query: `
            mutation addDomainKnowledge($name: String!,$language:String!){
              addDomainKnowledge(name:$name,language:$language){
                name
                id
                language{
                  id
                  name
                }
              }
            }
              `,
              variables: {
                name:domain.name,
                language:domain.language
               
              }
          }
        }).then((result) => {
          return resolve(result.data.data.addDomainKnowledge);
        }).catch(reject);
      } catch(err){
        return reject(err);
      }
    }
)
}
}


