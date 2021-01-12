"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

const Case = require("case");
const { doesNotMatch } = require("yeoman-assert");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the fantabulous ${chalk.red(
          "generator-ng-template"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "author",
        message: "What is the author name?"
      },
      {
        type: "input",
        name: "appName",
        message: "What is the name of the app? (use-kebab-case)",
        validate: input =>
          Case.of(input) === "kebab" || "app-name-must-be-in-kebab-case",
        default: this.appname.replace(" ", "-")
      },
      {
        type: "input",
        name: "selector",
        message: "What is the components selector?",
        default: this.appname.replace(" ", "-")
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const { author, appName, selector } = this.props;
    const capitalAppName = Case.capital(appName);
    const kebabAppName = Case.kebab(appName);
    const kebabSelector = Case.kebab(selector);

    this.fs.copy(this.templatePath("**/*"), this.destinationPath(), {
      process: function(content) {
        let text = content.toString();
        text = text.replace(/__author__/g, author);
        text = text.replace(/__kebab-app-name__/g, kebabAppName);
        text = text.replace(/__capital-case-name__/g, capitalAppName);
        return text.replace(/__selector__/g, kebabSelector);
      }
    });
  }

  install() {
    this.installDependencies();
  }
};
