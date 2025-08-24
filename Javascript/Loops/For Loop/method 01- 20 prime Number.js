/* Write a program to print the first 20 prime numbers  */


 let j=2, i=2, count=0;
    for(i=2;i<100;i++)
    {
        for(j=2;j<i;j++)
        {
            if(i%j==0)
                break;
        }
        if(i==j){
            console.log(i);
            count++;
            if(count==20)
                break;
        }
    }