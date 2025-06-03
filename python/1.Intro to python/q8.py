print("1: Celsius to Fahrenheit")
print("2: Fahrenheit to Celsius")
option = input("Choose 1 or 2: ")

if(option == "1"):
    c = float(input("Enter temperature in Celsius: "))
    f = (c * 9/5) + 32
    print("Temperature in Fahrenheit:", f)
elif(option == "2"):
    f = float(input("Enter the temperature in Fahrenheit: "))
    c = (f - 32) * 5/9
    print("Temperature in Celsius:", c)
else:
    print("Response entered is invalid, try agian")

