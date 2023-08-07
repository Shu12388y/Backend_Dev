git add .
read message
git commit -m "$message"
echo "enter your option"
read option
if [ $option -eq 1 ]
then
    git push origin main
else    
    git push upstream main