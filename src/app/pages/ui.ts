import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ui.html',
  styleUrls: ['./ui.scss']
})
export class Ui {

}
