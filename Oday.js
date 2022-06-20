import { opine, serveStatic } from "https://deno.land/x/opine@2.2.0/mod.ts";

import { BuildDataModal, EnableSherlock } from "./helpers/Helpers.js";

import { AboutShow } from "./controllers/About.js";
import { HomeShow } from "./controllers/Home.js";
import { DenoInfoShow } from "./controllers/Deno.js";

await BuildDataModal();

if (window.Oday.Sherlock.enabled) {
  window.Sherlock = await EnableSherlock();
}

const server = opine();

server.use(serveStatic("public"));

server.get("/", async (request, response) => {
  response.body = await HomeShow();
  response.send();
});

server.get("/about", async (request, response) => {
  response.body = await AboutShow();
  response.send();
});

server.get("/denoInfo", async (request, response) => {
  response.body = await DenoInfoShow();
  response.send();
});

server.listen(3000);
