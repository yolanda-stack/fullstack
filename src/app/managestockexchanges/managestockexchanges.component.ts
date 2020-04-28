import { Component } from '@angular/core';
import { Stockexchange } from '../stockexchange';
import { ExchangeDetailService } from '../exchangedetail.service';
import { Observable } from 'rxjs';
import { NgbModalConfig, NgbModal,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-managestockexchanges',
  templateUrl: './managestockexchanges.component.html',
  styleUrls: ['./managestockexchanges.component.css']
})
export class ManagestockexchangesComponent {
  exchanges$: Observable<Stockexchange[]>;
  total$: Observable<number>;
  model: NgbDateStruct;
  selectedExchange:Stockexchange;
  exchange=<Stockexchange>{
    id:0,
    stockchange:'',
    brief:'',
    contactaddress:'',
    remarks:'',
  };

  constructor(
    public service:ExchangeDetailService,
    config: NgbModalConfig, 
    private modalService: NgbModal
    ) {
      this.exchanges$ = service.exchanges$;
      this.total$ = service.total$;
     }

  ngOnInit(): void {
  }
  open(content) {
    // this.getExchange(id);
    // this.setExchange(this.selectedExchange)
    this.reset();
    this.modalService.open(content,{ size: 'lg',scrollable:true });
  }

  getExchange(id:any){
    this.service.getExchange(id).subscribe(stockexchange => this.selectedExchange = stockexchange);
    alert(JSON.stringify(this.selectedExchange));
  }

  setExchange(stockexchange:Stockexchange){
    this.exchange.id = stockexchange.id;
    this.exchange.stockchange = stockexchange.stockchange;
    this.exchange.brief = stockexchange.brief;
    this.exchange.contactaddress = stockexchange.contactaddress;
    this.exchange.remarks = stockexchange.remarks;
  }

  onSubmit(exchangeForm){
    alert("数据提交:" + JSON.stringify(exchangeForm.value));
    this.service.addExchange(exchangeForm.value);
    this.modalService.dismissAll();
  }

  reset(){
    this.exchange.id = 0
    this.exchange.stockchange='';
    this.exchange.brief='';
    this.exchange.contactaddress='';
    this.exchange.remarks='';
  }
}