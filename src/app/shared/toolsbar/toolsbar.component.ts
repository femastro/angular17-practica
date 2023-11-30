import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolsbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolsbar.component.html',
  styleUrl: './toolsbar.component.scss'
})
export class ToolsbarComponent {

  public user  = true;

  

  logOut(){
    this.user = false;
  }


}
