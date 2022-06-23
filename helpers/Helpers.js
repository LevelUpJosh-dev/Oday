import { parse } from "https://deno.land/std@0.144.0/encoding/_yaml/parse.ts";

async function BuildDataModal() {
  const yamlString = await Deno.readTextFile("Oday.yaml");
  window.Oday = parse(yamlString);

  if (window.Oday.Resources.Sherlock.enabled) {
    await BuildSherlock();
  }
}

async function BuildSherlock() {
  window.Sherlock = await Deno.readTextFile("./utilities/Sherlock.js");
}

export { BuildDataModal };
