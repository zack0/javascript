Correlation is a measure of dependence between variables (""variables"" in the statistical sense, not the JavaScript sense). 
It is usually expressed as a coefficient that ranges from -1 to 1. 
Zero correlation means the variables are not related, 
whereas a correlation of one indicates that the two are perfectly related—if you know one, you also know the other. 
Negative one also means that the variables are perfectly related but that they are opposites—when one is true, the other is false.

For binary (Boolean) variables, the phi coefficient (ϕ) provides a good measure of correlation and is relatively easy to compute.
To compute ϕ, we need a table n that contains the number of times the various combinations of the two variables were observed.

For example, we could take the event of eating pizza and put that in a table like this:

-------------------------------
|  nS, nP : 76  |  nS, P : 9  |      
|               |             |
|               |             |
-------------------------------
|               |             |
|               |             |
|  S, nP : 4    |  S, P : 1   |
-------------------------------