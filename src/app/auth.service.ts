import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  clients: any[] = [
    {
      deb_id: 1,
      username: 'name1',
      surname: 'surname1',
      password: 'PW1',
      client: 'client',
      reference: 1,
      id : 1
    
    },
    {
      deb_id: 2,
      username: 'name2',
      surname: 'surname2',
      password: 'PW2',
      client: 'client',
      reference: 2,
      id : 2,
    
    }
    ,
    {
      deb_id: 3,
      username: 'name3',
      surname: 'surname3',
      password: 'PW3',
      client: 'client',
      reference: 3,
      id : 3,
    
    },
    {
      deb_id: 4,
      username: 'name4',
      surname: 'surname4',
      password: 'PW4',
      client: 'client',
      reference: 4,
      id : 4,
    
    },
    {
      deb_id: 5,
      username: 'name5',
      surname: 'surname5',
      password: 'PW5',
      client: 'client',
      reference: 5,
      id : 5,
    
    },
    {
      deb_id: 6,
      username: 'name6',
      surname: 'surname6',
      password: 'PW6',
      client: 'client',
      reference: 6,
      id : 6,
    
    },
    {
      deb_id: 7,
      username: 'name7',
      surname: 'surname7',
      password: 'PW7',
      client: 'client',
      reference: 7,
      id : 7,
    },
    {
      deb_id: 8,
      username: 'name8',
      surname: 'surname8',
      password: 'PW8',
      client: 'client',
      reference: 8,
      id : 8,
    },
    {
      deb_id: 9,
      username: 'name9',
      surname: 'surname9',
      password: 'PW9',
      client: 'client',
      reference: 9,
      id : 9,
    
    },
    {
      deb_id: 10,
      username: 'name10',
      surname: 'surname10',
      password: 'PW10',
      client: 'client',
      reference: 10,
      id : 10,

    }
  ];
  session: any;

  constructor() { }

  login(username: string, password: string){ {
    let client =this.clients.find((u)=>u.username===username && u.password===password);
    if(client){
      this.session = client;
      localStorage.setItem('session', JSON.stringify(this.session));
    }
    return client;
  }
}
}

