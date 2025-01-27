/**
 * @author Milton Romero
 */
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class PayloadService {
  private readonly _subject: Subject<any>;

  constructor() {
    this._subject = new Subject<any>();
  }

  public sendData(data: any): void {
    this._subject.next(data);
  }

  public listenData(): Observable<any> {
    return this._subject;
  }

  public complete(): void {
    this._subject.complete();
  }
}
