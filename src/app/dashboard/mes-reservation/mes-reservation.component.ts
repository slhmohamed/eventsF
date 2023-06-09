import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-mes-reservation',
  templateUrl: './mes-reservation.component.html',
  styleUrls: ['./mes-reservation.component.css']
})
export class MesReservationComponent {
  paymentHandler: any = null;
  eventT:any;
  reservations:any;
  searchBydateForm!:FormGroup;
  reservation?:any;
  totala:any=0;
  date:any;
  id:any
  p: number = 1;
  total:any=0;
  constructor( private eventsService:EventService,private reservatioService:ReservationService,private router: Router) {}
  ngOnInit() {
    this.invokeStripe();
    this.id=localStorage.getItem('id')
    
    this.date=Date.now()
    this.getAll()


const element1 = document.getElementById("header1");
element1.setAttribute("hidden","true");
const element2 = document.getElementById("ftco-footer");
element2.setAttribute("hidden","true");
}

makePayment(amount: any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51NMCEWHDx5bfiokZNuDPg3ByjbPBGVu6QHqEJMpZtFnrEoZjKMkZtl01uUhGCQ5z7UNNeZbBMyIYqwqyPhRnWuNV0028S4DcCJ',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: 'Positronx',
    description: '3 widgets',
    amount: amount * 100,
  });
}
getAll(){
  
this.reservatioService.getAllReservation().subscribe(res=>{
  this.reservations=res;
})
}
ngOnDestroy() {
const element1 = document.getElementById("header1");
element1.removeAttribute("hidden");
const element2 = document.getElementById("ftco-footer");
element2.removeAttribute("hidden");
}
 
 
  

invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_tespk_test_51NMCEWHDx5bfiokZNuDPg3ByjbPBGVu6QHqEJMpZtFnrEoZjKMkZtl01uUhGCQ5z7UNNeZbBMyIYqwqyPhRnWuNV0028S4DcCJt_51H7bbSE2RcKvfXD4DZhu',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };
    window.document.body.appendChild(script);
  }
}
 

 
 
}
