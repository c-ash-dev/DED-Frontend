import { Component, OnInit, Input } from '@angular/core';
import { Set } from 'src/app/models/set';

@Component({
  selector: 'app-createset',
  templateUrl: './createset.component.html',
  styleUrls: ['./createset.component.scss']
})
export class CreatesetComponent implements OnInit {
  // Array of sets (will eventually get passed in from Exercise)
  @Input() sets: Array<Set>;

  // Current new set being created by user
  public set: Set;

  public setTypes: Array<any>;
  public setUnits: Array<any>;

  constructor() {
    this.set = new Set();
    this.setTypes = this.set.getTypeDropdownItems();
    this.setUnits = this.set.getUnitsDropdownItems();
  }

  public receiveSelectedType($event: string) {
    this.set.type = $event;
  }

  public receiveSelectedUnits($event: string) {
    this.set.units = $event;
  }

  public addSet() {
    const newSet = new Set(this.set);
    this.sets.push(newSet);
  }

  public removeSet(index: number) {
    this.sets.splice(index, 1);
  }

  ngOnInit() {
  }

}
