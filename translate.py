from cs50 import get_string

vowels = ['a','e','i','o','u']
consonants = "bcdfghjklmnpqrstvwxyz"

string = get_string("Text: ").lower()

x = string.split()
new = []
stop=0

for w in x:
    if w[0] in vowels:
        new.append(w+"yay")
    else:
        for i in range(0,len(w)):
            if w[i] not in consonants:
                stop=i
                break
        new.append(w[stop:len(w)]+w[0:stop]+"ay")

print(x)
print(new)