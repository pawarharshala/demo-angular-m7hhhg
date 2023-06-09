import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
data : any = [];
  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
   this. dataFromService();
  }

  dataFromService(){
    this.userService.getData().subscribe(
      (res:any)=>{
        this.data = res;
        console.log(res);
      },
    )
  }
  
   onChangeData($event:any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
  
    this.data = this.data.map((d:any) => {
      if (d.id == id) {
        d.select = isChecked;
        return d;
      }
      return d;
    });
    console.log(this.data);
  }
  
  

}