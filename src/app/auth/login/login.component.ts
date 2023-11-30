import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsbarComponent } from '../../shared/toolsbar/toolsbar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
