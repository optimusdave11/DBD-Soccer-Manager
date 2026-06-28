import {
  InboxActionType,
  InboxCategory,
  InboxPriority,
} from "./InboxTypes";

export interface InboxAction {
  type: InboxActionType;
  targetId?: number | string;
}

export interface InboxMessage {
  id: string;

  title: string;

  body: string;

  category: InboxCategory;

  priority: InboxPriority;

  date: Date;

  read: boolean;

  archived: boolean;

  pinned: boolean;

  action?: InboxAction;
}