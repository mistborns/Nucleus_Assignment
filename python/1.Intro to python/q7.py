
num = int(input("Enter the number:"))
is_prime = True

if(num < 2):
    is_prime = False
else:
    for i in range(2, int(num/2) + 1):
        if (num % i == 0):
            is_prime = False
            break
if is_prime:
    print("The number is Prime")
else:
    print("The number is composite")
