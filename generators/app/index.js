"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

const Case = require("case");

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
        message: "What is the author name?",
        validate: input => input !== undefined && input !== ""
      },
      {
        type: "input",
        name: "appName",
        message: "What is the name of the app? (use-kebab-case)",
        validate: input =>
          Case.of(input) === "kebab" || "app-name-must-be-in-kebab-case",
      },
      {
        type: "input",
        name: "selector",
        message: "What is the components selector? (use-kebab-case)",
        validate: input => input !== undefined && input !== ""
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
    const destinationPath = this.destinationPath();

    const filesToEdit = [
      `${destinationPath}/angular.json`,
      `${destinationPath}/jest.config.json`,
      `${destinationPath}/package-lock.json`,
      `${destinationPath}/package.json`,
      `${destinationPath}/index.html`,
      `${destinationPath}/app.component.spec.ts`,
      `${destinationPath}/app.component.ts`,
    ];

    this.fs
      .copy(this.templatePath("**/*"), destinationPath)
      .on("end", function() {
        for (const file of filesToEdit) {
          let content = this.fs.read(file);
          content = content
            .replace(/__author__/g, author)
            .replace(/__kebab-app-name__/g, kebabAppName)
            .replace(/__capital-case-name__/g, capitalAppName)
            .replace(/__selector__/g, kebabSelector);

          this.fs.write(file, content);
        }
      });
  }

  install() {
    this.installDependencies();
  }
};
