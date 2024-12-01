import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  constructor(private service: ServerService){}
  body:any ='';
  order:any='';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log("started");
    // this.service.getHello().subscribe(
    //   data=>{
    //     this.body=data;
    //   },error=>{
    //     console.error(error);
        
    //   }
    // )

    this.service.getCreateOrder().subscribe(
      data=>{
        this.order=data;
        console.log(data);
        
      },error=>{
        console.error(error);
      }
    )
    
   }
}
