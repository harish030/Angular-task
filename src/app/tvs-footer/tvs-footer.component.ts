import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvs-footer',
  templateUrl: './tvs-footer.component.html',
  styleUrls: ['./tvs-footer.component.scss']
})
export class TvsFooterComponent implements OnInit {

  constructor(private router:Router) { }
  feedBack(){
    this.router.navigateByUrl('/feedback');
  }
  ngOnInit(): void {
  }

}
