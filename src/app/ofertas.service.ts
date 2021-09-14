import { Observable } from 'rxjs';
import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { URL_API } from './app.api'
import { map, retry } from 'rxjs/operators'

@Injectable()
export class OfertasService {

    // private url_api  =  'http://localhost:3000/ofertas'

    constructor(private http: HttpClient) { }


    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0]
            })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao
            })
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao
            })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(retry(10))
            .pipe(map(resposta => resposta))
        }
  














   /* public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, reject) => {
            //algum tipo de processamento, que ao finalizar, chama a funcao resolve ou a funcao reject
            //console.log('sera que passou por aqui?')
            let deuCerto = true
            if (deuCerto) {
                setTimeout(() => resolve(this.ofertas), 3000)
            } else {
                reject({ codigo_erro: 404, mensagem_erro: 'Servidor nao encontrado! XYZ'})
            }
        })
        .then(( ofertas: any ) => {
            //fazer alguma tratativa
            console.log('primeiro then')
            return ofertas
        })
        .then(( ofertas: any ) => {
            //fazer um outra tratariva
            console.log('segundo then')
            return new Promise((resolve2, reject2) => {
                setTimeout(() => { resolve2( ofertas ) },3000)
            })
        })
        .then(( ofertas: any) => {
            console.log('terceiro then executado apos 3 seg porque estava aguardando uma promisse ser resolvida')
            return ofertas
        })
    } */
}