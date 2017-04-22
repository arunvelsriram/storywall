import { Injectable } from '@angular/core';

@Injectable()
export class MqlEncoderService {

  constructor() { }

  encode(mql: String): String {
  	return encodeURI(mql.toString()).replace(/&/g, '%26');
  }

}
