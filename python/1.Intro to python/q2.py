a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
c = float(input("Enter third number: "))

if a > b and a > c:
    print("a largest")
elif b > a and b > c:
    print("b largest")
else:
    print("c largest")