n = int(input())
k = 1
for i in range(0, n):
    for j in range(1, i + 2):
        print(k, end= " ")
        k += 2
    k = 1    
    print()