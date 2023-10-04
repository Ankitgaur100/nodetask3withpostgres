const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "@Nkitgaur1",
  database: "UserDetails",
});
console.log(client);
client.connect();

let query = `Select * from "User"`;

client.query(query, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
