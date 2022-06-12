# Contribution guidelines

## Table of Contents

- [Getting started](#getting-started)
  - [Language](#language)
    - [For native English speakers](#for-native-english-speakers)
  - [Code of Conduct](#code-of-conduct)
- [How can I help?](#how-can-i-help)
  - [Submitting an issue](#submitting-an-issue)
  - [Feedback](#feedback)
  - [Code](#code)
    - [Dev environment](#dev-environment)
- [Commiting](#commiting)
  - [Why all these rules?](#why-all-these-rules)
- [Submitting a pull request](#submitting-a-pull-request)

## Getting started

First off, we would like to thank you for taking the time to contribute and make this a better project!

Here we have a set of instructions and guidelines to reduce misunderstandings and make the process of contributing to `profile-reame-generator` as smooth as possible.

We hope this guide makes the contribution process clear and answers any questions you may have.

### Language

Please, while contributing or interacting in any way in this project, refrain from using any language other than **English**.

#### For native English speakers

Try to use simple words and sentences. Don't make fun of non-native English speakers if you find something wrong about the way they express themselves.

Try to encourage newcomers to express their opinions, and make them comfortable enough to do so.

### Code of Conduct

We expect that project participants to adhere to our Code of Conduct. You can check the [full text](CODE_OF_CONDUCT.md) so that you may understand the kind of conduct we are expecting and what actions will and will not be tolerated.

By participating in this project, you agree to abide by its terms.

## How can I help?

Here are some ways you can help along with some guidelines.

## Submitting an issue

- Please search for similar issues before opening a new one;
- Use one of the corresponding issue templates;
- Use a clear and descriptive title;
- Include as much information as possible by filling out the provided issue
  template;
- Most of the time, the best way to report an issue is a failing test proving it.

### Feedback

The more feedback the better! We're always looking for more suggestions and opinions on discussions. That's a good opportunity to influence the future direction of this tool.

This includes submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

The [`question`](https://github.com/maurodesouza/profile-readme-generator/labels/question) label is a good place to find ongoing discussions.

### Code

You can use issue labels to discover issues you could help out with:

- [`bug` issues](https://github.com/maurodesouza/profile-readme-generator/labels/bug)
  are known bugs we'd like to fix;
- [`enhancement` issues](https://github.com/maurodesouza/profile-readme-generator/labels/enhancement)
  are features we're open to include.

The
[`help wanted`](https://github.com/maurodesouza/profile-readme-generator/labels/help%20wanted)
and
[`good first issue`](https://github.com/maurodesouza/profile-readme-generator/labels/good%20first%20issue)
labels are especially useful.

When you see an issue that is already assigned, please check to see if there isn't someone working on it already (maybe try asking in the issue). This is to prevent unnecessary work for everyone involved.

#### Dev environment

When developing, prefer using **Node** ≥ 14 and **yarn**. Writing code with the latest stable Node versions allows us to use newer developer tools.

After [cloning the repository](https://help.github.com/articles/cloning-a-repository/), run `yarn` to install dependencies.

A summary of the scripts:

- `dev`: starts the application at `localhost:3000`
- `build`: creates an optimized production build of application
- `start`: starts the application in production mode at `localhost:3000` (have run the build before)
- `test`: run the tests

This project uses [Prettier](http://prettier.io/) for code formatting.

## Commiting

A commit message can consists of a **header**, **body** and **footer**. The header is the only mandatory part and consists of a type and a subject. The body is used to fully describe the change. The footer is the place to reference any issues or pull requests related to the commit. That said, we end with a template like this:

```
<emoji> <type>: <subject>

[optional body]

[optional footer]
```

To ensure a commit is valid and easy to read, check the following:

- The header (first line) is the only mandatory part of the commit message;
- The body and footer are both optional but its use is highly encouraged;
- The header should contains:
  - A type with your respective emoji:
    - Must be lowercase;
    - Must be one of:
      - ⚡ **chore**: A change that neither fix a bug nor adds a feature;
      - 🧪 **ci**: A CI change;
      - 📖 **docs**: A documentation change or fix;
      - ✨ **feat**: A new feature;
      - 🐛 **fix**: A bug fix;
      - 🤖 **test**: A test-related change.
      - 🧼 **lint**: A test-related change.
  - A subject:
    - Must be lowercase;
    - Must be limited to 50 characters or less;
    - Must omit any trailing punctuation;
    - Avoid camel case ("my awesome method" not "myAwesomeMethod").
- The body:
  - Must have a leading blank line;
  - Each line must be limited to 72 characters or less;
  - Must be capitalized.
- The footer:
  - Must have a leading blank line;
  - Each line must be limited to 72 characters or less;
  - If needed, reference to issues and pull requests must be made here in the last line.

You also should follow these general guidelines when committing:

- Use the present tense ("add feature" not "added feature");
- Use the imperative mood ("move cursor to..." not "moves cursor to...");
- Try to answer the following questions:
  - Why is this change necessary?
  - How does it address the issue?
  - What side effects (if any) does this change may have?

Example of a commit message:

```
✨ type: commit message style guide for git

Oftentimes a subject by itself is sufficient. When it's not, add a
blank line (this is important) followed by one or more paragraphs hard
wrapped to 72 characters. Git is strongly opinionated that the author
is responsible for line breaks; if you omit them, command line tooling
will show it as one extremely long unwrapped line. Fortunately, most
text editors are capable of automating this.

Issues and pull request can be referenced on the footer: #3 #12
```

### Why all these rules?

We try to enforce these rules for the following reasons:

- Communicating in a better way the nature of changes;
- Triggering build and publish processes;
- Automatically determining a semantic version bump (based on the types of commits);
- Making it easier for people to contribute, by allowing them to explore a more structured commit history.

## Submitting a pull request

Before submitting a pull request, please make sure the following is done:

- [Fork](https://help.github.com/en/articles/fork-a-repo) the repository and create your branch from `main`.
  - Example: `feat/my-awesome-feature` or `fix/annoying-bug`;
- Run `yarn` in the repository root;
- Ensure the test suite passes;
- Ensure your commit is validated;
