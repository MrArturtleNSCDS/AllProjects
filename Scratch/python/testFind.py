someString = "Hello how are you. It was really nice to see you."

vowels = "aeiou"
consonants = "bcdfghjklmnpqrstvwyz"

vowelCount = 0
consonantCount = 0

for l in vowels:
    vowelCount += someString.count(l)
    
for l in consonants:
    consonantCount += someString.count(l)

print(vowelCount)
print(consonantCount)