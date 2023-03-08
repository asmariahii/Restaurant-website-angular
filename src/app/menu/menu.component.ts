import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodServices:FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodServices.getAll();
  }

}
