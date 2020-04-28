import { Component, OnInit } from '@angular/core';
import { Ipo } from '../IPO';
import { IPO } from '../IPOdetail';
import { IpoDetailService } from "../ipodetail.service";
import { Observable } from 'rxjs';
import { NgbModalConfig, NgbModal,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIPOComponent implements OnInit {
  ipodetails$: Observable<Ipo[]>;
  total$: Observable<number>;
  model: NgbDateStruct;
  selectedIpodetail:Ipo;
  ipodetail=<Ipo>{
  };
  constructor(
    public service:IpoDetailService,
    config: NgbModalConfig, 
    private modalService: NgbModal
    ) {
      this.ipodetails$ = service.ipodetails$;
      this.total$ = service.total$;
     }

  ngOnInit(): void {
  }
  open(content,id) {
    this.getIpodetail(id);
    this.setIpodetail(this.selectedIpodetail)
    this.modalService.open(content,{ size: 'lg',scrollable:true });
  }

  getIpodetail(id:any){
    this.service.getIpodetail(id).subscribe(ipo => this.selectedIpodetail = ipo);
    alert(JSON.stringify(this.selectedIpodetail));
    //this.setCompany(this.selectedCompany);
  }

  setIpodetail(ipo:Ipo){
    this.ipodetail.id = ipo.id;
    this.ipodetail.companyname = ipo.companyname;
    this.ipodetail.stockexchanges = ipo.stockexchanges;
    this.ipodetail.price = ipo.price;
    this.ipodetail.total = ipo.total;
    this.ipodetail.opendate = ipo.opendate;
    this.ipodetail.remarks = ipo.remarks;
  }

  onSubmit(ipoForm){
    alert("数据提交:" + JSON.stringify(ipoForm.value));
    this.service.updateIpodetail(ipoForm.value);
    this.modalService.dismissAll();
  }

}
