num = int(input("enter the no. to check the prime or not: "))

if num ==2:
    print("its not  prime")

for i in range(2, num):
    if num % i == 0:
        print ("its not a prime")
        break
    

    else :
        print ("it is prime")
        print(num)
        break

