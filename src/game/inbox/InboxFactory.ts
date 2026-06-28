import { InboxMessage } from "./InboxMessage";
import {
  InboxAction,
  InboxCategory,
  InboxPriority,
} from "./InboxTypes";

export class InboxFactory {

  static create({
    title,
    body,
    category,
    priority = InboxPriority.NORMAL,
    action,
  }: {
    title: string;
    body: string;
    category: InboxCategory;
    priority?: InboxPriority;
    action?: InboxAction;
  }): InboxMessage {

    return {
      id: crypto.randomUUID(),

      title,
      body,

      category,
      priority,

      date: new Date(),

      read: false,
      archived: false,
      pinned: false,

      action,
    };

  }

}