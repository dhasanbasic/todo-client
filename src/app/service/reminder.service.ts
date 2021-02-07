import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Reminder } from '../model/reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private remindersUrl = environment.reminderApiUrl;
  private defaultHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.remindersUrl)
      .pipe(
        catchError(this.handleError<Reminder[]>('getReminders', []))
      );
  }

  createReminder(description: string): Observable<Reminder> {
    let options = {
      headers: this.defaultHeaders,
      params: { "description": description}
    };
    return this.http.post<Reminder>(this.remindersUrl, null, options).pipe(
      catchError(this.handleError<Reminder>('addReminder'))
    );
  }

  deleteReminder(reminder: Reminder): Observable<void> {
    let endpoint = `${this.remindersUrl}/${reminder.id}`;
    return this.http.delete<void>(endpoint).pipe(
      catchError(this.handleError<void>('deleteHero'))
    );
  }

  /**
   * Simple error handler which displays the error in the console and provides a fallback result if desired. 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
