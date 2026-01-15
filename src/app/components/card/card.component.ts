import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. මේක අලුතෙන් දැම්මා

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule], // 2. මෙතනට CommonModule එක දාන්න ඕනේ
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: any; 
}