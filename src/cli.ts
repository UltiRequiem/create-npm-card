#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

create("create-npm-card", {
  templateRoot: resolve(__dirname, "..", "templates"),

  caveat() {
    return `Thanks for using UltiRequiem/create-create-app 🎉`;
  },

  modifyName(name) {
    return name.toLowerCase();
  },

  extra: {
    bio: {
      type: "input",
      describe: "Tell us a little about yourself",
      prompt: "always",
    },
    finalNote: {
      type: "input",
      describe: "What's your final note?",
      prompt: "always",
    },
  },

  after({ installNpmPackage }) {
    ["boxen", "inquirer", "open"].forEach(installNpmPackage);
  },
});
