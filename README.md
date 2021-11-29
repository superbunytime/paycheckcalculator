# paycheckcalculator
I whipped up a simple paycheck gross/net/withheld calculator for myself based off of data extrapolated from a couple of paystubs

USAGE:

This is a simple node application I threw together and ran through VS code's terminal.  You'll need a node environment, a paystub, and a calculator for default values.  In my experience with my own paystub, it's accurate to within 5$; this discrepancy may be due to a rounding error on my part when finding the percentages; more paystubs will be required to troubleshoot the variance.

Some basic math goes into setting default values; for example, if your gross amount is x, and your social security withheld is y, you can divide y by x to arrive at the desired percentage to enter for your social security withheld variable in the paycheckDeductions function.

Further, the code doesn't account for state taxes or income tax brackets; if overtime constantly shifts you to a different income tax bracket, code has not currently been implemented to switch to that, but may be in the future.

USE CASES:

If you want an approximation of how much your take-home pay is going to be for budgetting purposes, this is a pretty reliable program.  It's also handy to see if your employer is underpaying you, or if you're having the improper amount withheld from your paycheck.

FUTURE:

If I add more to this, some features I would like to include are:

Tax bracket switches
State Tax
GUI for non-programmers' benefit

FAR OFF FUTURE:

Something I'm probably *not* going to do, but would be cool in concept, is integrate this with my own work's payroll system, and possibly other payroll systems, to de-complicate timecard management for people that are not necessarily technologically inclined, or in cases where timecard systems are implemented in *incredibly obtuse and frustrating manners*.
