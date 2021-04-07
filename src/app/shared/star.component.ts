import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  cropWidth = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
    console.log('width atual: ', this.cropWidth);
  }

  onClick(): void {
    this.ratingClicked.emit(`${this.rating} clicked!`);
  }
}
