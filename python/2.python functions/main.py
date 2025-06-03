# 1. Write a function to calculate the factorial of a number (non-recursive).

def factorial(n):
    temp = 1
    for i in range(2,n + 1):
        temp *= i
    return temp

print(factorial(7))


# 2. Define a function that checks whether a string is a palindrome.
def palindrome(s):
    s = str(s)
    rev = s[::-1]
    return s == rev
print(palindrome("hello"))


# 3. Write a function that accepts a list and returns the sum and average of the numbers.
def sum_average(numbers):
    total = sum(numbers)
    average = total / len(numbers) if numbers else 0
    print(f"{total} is the total")
    print(f"{average} is the average")
numbers = [1,2,3,4]
sum_average(numbers)


# 4. Create a function that returns the nth Fibonacci number using recursion.
def fib(n):
    if(n == 0):
        return 0
    elif(n == 1):
        return 1
    else:
        return fib(n-2) +  fib(n - 1)
print(fib(16))


# 5. Define a function to count the number of vowels in a given string.
def vowel_count(s):
    count = 0
    vowels = "aeiouAEIOU"
    for i in range(len(s)):
        if( s[i] in vowels):
            count += 1
    return count
print(vowel_count("bomb"))


# 6. Implement a decorator that measures execution time of any function.
import time 

def time_decorator(function):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = function(*args, **kwargs)
        end = time.time()
        print(f"the exec time of the function is: {end - start:.6f} seconds")
        return result
    return wrapper

@time_decorator    
def demo():
    time.sleep(3)
    print("func exec")
demo()


# 7. Write a recursive function to solve the Tower of Hanoi problem.
def tower_of_hanoi(n, source, temp, target):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
    else:
        tower_of_hanoi(n - 1, source, target, temp)
        print(f"Move disk {n} from {source} to {target}")
        tower_of_hanoi(n - 1, temp, source, target)

n = int(input("Enter number of disks: "))
tower_of_hanoi(n, 'A', 'B', 'C')




# 8. Implement a function that uses variable-length arguments to sum any number of inputs.
def funct(*args):
    return sum(args)

print("sum is:",funct(1,2,3))


# 9. Write a function that flattens a nested list using recursion.
def flatten_list(nested_list):
    flat_list = []
    for item in nested_list:
        if isinstance(item, list): 
            flat_list.extend(flatten_list(item))
        else:
            flat_list.append(item)  
    return flat_list

nested_list = [1, [2, [3, 4], 5], [6, 7], 8]
print(flatten_list(nested_list))  


# 10. Implement a memoized version of the Fibonacci sequence
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

n = int(input("Enter the position (n) of Fibonacci number: "))
print(f"The {n}th Fibonacci number is:", fibonacci_memo(n))