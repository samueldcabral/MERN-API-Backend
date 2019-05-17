# MERN-API-Backend

This is a simple backend application using Node, Express and MongoDB.

There is also (in progress) a frontend application using React for this simple project.

#### Quick preview:

```javascript
const express = require("express");
const app = express();
...
app.listen(process.env.PORT, () =>
  console.log(`Server listenning on port ${process.env.PORT}...`)
);
```

---

## Frontend application

> Here's the link to the [MERN api Frontend application](https://github.com/samueldcabral/MERN-API-Frontend).

## Features and Goals list

| Feature                  | Status  |
| ------------------------ | :-----: |
| Setup express server     |  done   |
| Setup mongodb connection |  done   |
| Create Operation         |  done   |
| Update Operation         |  done   |
| Read Operation           |  done   |
| Delete Operation         |  done   |
| Integrate a GraphQL Api  | pending |
