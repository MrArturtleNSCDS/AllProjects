cast = ["Iron Man","Captain America","Wonder Woman","Cat Woman","Jessica Jones"];
heights = [72,68,72,66,76]

enumerated = enumerate(cast)
    
for i,person in enumerated:
    cast[i] = person + " " + str(heights[i]);
    
print(cast);