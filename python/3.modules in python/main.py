# 1. Create a custom module with functions to add, subtract, multiply, and divide two numbers.
import custommath

a = 10
b = 5
print("Add:", custommath.add(a, b))
print("Subtract:", custommath.subtract(a, b))
print("Multiply:", custommath.multiply(a, b))
print("Divide:", custommath.divide(a, b))



# 2. Use the `math` module to calculate square root, factorial, and power of a number.
import math
num = 6
print("Square Root:", math.sqrt(num))
print("Factorial:", math.factorial(num))
print("Power (6^3):", math.pow(num, 3))



# 3. Write a program that uses `random` to generate a password of given length.
import random
import string

def generate_password(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choices(characters, k=length))

length = int(input("enter the password length:"))
print("generated password:" ,generate_password(length))


# 4. Create a program using the `datetime` module to display the current date and time.
from datetime import datetime

now = datetime.now()
print("Current Date and Time:", now.strftime("%Y-%m-%d %H:%M:%S"))


# # 5. Import a custom module and use its functions in another script.
import custommath

a = 10
b = 5
print("Add:", custommath.add(a, b))
print("Subtract:", custommath.subtract(a, b))
print("Multiply:", custommath.multiply(a, b))
print("Divide:", custommath.divide(a, b))



# 6. Build a command-line utility using `argparse` to perform arithmetic operations.
# diff file



# 7. Create and use a package with multiple modules in it.
from mycalc import addmod, submod

print(addmod.add(4,5))
print(submod.sub(4,5))


# 8. Develop a program that uses `os` and `sys` modules to list files and command-line args.
import os
import sys

print("\nCommand-line arguments:")
for arg in sys.argv:
    print(arg)
print("Files in current directory:")
for f in os.listdir():
    print(f)


#  9. Use `importlib` to dynamically import a module and invoke a function.
import importlib

module_name = "math"  
math_module = importlib.import_module(module_name)

print(math_module.sqrt(16)) 


# 10. Implement a Python script that uses `glob` to search for all `.txt` files in a directory.

import glob

txt_files = glob.glob("*.txt")
print("Text files in current directory:")
for file in txt_files:
    print(file)