import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service';
import {List} from 'src/app/models/list.model';
@Component({
  selector: 'app-add-lists',
  templateUrl: './add-lists.component.html',
  styleUrls: ['./add-lists.component.css']
})
export class AddListsComponent implements OnInit {
  products: List[] =[];

  constructor(private listData:ListService) { }

  ngOnInit(): void {
   // console.warn(this.listData.getList());
    this.products = this.listData.getList();
  }

}
