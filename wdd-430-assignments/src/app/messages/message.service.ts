import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];
  messagesChangedEvent: EventEmitter<Message[]> = new EventEmitter<Message[]>();
  maxMessageId: number;

  constructor(private http: HttpClient) {}

  getMessages() {
    this.http
      .get('https://wdd-430-guibyui-default-rtdb.firebaseio.com/messages.json')
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
          this.maxMessageId = this.getMaxId();
          this.messagesChangedEvent.next([...this.messages]);
        },
        (err: any) => {
          console.error(err);
          return [...this.messages];
        }
      );
  }
  getMessage(id: string): Message {
    return this.messages.find((message) => message.id === id);
  }

  getMaxId(): number {
    let maxId = 0;
    this.messages.forEach((message: Message) => {
      const currId = +message.id;
      if (currId > maxId) {
        maxId = currId;
      }
    });
    return maxId;
  }

  storeMessages() {
    const msgs = JSON.stringify(this.messages);
    this.http
      .put(
        'https://wdd-430-guibyui-default-rtdb.firebaseio.com/messages.json',
        msgs
      )
      .subscribe(() => {
        this.messagesChangedEvent.next([...this.messages]);
      });
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.storeMessages();
  }
}
