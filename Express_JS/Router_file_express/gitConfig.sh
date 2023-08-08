git add .
read message
git commmit -m "$message"
echo "Enter the options"
echo "1. git push origin main"
echo "2. git push upstream main"
read option
if [ $option -eq 1 ]
then 
  git push 
else
  git push upstream main
fi  
