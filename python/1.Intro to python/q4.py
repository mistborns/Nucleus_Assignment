num = int(input("enter a no."))
rev = int(str(abs(num))[::-1])
if num < 0:
    rev = -rev
print(f"{num} when reversed {rev}")