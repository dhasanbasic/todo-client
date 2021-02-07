import { Component, OnInit } from '@angular/core';

import { Reminder } from '../model/reminder';
import { ReminderService } from '../service/reminder.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  reminders: Reminder[];
  reminderDescription = '';

  constructor(private reminderService: ReminderService) { }

  ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders(): void {
    this.reminderService.getReminders()
        .subscribe(reminders => this.reminders = reminders);
  }

  addReminder(): void {
    let description = this.reminderDescription.trim();
    if (description) {
      this.reminderService.createReminder(description).subscribe(
          reminder => {
            this.reminders.push(reminder);
            this.reminderDescription = "";
      });
    }
  }

  updateReminderStatus(reminder: Reminder, done: boolean): void {
    reminder.done = done;
    this.reminderService.updateReminder(reminder).subscribe();
  }

  deleteReminder(reminder: Reminder): void {
    this.reminders = this.reminders.filter(r => r.id !== reminder.id);
    this.reminderService.deleteReminder(reminder).subscribe();
  }
}
