# @fluid-example/hello-world

This repository contains a simple app that enables all connected clients to roll a dice and view the result.
For a walkthrough of this example and how it works, check out the [tutorial documentation](https://aka.ms/fluid/tutorial).

This branch has a modification that uses another server value as the store value.

Some notes:

- When a new document is created it checks the server to get the initial value.
- When a document is loaded it checks the server to ensure there is not a new value.
- When the user ends the session the data is persisted back to the server to becomes the new original value.
- A key in the root DDS is used to denote the session has ended. No more changes are permitted to the fluid session.

The simple server is located at local-hapi-server.js.

## Getting Started

After cloning the repository, install dependencies with:

```bash
npm install
```

You can then run the example with:

```bash
npm start
```

This will open a browser window to the example.  You can navigate to the same URL in a second window to see changes propagating between clients.

**NOTE**: Since the dice are represented by ASCII, they may appear differently depending on your browser.

To webpack the bundle and output the result in `./dist`, you can run:

```bash
npm run build
```
