import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
    new Goal(1,'Watch Prison break','watch four episodes', new Date(2020,3,14) ),
    new Goal(2,'Water the cows','carry water to the cow place', new Date(2019,6,9) ),
    new Goal(3,'Read a novel','Read euphoria', new Date(2022,1,12) ),
    new Goal(4,'Visit my grandma','Go to my grandmothers place', new Date(2019,0,18) ),
    new Goal(5,'play football','go to the soccer field', new Date(2019,2,14) ),
    new Goal(6,'cook','cook meat', new Date(2030,3,14) ),
  ]

  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription
  }

  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

  deleteGoal(isComplete: any, index: any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
