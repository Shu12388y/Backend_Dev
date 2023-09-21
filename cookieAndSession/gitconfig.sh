#!bin/bash
git status
git add .
echo "enter you message"
read message
git commit -m "$message"
git push

