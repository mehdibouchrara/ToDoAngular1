import { Component, OnInit ,TemplateRef} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  todo = "ToDo List";
  isPrimary="false";

  Listtodos = [{
    id:1,
    Description: "Description to do 1",
    Datetodo: new Date(2019, 0, 12)
  }, 
  {
    id:2,
    Description: "Description to do 2",
    Datetodo: new Date(2019, 0, 10)
  }, {
    id:3,
    Description: "Description to do 3",
    Datetodo: new Date(2019, 0, 17)
  }]

  todos = [{
    id:1,
    Description: "Description to do 1",
    Datetodo: new Date(2019, 0, 12)
  }, 
  {
    id:2,
    Description: "Description to do 2",
    Datetodo: new Date(2019, 0, 10)
  }, {
    id:3,
    Description: "Description to do 3",
    Datetodo: new Date(2019, 0, 17)
  }]
  
  i : number;
  j:number;
  constructor(private toastr: ToastrService, private modalService: BsModalService) { }
  delete() {
    this.Listtodos.splice(this.i, 1)
    this.modalRef.hide()
  }
  delete1() {
    this.todos.splice(this.j, 1)
    this.modalRef.hide()
  }
  
  openModal(template: TemplateRef<any>,i: number) {
    this.i = i;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  openModal1(template1: TemplateRef<any>,j: number) {
    this.j = j;
    this.modalRef = this.modalService.show(template1, {class: 'modal-sm'});
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  add(tod) {
    let i = this.Listtodos.indexOf(tod)
    this.Listtodos.splice(i,1)
    this.todos.push(tod)

  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  ngOnInit() {
  }

}
