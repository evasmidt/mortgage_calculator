//simple equation for down payment based on percentage
var downpayment = interestRate / price

//how to calculate interest rate
	//divide principal by the number of payments (12 times the length of your loan in years)
	//then subtract your principal paid each month from your monthly loan payment to find your interest paid each month.
	//For example, imagine you are paying $1250 per month on a 15-year, $180,000 loan. You would divide your principal, $180,000, by 180 (your number of payments, 12 payments per year*15 years) to arrive at $1,000 per month in principal paid. Your monthly interest paid would then be $1,250-$1,000, or $250.



//Calculate price of homeowners insurance
	//For most homeowners, the annual costs for a homeowners insurance policy can be estimated by dividing the value of the home by 1,000, then multiplying the result by $3.50.


//calc price of mortgage insurance (up front)
/*
	Record the total purchase price of your home. 
	Let's say you are buying a home for $150,000.
	Calculate 2.25 percent of the purchase price. You can do this by multiplying the purchase price by 0.0225. In this case, it would be 150,000 times 0.0225*/


//calc price of mortgage insurance (monthly)

	/*Record the total purchase price of the home. In this example, use $150,000.

	Multiply the purchase price by 0.55 percent, or 0.0055, which is the standard monthly mortgage insurance premium percentage. In this example, multiply 150,000 by 0.0055.

	Record the result. In the example used here, the result is $825. This is how much you will be required to pay on an annual basis.

	Divide the result by 12, since there are 12 months in a year. In this case, $825 divided by 12 equals $68.75. This figure is how much you will pay monthly for mortgage insurance, otherwise known as MMI.*/


//calc property taxes


//calc total monthly payment
	//The following formula is used to calculate the fixed monthly payment (P) required to fully amortize a loan of L dollars over a term of n months at a monthly interest rate of c. [If the quoted rate is 6%, for example, c is .06/12 or .005].  
	P = L[c(1 + c)n]/[(1 + c)n - 1]
