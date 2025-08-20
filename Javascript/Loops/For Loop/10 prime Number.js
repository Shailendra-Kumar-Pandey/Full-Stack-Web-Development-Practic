/* Write a program to print the first 10 prime numbers  */


 let j=2,i=2;
    for(i=2;i<70;i++)
    {
        for(j=2;j<i;j++)
        {
            if(i%j==0)
                break;
        }
        if(i==j)
            console.log(i);
    }