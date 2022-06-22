import { parse } from "https://deno.land/std@0.144.0/encoding/_yaml/parse.ts";

async function BuildDataModal() {
  const yamlString = await Deno.readTextFile("Oday.yaml");
  window.Oday = parse(yamlString);

  if (window.Oday.Resources.Sherlock.enabled) {
    window.Sherlock = await BuildSherlock();
  }
}

async function BuildSherlock() {
  return await Deno.readTextFile("./utilities/Sherlock.js");
}

export { BuildDataModal };
