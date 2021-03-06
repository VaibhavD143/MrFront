import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    getClientMessage(error: Error): string {
      console.error(error);
        
      if (!navigator.onLine) {
            return 'No Internet Connection';
        }
        return error.message ? error.message : error.toString();
    }

    getClientStack(error: Error): string {
        return error.stack;
    }

    getServerMessage(error: HttpErrorResponse): string {
      console.error(error);
      
      if (error.status == 500) {
        return "Server couldn't perform operation!";
      } else if (error.status == 0) {
        return "Database server not working!";
      } else if (error.status == 403){
        return "Not authorised, login again!";
      }
       else {
        return error.message;
      }
    }

    getServerStack(error: HttpErrorResponse): string {
        // handle stack trace
        return 'stack';
    }
}