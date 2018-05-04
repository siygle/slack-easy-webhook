# slack-easy-webhook
Just a simple wrapper which make slack incoming webhook more easy to use (and don't need to install any dependency) with Promise.

## Install

```
npm install slack-easy-webhook
```

## Usage

```js
const slack = require('slack-easy-webhook')

slack(WEBHOOK_URL, OPTS)
```

### Options
All Slack accepts options ([slack incoming webhook][incoming-webhook-doc], like `username`, `channel`, `icon_url`, `icon_emoji`, `attachments`) and its [message formatting][slack-message-formatting] or [message attachments][slack-message-attachments].

[incoming-webhook-doc]: https://api.slack.com/incoming-webhooks
[slack-message-formatting]: https://api.slack.com/docs/formatting
[slack-message-attachments]: https://api.slack.com/docs/attachments
