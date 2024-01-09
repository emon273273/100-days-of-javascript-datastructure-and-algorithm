
emon=(4 3 7 5 9 6 7 1)


sum=0
l=${emon[0]}


for ((i=0; i<${#emon[@]}; i++))
do  
   
    if [ $((i % 2)) != 0 ]
    then 
        
        sum=$(($sum + ${emon[$i]}))
    fi
    
    
    if [ ${emon[$i]} -gt $l ]
    then 
        
        l=${emon[$i]}
    fi  
done


echo "The sum of odd positions numbers: $sum"
echo "l Number: $l"
