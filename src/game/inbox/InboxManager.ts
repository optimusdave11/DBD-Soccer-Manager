import { InboxMessage } from "./InboxMessage";

export class InboxManager {

  private messages: InboxMessage[] = [];

  addMessage(message: InboxMessage): void {
    this.messages.unshift(message);
  }

  getMessages(): InboxMessage[] {
    return [...this.messages];
  }

  getUnreadMessages(): InboxMessage[] {
    return this.messages.filter(
      message => !message.read
    );
  }

  getArchivedMessages(): InboxMessage[] {
    return this.messages.filter(
      message => message.archived
    );
  }

  markAsRead(id: string): void {

    const message =
      this.messages.find(
        message => message.id === id
      );

    if (message) {
      message.read = true;
    }

  }

  markAsUnread(id: string): void {

    const message =
      this.messages.find(
        message => message.id === id
      );

    if (message) {
      message.read = false;
    }

  }

  archive(id: string): void {

    const message =
      this.messages.find(
        message => message.id === id
      );

    if (message) {
      message.archived = true;
    }

  }

  unarchive(id: string): void {

    const message =
      this.messages.find(
        message => message.id === id
      );

    if (message) {
      message.archived = false;
    }

  }

  pin(id: string): void {

    const message =
      this.messages.find(
        message => message.id === id
      );

    if (message) {
      message.pinned = true;
    }

  }

  unpin(id: string): void {

    const message =
      this.messages.find(
        message => message.id === id
      );

    if (message) {
      message.pinned = false;
    }

  }

  delete(id: string): void {
    this.messages =
      this.messages.filter(
        message => message.id !== id
      );
  }

  clear(): void {
    this.messages = [];
  }

}

export const inboxManager =
  new InboxManager();