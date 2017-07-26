import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;
  serverCreationStatus = 'No Server is created';
  serverName = '';
  sampleName = '';
  isDisabled = true;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  	constructor() { 
  		setTimeout(() => {
  			this.allowNewServer = true;
  		}, 2000);
  	}

  	ngOnInit() {
  	}

    onCreateServer() {
      this.serverCreated = true;
      this.serverCreationStatus = 'Server Crearted';
    }

    setButton() {
      this.isDisabled = false;  
    }
    
    onClearClicked() {
      this.sampleName = '';
    }

}
