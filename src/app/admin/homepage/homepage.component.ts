import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private storageService : StorageService,
    private router : Router,
  ) { 
    if(this.storageService.get("employeeId")==null || Number(this.storageService.get("hierarchy"))!=0){
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {
  }

}
