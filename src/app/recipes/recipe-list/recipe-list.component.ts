import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('tarte au pomme', `c'est une tarte avec des pommes`, 'https://live.staticflickr.com/7304/8757984946_7e8603fce5.jpg')
  ];
  constructor() {
  }
  ngOnInit() {
  }
}
