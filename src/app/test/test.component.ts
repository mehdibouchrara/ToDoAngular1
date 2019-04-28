import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  courses = [{
    title: "Angular",
    student: 3450,
    rating: 4.5865,
    price: 190.584,
    releaseDate: new Date(2019, 0, 1)
  }, {
    title: "Spring",
    student: 355,
    rating: 2.4,
    price: 100.54,
    releaseDate: new Date(2019, 0, 12)
  }, {
    title: "Php",
    student: 322,
    rating: 3.2,
    price: 200.5,
    releaseDate: new Date(2019, 0, 14)
  }]
  i = 0;
  constructor(private toastr: ToastrService, private modalService: BsModalService) { }

  delete() {
    this.courses.splice(this.i, 1)
    this.modalRef.hide()
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  openModal(template: TemplateRef<any>, i: number) {
    this.i = i;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  ngOnInit() {
  }

}
