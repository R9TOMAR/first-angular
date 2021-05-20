import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  getList(){
    let x= [{
      id:1,
      name:"xyz",
    },
    {
      id:2,
      name:"abc",
    }];
   // console.log('sdfdggds');
    return x;
  }
}
