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
  private defaultOptions = {
    headers: { 'Content-Type': 'application/json' }
  };

  constructor(private http: HttpClient) { }

  getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.remindersUrl)
      .pipe(
        catchError(this.handleError<Reminder[]>('getReminders', []))
      );
  }

  createReminder(description: string): Observable<Reminder> {
    let reminder = { description: description };
    return this.http.post<Reminder>(this.remindersUrl, reminder, this.defaultOptions).pipe(
      catchError(this.handleError<Reminder>('createReminder'))
    );
  }

  updateReminder(reminder: Reminder): Observable<Reminder> {
    let endpoint = `${this.remindersUrl}/${reminder.id}`;
    return this.http.put<Reminder>(endpoint, reminder, this.defaultOptions).pipe(
      catchError(this.handleError<Reminder>('updateReminder', reminder))
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
