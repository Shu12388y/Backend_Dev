git status 
git add .
echo "enter your message"
read message
git commit -m "$message"
git push 
echo "done ..."