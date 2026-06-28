import { inboxManager } from "../inbox/InboxManager";

export interface InboxPreview {

  sender: string;
  subject: string;
  date: string;
  unread: boolean;

}

export class InboxResolver {

  resolve(): InboxPreview | null {

    const message =
      inboxManager.getMessages()[0];

    if (!message) {
      return null;
    }

    return {

      sender: message.title,

      subject: message.body,

      date:
        message.date.toLocaleDateString(),

      unread: !message.read,

    };

  }

}

export const inboxResolver =
  new InboxResolver();