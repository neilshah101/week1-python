user_input = int(input("enter the no. =  "))

if user_input<0:
    print ("there is no factorial of negative no.")

fac = 1
for i in range(1,(user_input)+1):
    fac *= i 
    print(fac)
