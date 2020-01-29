import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { Http } from '@angular/http';



@Injectable()
export class ApiService {
    constructor(private https: Http) { }



    GetJson() {
        return this.https.get('assets/Dummy_Api/credentials.json').pipe(map(Response => {
            return Response.json();
        }))
    }

}