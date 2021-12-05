import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

export interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() person: Person = { name: '', age: 0 };
  @Input() data: string[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  refresh() {
    this.cd.detectChanges();
  }

}
