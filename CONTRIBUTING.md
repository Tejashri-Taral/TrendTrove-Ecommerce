# Getting Started

- View the [README](./README.md) to get your development environment up and running. 
- Learn how to [format pull requests](#submitting-a-pull-request).
- Figure out what do to [after pull request is merged](#after-your-pull-request-is-merged)
- [Find an issue to work on](https://github.com/Tejashri-Taral/TrendTrove-Ecommerce/issues) and start smashing!

# Contributing Guidelines [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Tejashri-Taral/TrendTrove-Ecommerce/issues)

When contributing to this repository, please first discuss the change you wish to make via an issue.

Make sure you read the [README](./README.md) to know more about the project.

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. 

## Submitting or Requesting an Issue/Enhancement

### Best Practices for reporting or requesting for Issues/Enhancements:
  - Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.
  - Follow the Issue Template while creating the issue.
  - Include Screenshots if any (specially for UI related issues).
  - For UI enhancements or workflows, include mockups to get a clear idea.

### Best Practices for getting assigned to work on an Issue/Enhancement:
- If you would like to work on an issue, inform in the issue ticket by commenting on it.
- Please be sure that you are able to reproduce the issue, before working on it. If not, please ask for clarification by commenting or asking the issue creator.

**Note:** Please do not work on an issue which is already being worked on by another contributor. We don't encourage creating multiple pull requests for the same issue. Also, please allow the assigned person at least 2 days to work on the issue (The time might vary depending on the difficulty). If there is no progress after the deadline, please comment on the issue asking the contributor whether he/she is still working on it. If there is no reply, then feel free to work on the issue if you get assigned.


## Submitting a Pull Request

### Best Practices to send Pull Requests:
  - Fork the [project](https://github.com/Tejashri-Taral/TrendTrove-Ecommerce) on GitHub
  - Clone the project locally into your system.
```
git clone https://github.com/Tejashri-Taral/TrendTrove-Ecommerce
```
  - Make sure you are in the `master` branch.
```
git checkout master
```
  - Create a new branch with a meaningful name before adding and committing your changes.
```
git checkout -b branch-name
```
  - Add the files you changed. (avoid using `git add .`)
```
git add file-name
```
  - Make a meaningful commit message.
```
git commit
```
  - Push this branch to your remote repository on GitHub.
```
git push origin branch-name
```
  - Follow the Pull request template and submit a pull request with a motive for your change and the method you used to achieve it to be merged with the `master` branch.
  - If you can, please submit the pull request with the fix or improvements including tests.
  - During review, if you are requested to make changes, rebase your branch and squash the multiple commits into one. Once you push these changes the pull request will edit automatically.

## After your Pull Request is merged
After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository.

1. Delete the remote branch on GitHub.
```
git push origin --delete branch-name
```
2. Checkout the master branch.
```
git checkout master
```
3. Delete the local branch.
```
git branch -D branch-name
```
4. Update your master branch with the latest upstream version.
```
git pull upstream master
```

That's it! Thank you for your contribution!