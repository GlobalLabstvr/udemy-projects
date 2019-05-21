import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice';
userName = ' ';
showSecret = false;
log = [];
  ngOnInit(){

  }
  
onToggleDetails()
{
  this.showSecret = !this.showSecret;
this.log.push(new Date());
}
  
  
}
