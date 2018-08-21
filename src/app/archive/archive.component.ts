import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year;
  month;
  constructor(private route: ActivatedRoute, private router: Router) { 
    route.paramMap.subscribe(route => {
      this.year = route.get('y'); 
      this.month = route.get('m');
    })
  }

  ngOnInit() {
  }

  navigate = () => {
    this.router.navigate(['/']);
  }

}
