# Contributing to `<__GITHUB_REPOSITORY_NAME__>`

I would love for you to contribute to `<__GITHUB_REPOSITORY_NAME__>` and help make it even better than it is today!
As a contributor, here are the guidelines we would like you to follow:

 - [Setting Up Development Environment](#setting-up-development-environment)
    - [Software & Tools](#software--tools)
      - [Git](#git)
      - [NodeJS](#nodejs)
      - [pnpm](#pnpm)
      - [Extensions](#extensions)
        - [Conventional Commits](#conventional-commits)
        - [ESLint](#eslint)
        - [ShellCheck](#shellcheck)
        - [Code Spell Checker](#code-spell-checker)
        - [JSON Sorter](#json-sorter)
    - [Setting up the Source Code](#setting-up-the-source-code)
      - [Fork the repo](#fork-the-repo)
      - [Install the dependencies](#install-the-dependencies)
      - [Build the project](#build-the-project)
  - [Commit Message Guidelines](#commit-message-guidelines)
    - [Commit Message Header](#commit-message-header)
      - [Type](#type)
      - [Scope](#scope)
      - [Summary](#summary)
    - [Commit Message Body](#commit-message-body)
    - [Commit Message Footer](#commit-message-footer)
    - [Revert commits](#revert-commits)

## Setting Up Development Environment

### Software & Tools

To build and write code, make sure you have the following set of tools on your local environment.

> [!Note]
> You can pick any IDE of your choice, but we recommend using [VS Code](https://code.visualstudio.com/download) due to its extensive support for JavaScript and TypeScript development. !

#### [![Git](https://img.shields.io/badge/Git-2.33.0-green.svg)](https://git-scm.com/downloads)

* Description 🗒️ : Open source distributed version control system.
* Download Link 🔗 : [https://git-scm.com/downloads](https://git-scm.com/downloads)

#### NodeJS

* Description 🗒️ : JavaScript runtime.
* Version: LTS (Latest Stable Version)
  > [!Warning]
  > This project requires at least NodeJS **v20.13.1** or above to work.
* Download Link 🔗 : [https://nodejs.org/en/download](https://nodejs.org/en/download)

#### pnpm

* Description 🗒️ : Fast, disk space efficient package manager.
* Version: Latest (**v9.4.0** or higher)
* Download Link 🔗 : [https://pnpm.io/installation](https://pnpm.io/installation)

#### Extensions

##### Conventional Commits

* Type 🧰 : IDE Extension
* Description 🗒️ : Conventional Commits is a specification for adding human and machine-readable meaning to commit messages.
* Download Link 🔗 : [https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

##### ESLint

* Type 🧰 : IDE Extension
* Description 🗒️ : Static code analysis tool for JavaScript. 
* Download Link 🔗 : [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

##### ShellCheck

* Type 🧰 : IDE Extension
* Description 🗒️ : A shell script static analysis tool. Used by our static analyzer PR check. 
* Download Link 🔗 : [https://github.com/vscode-shellcheck/vscode-shellcheck](https://github.com/vscode-shellcheck/vscode-shellcheck)

##### Code Spell Checker

* Type 🧰 : IDE Extension
* Description 🗒️ : A basic spell checker that works well with code and documents.
* Download Link 🔗 : [https://marketplace.visualstudio.com/items?itemName=msyesyan.json-sorter](https://marketplace.visualstudio.com/items?itemName=msyesyan.json-sorter)

##### JSON Sorter

* Type 🧰 : IDE Extension
* Description 🗒️ : Sorts JSON files.
* Download Link 🔗 : [https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-json-sorter](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-json-sorter)

### Setting up the Source Code

#### Fork the repo

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the repository.
2. Clone your fork to the local machine.

Replace `<github username>` with your own username.

```shell
git clone https://github.com/<github username>/<__GITHUB_REPOSITORY_NAME__>.git
```

3. Set the original repo as the upstream remote.

```shell
git remote add upstream https://github.com/<__GITHUB_USERNAME__>/<__GITHUB_REPOSITORY_NAME__>.git
```

#### Install the dependencies

From the root of the project, execute the following command to install the project dependencies with `pnpm`.

```shell
pnpm install
```

#### Build the project

From the root of the project, execute the following command to build the project.

```shell
pnpm build
```

## Commit Message Guidelines

I'm using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.

### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: primitives|scss|react
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


#### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests

#### Scope
The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

* `core` - Changes to the core package.
* `lib` - Changes to the core lib.

#### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

### Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

### Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.
For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

or

```
DEPRECATED: <what is deprecated>
<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Closes #<pr number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

Similarly, a Deprecation section should start with "DEPRECATED: " followed by a short description of what is deprecated, a blank line, and a detailed description of the deprecation that also mentions the recommended update path.

### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.
