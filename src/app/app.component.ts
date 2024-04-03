import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  activeActions : number;
  inactiveActions: number;

  constructor(private counterService : CounterService) {

  }
  ngOnInit(): void {
    this.counterService.activeActionEmitter.subscribe((activeActions : number)=> {
      this.activeActions=activeActions;
    })
    this.counterService.inactiveActionEmitter.subscribe((inactiveActions : number)=> {
      this.inactiveActions=inactiveActions;
    })
  }

}
