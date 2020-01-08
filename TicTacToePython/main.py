from Tkinter import *

class Spot:

    def __init__(self,row,col):
        self.row = row
        self.col = col
        self.shape = 0
        
spots = []
        
for r in range(3):
    spots.append([])
    for c in range(3):
        spots[r].append(Spot(r,c))

for r in spots:
    for c in r:      
        print(c.row,c.col,c.shape)


root = Tk()
frame = Frame(root)
frame.pack()

bottomframe = Frame(root)
bottomframe.pack( side = BOTTOM )

redbutton = Button(frame, text="Red", fg="red")
redbutton.pack( side = LEFT)

greenbutton = Button(frame, text="Brown", fg="brown")
greenbutton.pack( side = LEFT )

bluebutton = Button(frame, text="Blue", fg="blue")
bluebutton.pack( side = LEFT )

blackbutton = Button(bottomframe, text="Black", fg="black")
blackbutton.pack( side = BOTTOM)

root.mainloop()

