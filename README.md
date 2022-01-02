# lease-web-app

To run node-server in docker:

- cd into node-server directory
- start docker desktop and make sure docker engine is running
- docker compose build [only need to do once at the start OR if anyof "Dockerfile", "package.json" files change]
- to start up all containers: docker compose up
- server available at localhost:3000
- to stop: ctrl+c
- to close down all containers: docker compose down

To run react-frontend:

- cd into react-front directory
- npm start
- to stop: ctrl+c

If running into errors:

- Error with eslint file or something to do with react, try running npm install

Git basic commands:

git clone <repo url>

- Clones repo onto local folder

git clear

- Clears commands on terminal

git status

- Shows which branch you’re on
- Shows whether files are untracked or tracked or on staging area and ready to be committed

git log

- Gives history of all commits

git branch

- Shows you all the branches
- - shows the current branch you’re on

git checkout <branchName>

- Goes to specified <branchName>
- e.g. git checkout master (goes to master branch)

git checkout -b <branchName>

- creates new branch with <branchName>
- Use this to create new feature

git branch -D <branchName>

- Deletes specified branch

git add <fileName>

- Adds specified <fileName> to staging area

git add . OR git add -A

- Adds everything in folder to staging area

git commit -m “descriptive message”

- Commits change with specified message

git commit --amend

- Use :wq to get out
- Avoids creating another commit, everything is still one commit

git pull

- get latest changes

git push or git push -u origin <branchName>

- push your changes
