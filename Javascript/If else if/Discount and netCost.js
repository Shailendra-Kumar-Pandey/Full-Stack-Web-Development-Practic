/* Write to the Program calculate and print discount and net price.Input cost of item. Rate of discount depends on cost.
 If C <= 5000 then R = 10%
 If C > 5000 and <= 20000 then R = 20%
 If C > 20000 and <= 30000 then R = 30%
 If C > 30000 and <= 40000 then R = 40%
 If C > 40000 then R = 50% */

 const cost = 10000;

 let discount;
 let netCost;
 let rate = 0;

 if(cost <= 5000){
    rate = 10;
 }else if(cost > 5000 && cost <= 20000){
    rate = 20;
 }else if(cost > 20000 && cost <= 30000){
    rate = 30;
 }else if(cost > 30000 && cost <= 40000){
    rate = 40;
 }else{
    rate = 50;
 }

 discount = (cost * rate)/100;
 netCost = cost - discount;
 
 console.log("Net Value is :- ",netCost);
 console.log("Discount Value is :- ",discount);
