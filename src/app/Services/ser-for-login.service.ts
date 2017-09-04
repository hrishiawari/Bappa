// import { Injectable } from '@angular/core';

// @Injectable()
// export class SerForLoginService {

//   constructor() { }
// login(Username,Password){
// if (Username=="User"&&Password=="Apple"){

//   localStorage.setItem('CurrentUser',Username);
// }

// }
// logout(){
//   localStorage.removeItem('CurrentUser');
// }


// }


import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class SerForLoginService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
         
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }}