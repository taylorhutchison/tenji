import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bit',
  templateUrl: './bit.component.html',
  styleUrls: ['./bit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitComponent implements OnInit {

  @Input()
  on = false;

  constructor() { }

  ngOnInit(): void {
  }

}
