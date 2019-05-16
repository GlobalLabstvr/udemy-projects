import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  h2{
    color: blue;
  }`
]
})
export class AppComponent implements OnInit{
  
  //name = 'glabs';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver','TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }
   ngOnInit() {

   }
  
onCreateServer() {
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server was Created! Name is '+this.serverName;
}

onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}
  }