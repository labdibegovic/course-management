import { Component, OnInit,Input} from '@angular/core';
import {cardItemModel} from '../core/card-item.model';



@Component({
  selector: 'cm-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() cardItem: cardItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
