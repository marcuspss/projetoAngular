import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';

export class ErrorHandler{
    static handlerError(error: Response | any){
        let erroMensage: string
        if(error instanceof Response){
            erroMensage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`  
        }else{
            erroMensage = error.toString() 
        }

        console.log(erroMensage)
        return Observable.throw(erroMensage)
    }


}



