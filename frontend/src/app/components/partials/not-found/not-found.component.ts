import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements   OnInit {
  @Input()
  visible = false;//ngIf in html
  @Input()
  notFoundMessage ="Nothing Found !";
  @Input()
  resetLinkText="Reset" ;
  @Input()
  resetLinkRoute = "/";
  constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

}
