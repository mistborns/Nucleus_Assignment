
num1 = float(input("Enter first number: "))
oper = input("Enter operator (+, -, *, /): ")
num2 = float(input("Enter second number: "))

if oper == "+":
    print("Result:", num1 + num2)
elif oper == "-":
    print("Result:", num1 - num2)
elif oper == "*":
    print("Result:", num1 * num2)
elif oper == "/":
    print("Result:", num1 / num2)
else:
    print("Invalid operator, try again")