#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
Thanks for using UltiRequiem/create-create-app 🎉

If this was useful, please give me a ⭐️
`;

create("create-npm-card", {
  templateRoot,

  caveat,

  modifyName(name: string) {
    return name.toLowerCase();
  },

  after({ answers }) {
    console.log(`Ok you chose ${answers.architecture}.`);
  },
});
