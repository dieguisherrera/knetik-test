import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(public http: HttpClient) { }

  getDevices(params: string): Promise<any> {
    return this.http.get(
      `https://recruitment-test-api.devsandbox.knetikcloud.com/devices${params}`)
      .toPromise();
  }
}
