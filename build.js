/**
 * This is forked from: https://github.com/Kilian/businesscard
 */
"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 0,
  borderStyle: "bold",
  borderColor: "#AD7DFF",
  float: "center"
};

// Text + chalk definitions
const data = {
  name: chalk.bold.white("Danny Banks"),
  handle: chalk.bold.white("dbanksdesign"),
  work: chalk.white("Principal Design Technologist at AWS"),
  bluesky: chalk.blue("https://bsky.app/profile/dbanks.design"),
  twitter: chalk.cyan("https://twitter.com/dbanksdesign"),
  npm: chalk.red("https://npmjs.com/~dbanksdesign"),
  github: chalk.blackBright("https://github.com/dbanksdesign"),
  linkedin:
    chalk.blue("https://linkedin.com/in/dbanksdesign"),
  web: chalk.cyan("https://dbanks.design"),
  npx: chalk.magenta("$ npx dbanksdesign"),
  labelBluesky: chalk.white.bold("Bluesky:   "),
  labelTwitter: chalk.white.bold("Twitter:   "),
  labelnpm: chalk.white.bold("npm:       "),
  labelGitHub: chalk.white.bold("GitHub:    "),
  labelLinkedIn: chalk.white.bold("LinkedIn:  "),
  labelWeb: chalk.white.bold("Web:       "),
  labelCard: chalk.white.bold("Card:      ")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.work}`;
const blueskying = `${data.labelBluesky}  ${data.bluesky}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  working +
  newline + // Add one whole blank line
  newline + // data.labelWork + data.work
  blueskying +
  newline + // data.labelTwitter + data.twitter
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk(boxen(output, options))
);
