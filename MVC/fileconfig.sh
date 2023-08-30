touch server.js
touch npm init -y
npm install express body-parser ejs
echo "/node_modules" > .gitignore
mkdir public
mkdir model
mkdir views
mkdir controller
cd views
touch index.ejs
cd ..
cd public
mkdir css
cd css 
touch style.css
cd ../..
cd model
touch homePage.js
cd ..
echo " git status 
git add .
read message
echo " enter your message"
git commit -m "$message"
git push " > gitconfig.sh