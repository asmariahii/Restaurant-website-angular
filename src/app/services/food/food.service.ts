import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {
        id:1,
        name:'Couscous',
        price : 40,
        cookTime:'30-40',
      
        imageURL: '/assets/images/foods/food1.jpg'
        },
      {
        id:2,
        name:'Ojja (Shakshuka)',
        price : 15,
        cookTime:'10-20',
        
        imageURL: '/assets/images/foods/food2.jpg'

      },
      {id:3,
        name:'Brik',
        price : 10,
        cookTime:'05-10',
        
        imageURL: '/assets/images/foods/food3.jpg'

      },
      {
        id:4,
        name:'Chorba (Shorba)',
        price : 8,
        cookTime:'10-20',
        
        imageURL: '/assets/images/foods/food4.jpg'
      },
      {
        id:5,
        name:'Lablebi',
        price : 5,
        cookTime:'20-25',
        
        imageURL: '/assets/images/foods/food5.jpg'
      },
    ]
  }
}
