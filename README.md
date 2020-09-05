# InVisionAR Web Frontend

This repository contains the code for the web-based frontend
of the InVisionAR app and also the landing page for anyone
looking at InVisionAR for the first time.

## Development Environment Requirements

- NodeJS(latest)
- Git
- A code editor of your choice
  - Visual Studio Code is reccomended

## Setting up the devlopment environment

1. Fork this repository
2. Clone the repository using `git clone`. Clone the repo in your account.
3. `cd` or open it in a code editor
4. Open a terminal inside the folder(you can do this with `` Ctrl + `  `` on VSCode)
5. Run `git remote add upstream https://github.com/InVisionAR/web-frontend.git` to set the root repository as the upstream remote.
6. Create a new branch with `git branch new-branch-name`
   - If the new branch is for a new feature, prefix the branch name with `feature/`. For example, `feature/login-system`
   - If the new branch name is a bug fix, prefix the branch name with `bugfix/`. For example, `bugfix/signup-error`
7. Switch to the new branch with `git checkout new-branch-name`.
8. Run `npm install`. This might take a while.
9. Run `npm run start` inside the folder to start a devlopment server.
10. Start working!
11. Commit changes regularly with `git commit -m "commit message"`.
12. Push your changes regularly with `git commit origin new-branch-name`
13. Pull changes from upstream master regulary with `git pull upstream master`. Run step 6 after pulling from upstream master. If there are merge conflicts, ask for help.
14. When you are ready to push your changes to the root master, log on to GitHub.com and create a pull request from your branch(`new-branch-name`, for exmaple) to the master branch of the main repository.
15. Wait for code review.
16. Fix things according to review feedback.
17. If code review is passed, your branch will be merged. Go to step 6 and start working your next task. If your review did not pass, go back to step 15.
