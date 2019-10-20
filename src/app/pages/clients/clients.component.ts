import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/service/clients.service';
import { Client, RootObject } from 'src/app/service/models/Imodels';
import * as _ from 'lodash';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  rootResponse: RootObject;

  Clients = [];
  page = 1;
  elements = 10;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clientsService.getClients(this.page, this.elements).subscribe(response => {
      this.rootResponse = response;
      this.Clients = response.clients;
    },
      error => {
        console.log(error);
      }
    );
  }

  addItems(clients) {
    this.Clients = _.union(this.Clients, clients );
  }

  appendItems() {
    this.clientsService.getClients(this.page, this.elements).subscribe(response => {
      this.addItems(response.clients);
    });
  }

  onScrollDown(ev) {
    const start = this.page;
    this.page ++;
    this.appendItems();
    this.direction = 'down';
  }

}
