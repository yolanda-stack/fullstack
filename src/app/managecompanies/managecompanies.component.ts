// import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Company} from '../company';
import {CompanyService} from '../company.service';

// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-managecompanies',
  templateUrl: './managecompanies.component.html',
  styleUrls: ['./managecompanies.component.css'],
  providers: [CompanyService]
})

export class ManagecompaniesComponent {
  contentTitle:string = '';
  companies$: Observable<Company[]>;
  total$: Observable<number>;
  selectedCompany:Company;
  _id:string;
  _companyname:string;
  _turnover:number;
  _ceo:string;
  _directors:string;
  _stockexchanges:string = 'Y';
  _sector:string;
  _brief:string;
  _stockcode:string;
  _companystatus:string = '1';

  _company:Company = {
    id:0,
    companyname:'',
    turnover:null,
    ceo:'',
    directors:'',
    stockexchanges:'',
    sector:'',
    brief:'',
    stockcode:'',
    companystatus:'1',
  };

   closeResult = '';

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    public service: CompanyService
    ) {
    this.companies$ = service.companies$;
    this.total$ = service.total$;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.reset();
    this.contentTitle = "Create New Company";
    this.modalService.open(content,{ size: 'lg',scrollable:true });
  }

  edit(id,content){
    this.getCompany(id);
    this.contentTitle = "Update Company";
    this.modalService.open(content,{ size: 'lg',scrollable:true });
  }

  onSubmit(companyForm){
    alert("数据提交:" + JSON.stringify(companyForm.value));
    if(this.contentTitle==="Create New Company"){
      this.service.addCompany(companyForm.value)
    }else{
      this.service.updateCompany(companyForm.value)
    }
    
    this.modalService.dismissAll();
  }

  reset(){
    this._company.id = 0
    this._company.companyname='';
    this._company.turnover = null;
    this._company.ceo ='';
    this._company.directors ='';
    this._company.stockexchanges ='Y';
    this._company.sector ='';
    this._company.brief ='';
    this._company.stockcode ='';
    this._company.companystatus ='1';
  }

  getCompany(id:any){
    this.service.getCompany(id).subscribe(company => this.selectedCompany = company);
    alert(JSON.stringify(this.selectedCompany));
    this.setCompany(this.selectedCompany);
  }

  setCompany(company:Company){
    this._company.id = company.id;
    this._company.companyname=company.companyname;
    this._company.turnover = company.turnover;
    this._company.ceo = company.ceo;
    this._company.directors = company.directors;
    this._company.stockexchanges = company.stockexchanges;
    this._company.sector = company.sector;
    this._company.brief = company.brief;
    this._company.stockcode = company.stockcode;
    this._company.companystatus = company.companystatus;
    alert(JSON.stringify(this._company))
  }

  
}

