import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { Observable, interval, Observer, Subscription } from 'rxjs';
 
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  /*
  private tempoObservableSubcription!: Subscription
  private meuObservableTesteSubscription!: Subscription */

  public oferta!: Oferta

   constructor(
      private route: ActivatedRoute, 
      private ofertasService: OfertasService
      ) { }

  ngOnInit(): void {

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta
        //console.log(this.oferta)
      })
      
    })


 

  /*
      this.route.params.subscribe((parametro: any) => {
         console.log(parametro),
         (erro: any) => console.log(erro),
         () => console.log('processamento foi classificado como')
      })
       */
 /*
      let tempo = interval(2000)

      this.tempoObservableSubcription  = tempo.subscribe((intervalo: number) => {
        console.log(intervalo)
      })
 

      //observable (observavel)
      let meuObservableTeste = new Observable((observer: Observer<number>) => {
        observer.next(1)
        observer.next(2)
        observer.next(3)
        observer.complete()
        observer.next(3)
      })

       //observable (observador)
      this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
        (resultado: number) => console.log(resultado + 10), //next
        (erro: string) => console.log(erro),                //erro
        ()  =>  console.log('stream de enventos foi finalizada') //finalizacao - complete
      ) */
  }

  ngOnDestroy() {
   /* this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubcription.unsubscribe() */
  }
 
}