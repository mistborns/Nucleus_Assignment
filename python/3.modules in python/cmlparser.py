import argparse

parser = argparse.ArgumentParser()
parser.add_argument("a", type=float)
parser.add_argument("b", type=float)
parser.add_argument("op", choices=['add', 'sub', 'mul', 'div'])

args = parser.parse_args()

if args.op == 'add':
    print(args.a + args.b)
elif args.op == 'sub':
    print(args.a - args.b)
elif args.op == 'mul':
    print(args.a * args.b)
elif args.op == 'div':
    print(args.a / args.b)
