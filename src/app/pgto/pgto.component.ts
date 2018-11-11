import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pgto',
  templateUrl: './pgto.component.html',
  styleUrls: ['./pgto.component.css']
})
export class PgtoComponent implements OnInit {

  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
