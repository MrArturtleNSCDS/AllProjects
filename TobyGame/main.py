import random
import time
print("(Note:you must use caps to awnser correctly.)")
time.sleep(4)
print("You were on a plane to Greenland, but just then the plane crashed into a lush Forest.")
time.sleep(4)
option=raw_input("You can salvage Metal Scraps from the plane. Will you? Y/N ")

if option=="Y":
    print("You take the 5 Metal Scraps.")
    Met=0
    Met+=5
elif option=="N":
    print("You leave the Metal Scraps.")
    Met=0
else:
    print("You take 2 of the Metal Scraps.")
    Met=0
    Met+=2
option=raw_input("Some Sticks are left on the ground. Will you take them? Y/N ")

if option=="Y":
    print("You take the two Sticks.")
    Stik=0
    Stik+=2
elif option=="N":
    print("You leave the Sticks.")
    Stik=0
else:
    print("You take one of the Sticks.")
    Stik=0
    Stik+=1

option=raw_input("Sunset approaches, you need a Fire, which you need Logs to get, which you need an Axe to chop. You need 2 Sticks and 3 Metal Scraps to make an Axe. You have {} Sticks and {} Metal Scraps. Will you make it? Y/N ".format(Stik,Met))

if option=="Y":
    if Met>=3 and Stik>=2:
        print("You crafted the Axe, chopped down a tree, and started a Fire.")
        Hurt=0
        Log=0
        Log+=4
        Stik-=2
        Stik+=1
        Met-=3
        AxeDur=0
        AxeDur+=95
        Fire=0
        Fire+=1
    else:
        print("You don't have the resources.")
        Hurt=0
        Log=0
        AxeDur=0
        Fire=0
elif option=="N":
    Hurt=0
    Log=0
    AxeDur=0
    Fire=0
    print("You went without a Fire.")
else:
    if Met>=1:
        print("You tried to stab a tree with a piece of Scrap Metal, The Metal broke, but you got a Stick.")
        Hurt=0
        Log=0
        AxeDur=0
        Fire=0
        Met-=1
        Stik+=1
    else:
        print("A Stick fell and bonked you on the head.")
        Hurt=0
        Log=0
        AxeDur=0
        Fire=0
        Stik+=1
        Hurt+=1
option=raw_input("You may go to sleep. Will you? Y/N ")

if option=="Y":
    if Fire>=1:
        print("You put the Fire out and head to sleep.")
        Tire=0
        Fire-=1
    else:
        print("You went to sleep.")
        Tire=0
elif option=="N":
    print("You stay up and get attacked by a bear.")
    Tire=0
    Hurt+=5
    Tire+=4
else:
    print("You stay up and chop some trees.")
    Log+=20
    Stik+=3
    Tire=0
    Tire+=3
    AxeDur-=20
print("The day arrives after a long night.")
time.sleep(3)
option=raw_input("You find a wolf. Will you attack it? Y/N ")

if option=="Y":
    print("You attack the wolf and get badly hurt.")
    Meat=0
    Meat+=1
    Fur=0
    Fur+=1
    Hurt+=7
elif option=="N":
    print("You ran away from the wolf.")
    Meat=0
    Fur=0
    Tire+=1
else:
    print("you tore a patch of the wolf's Fur off and ran away.")
    Meat=0
    Fur=0
    Fur+=2
    Tire+=1
option=raw_input("You find a small Tavern. The prices are unknown. Will you go in? Y/N ")

if option=="Y":
    if Fur>=1:
        print("You head in and trade 1 Fur for a Beer.")
        Fur-=1
        Hydration=0
        Hydration+=1
    else:
        print("You ask for a Beer discount, but you don't get anything, all you do is start a fight.")
        Hydration=0
        Hurt+=3
elif option=="N":
    print("You head around the back of the Tavern and steal aa jug of water.")
    Hydration=0
    Hydration+=1
else:
    print("You walk away")
    Hydration=0
option=raw_input("A path leads out of the Forest into a Swamp. This is where most of the trees fade. Would you like to chop down some trees? You already have {} Logs and {} Sticks. Y/N ".format(Log,Stik))

if option=="Y":
    if AxeDur>50:
        print("You chop down some trees.")
        AxeDur-=50
        Log+=40
        Stik+=12
    elif AxeDur>25:
        print("You chop down a few trees.")
        AxeDur-=25
        Log+=22
        Stik+=6
    else:
        print("You rethought about it and decided to not chop any trees.")
elif option=="N":
    print("You walk onwards.")
else:
    print("You pick up a Stick before you leave.")
    Stik+=1
print("When you enter the Swamp, you see a rickety house to spend the night in. You go inside since you don't want to waste wood on a fire.")
time.sleep(7)
option=raw_input("An old man asks for a donation of two Logs and a Stick. You have {} Logs and {} Sticks. Do you give him the items? Y/N ".format(Log,Stik))

if option=="Y":
    if Log>=2 and Stik>=1:
        print("The old man gives you 1 piece of Fur in return then leaves.")
        Log-=2
        Stik-=1
        Fur+=1
    else:
        print("You told the man that you didn't have the resources and the man looks down sadly and leaves quietly.")
if option=="N":
    print("You told the old man you wouldn't give him the resources and he punched you.")
    Hurt+1
else:
    print("You told the old man that he could join you to head back into the modern world, but the old man turns the offer down and heads out of the house.")
print("You head to sleep.")
Tire-=1
if Tire<0:
    Tire=0
time.sleep(4)
print("You wake up and head outside.")
time.sleep(3)
option=raw_input("You see an Ogre attacking a Donkey. Will you attack it? Y/N ")
if option=="Y":
    num=random.randrange(1,Tire+3-Hydration)
    if num==1:
        print("You won the battle, sadly the Donkey died in the fight.")
        Meat+=2
        Cloth=0
        Cloth+=6
        Log+=1
    elif num>1:
        print("You lost the battle.")
        Cloth=0
        Hurt+=10
elif option=="N":
    print("You walked away silently")
    Cloth=0
else:
    print("You threw a Stick at the Donkey.")
    Stik-=1
    Cloth=0
option=raw_input("You walk through the Swamp and find yourself come to a muddy pit. You have to cross it or find a detour. Will you cross it? Y/N ")
if option=="Y":
    Hydration=0
    print("You walk through the mud, but lose half of your Logs and Sticks")
    Log=Log/2
    Stik=Stik/2
elif option=="N":
    Hydration=0
    print("You walk around the mud and encounter a Man with a Crazed look in his eyes. You have to fight him since you the only other way is through the mud.")
    num=random.randrange(1,Tire+3-Hydration)
    if num==1:
        print("You won the battle.")
        Stik+=5
        Hydration+=1
    elif num>1:
        print("You lost the battle.")
        Hurt+=7
else:
    print("You ran past him")
    Tire+=1
option=raw_input("You run into an old man begging you for 5 Logs. You have {} Logs. Will you give them to him? Y/N ".format(Log))

if option=="Y":
    if Log>=5:
        print("You gave the old man the 5 Logs, in return he gave you 2 fur and 2 meat.")
        Log-=5
        Fur+=2
        Meat+=2
    elif Log<5:
        print("You told the old man that you didn't have the resources. He punches you lightly.")
        Hurt+=1
elif option=="N":
    print("You didn't give the man the resources and he punched you harshly.")
    Hurt+=5
else:
    print("What you said made no sense to the old man, so he punched you.")
    Hurt+=3
option=raw_input("You found a roofless house to sleep in. Will you? Y/N ")

if option=="Y":
    print("You head to sleep")
    Tire-=1
elif option=="N":
    print("You stay up and plan for tommorow")
    Tire+=3
else:
    print("You stay up for 3 hours before heading to sleep")
    Tire+=1

if Tire<0:
    Tire=0
print("Another day, another chance to get home.")
option=raw_input("You come across a Troll. Will you fight it? Y/N ")

if option=="Y":
    num=random.randrange(1,Tire+3-Hydration)
    if num==1:
        print("You won the battle.")
        Cloth+=3
        Meat+=1
    if num>1:
        print("You lost the battle.")
        Hurt+=5
elif option=="N":
    print("You run past the Troll, tearing it's shirt.")
    Tire+=1
    Cloth+=1
option=raw_input("You come across a Tavern. You know It's price for a Beer is 1 Fur, you have {} Fur. Will you go in? Y/N ".format(Fur))

if option=="Y":
    if Fur>=1:
        Hydration=0
        print("You bought a Beer.")
        Fur-=1
        Hydration+=1
    elif Fur<1:
        Hydration=0
        print("You remembered that you didn't have enough fur.")
elif option=="N":
    Hydration=0
    print("You kept going forwards.")
else:
    print("You knocked on the taverns door, then kept going ownwards.")
option=raw_input("You head forwards and start to feel hungry. You have {} Meat, will you eat the Meat? Y/N ".format(Meat))

if option=="Y":
    if Meat>=1:
        print("You ate the Meat.")
        Hung=0
        Hung+=1
        Meat-=1
    elif Meat<1:
        print("You pretended to eat Meat.")
        Tire+=1
        Hung=0
elif option=="N":
    print("You didn't eat anything.")
    Hung=0
    Hurt+=1
else:
    print("You pretended to drink Water.")
    Hung=0
    Tire+=1
print("The swamps ends to meet a cave. you see a glint and decide to go in.")
option=raw_input("The cave is Dark, it seems like a good time to sleep. Will you? Y/N ")

if option=="Y":
    print("You head to sleep")
    Tire-=1
    Torch=0
elif option=="N":
    option=raw_input("You can make a Torch with a Fire and a Stick. You need 3 Logs and a Stick. You have {} Logs and {} Sticks. Will you? Y/N ".format(Log,Stik))
    if option=="Y":
        print("You make a Torch and wander around the cave.")
        Torch=0
        Torch+=1
        Tire+=3
    elif option=="N":
        print("You decide to wander around the cave without the torch.")
        Torch=0
        Tire+=3
    else:
        print("You decide to head to sleep.")
        Tire-=1
else:
    print("You pick up a rock and throw it out of the cave. Then you head to sleep.")
    Tire-=1
if Tire<0:
    Tire=0
option=raw_input("You see a Giant Spider in the morning. Will you fight it? Y/N ")

if option=="Y":
    num=random.randrange(1, (Tire+4-Hydration)-Hung)
    if num==1:
        print("You won the battle!")
    elif num>1:
        print("You lost the battle.")
        Hurt+=3
elif option=="N":
    print("You run past it and step on it.")
    Tire+=1
else:
    print("You had a staring contest. (The Giant Spider Won.)")

print("You find some Sticks. You pick them up, since you are low on Wood.")
Stik+=3
option=raw_input("You find some Iron. You can now make a Pickaxe with that iron and two Sticks. You have {} Sticks. Will you make a Pickaxe? Y/N ".format(Stik))
Iron=0
Iron+=3

if option=="Y":
    if Stik>=2 and Iron>=3:
        Hydration=0
        print("You made a Pickaxe!")
        PickDur=0
        PickDur+=150
        Stik-=2
        Iron-=3
    elif Stik<2 and Iron<3:
        print("You pretended to make a pickaxe since you didn't have the matierials.")
        Hydration=0
        PickDur=0
elif option=="N":
    print("You didn't make a pickaxe.")
    Hydration=0
    PickDur=0
else:
    if Stik>=1 and Iron>=2:
        print("You made half of a pickaxe.")
        Hydration=0
        PickDur=0
        PickDur+=75
        Stik-=1
        Iron-=2
    elif Stik<1 and Iron<2:
        print("You continued on your journey.")
        Hydration=0
        PickDur=0
if PickDur>=50:
    print("You mined some Iron")
    Iron+=5
    PickDur-=50
option=raw_input("You can make a torch to light up the dark cave. You need 2 Pieces of Iron and 1 Stick. You have {} Pieces of Iron and {} Sticks. Will you make one? Y/N ".format(Iron,Stik))

if option=="Y":
    if Stik>=1 and Iron>=2:
        Hung=0
        print("You ignited the Stick by creating Sparks with the Iron.")
        Stik-=1
        Torch+=1
    elif Stik<1 and Iron<2:
        Hung=0
        print("You didnt have the needed items.")
elif option=="N":
    print("You went on trusting your eyes.")
    Hung=0
else:
    Hung=0
    print("You thought about food.")
option=raw_input("You found a safe place to sleep. Will you? Y/N ")
if option=="Y":
    if Torch>=1:
        print("You put out your torch and went to sleep.")
        Torch-=1
        Tire-=1
        print("You relit the Torch inn the morning.")
        Torch+=1
    elif Torch<1:
        print("You went to sleep.")
        Tire-=1
elif option=="N":
    print("You explored the cave and ran into another Giant Spider. It attacks you.")
    num=random.randrange(1,((Tire+5-Hydration)-Hung)-Torch)
    if num==1:
        print("You won the battle!")
        Tire+=3
    if num>=1:
        print("You lost the battle.")
        Tire+=4
        Hurt+=7
else:
    print("You stayed up a little bit to plan for tommorow. Then you put out your Torch.")
    Tire+=1
    Torch-=1
    print("In the morning you relit your torch.")
    Torch+=1
if Tire<0:
    Tire=0

print("After a long night the day arrives. Along with 5 Giant Spiders. There are too many to run past.")

Battle=0
while Battle<5:
    num=random.randrange(1,((Tire+5-Hydration)-Hung)-Torch)
    if num==1:
        print("You won 1 battle.")
        time.sleep(2)
        Meat+=1
        Battle+=1
    elif num>1:
        print("You lost 1 battle.")
        Hurt+=5
        time.sleep(2)
        Battle+=1
print("After fighting the Spiders you feel kinda Tired.")
Tire+=2
option=raw_input("You find a wooden chair. It'd be a good place to rest. Will you? Y/N ")

if option=="Y":
    Hydration=0
    print("You took a short nap in the chair.")
    Tire-=1
elif option=="N":
    Hydration=0
    print("You Scrap the chair for wood.")
    Log+=1
    Stik+=4
else:
    Hydration=0
    print("You walk past the chair.")
if Tire<0:
    Tire=0
option=raw_input("The Cave ends here, would you like to get some last minute Iron? You already have {} Iron Pieces. Y/N ".format(Iron))

if option=="Y":
    if PickDur>=100:
        Hung=0
        print("You mined 10 Iron.")
        Iron+=10
    elif PickDur==25:
        Hung=0
        print("You mined 2 Iron")
        Iron+=2
elif option=="N":
    Hung=0
    print("You headed onwards")
else:
    Hung=0
    print("You remembered the cave, before heading onwards.")

if PickDur==0:
    print("Your Pickaxe broke.")
    time.sleep(2)

print("You look out and see the clouds. Then look down and realize that you are on a mountain.")
time.sleep(4)
option=raw_input("The surface you are on is quite flat and the peak. This seems to be a good place to sleep. Will you? Y/N ")

if option=="Y":
    print("You headed to sleep on the flat peak of the mountain.")
    Feather=0
    Tire-=1
    Feather=0
elif option=="N":
    num=random.randrange(1,3)
    if num==1:
        num=random.randrange(1,(Tire+4-Hydration)-Hung)
        print("A bird attacks you!")
        time.sleep(1)
        if num==1:
            print("You won the fight!")
            Meat+=2
            Feather=0
            Feather+=3
            Tire+=3
        elif num>1:
            print("You lost the fight.")
            Feather=0
            Hurt+=3
            Tire+=4
    elif num==2:
        print("You walk around, pick up a rock, and throw it off the edge. It sounds like a long way down.")
        Tire+=3
        Feather=0
else:
    print("You plan out for tommorow and then head to sleep.")
    Tire+=1
    Feather=0
if Tire<0:
    Tire=0

print("In the Morning you start your long trek down the mountain.")
option=raw_input("A Vulture confronts you. Will you fight it? Y/N ")

if option=="Y":
    num=random.randrange(1,(Tire+4-Hydration)-Hung)
    if num==1:
        print("You won the battle!")
        Feather+=2
        Meat+=1
    elif num>1:
        print("You lost the battle")
        Hurt+=5
        Feather+=1
elif option=="N":
    print("You run past the Vulture.")
    Tire+=1
else:
    print("You tear a feather off of the Vulture, then run past it")
    Tire+=1
    Feather+=1

print("After confronting the Vulture you run into a mountain side Restaurant")
option=raw_input("You could probably get something to eat. The prices are unknown. Will you head in? Y/N ")

if option=="Y":
    if Feather>=2 and Fur>=2:
        print("You got an Espresso and Chicken Burger")
        Hydration=0
        Hydration+=1
        Hung=0
        Hung+=1
        Feather-=2
        Fur-=2
    elif Feather<2 or Fur<2:
        print("You read the prices and turned around.")
        Hydration=0
        Hung=0
elif option=="N":
    Hydration=0
    Hung=0
    print("You kept on treking.")
else:
    print("You threw a rock through the window then skidaddled.")
    Hydration=0
    Hung=0
option=raw_input("You kept on treking down, but then the terrain got a little rougher. Will you take a detour? Y/N ")

if option=="Y":
    print("You took a detour, through a much smoother area.")
    Tire+=1
elif option=="N":
    print("You tripped on the pathway and got bruised.")
    Hurt+=5
else:
    print("You were stupid and decided to jump off the path.")
    Hurt+=9

option=raw_input("You find a Giant Bird's nest. The mother is there and sees you as a possible food source for her babies. Will you fight her? Y/N ")

if option=="Y":
    num=random.randrange(1,(Tire+4-Hydration)-Hung)
    if num==1:
        print("You won the battle!")
        Meat+=3
        Feather+=4
    elif num>1:
        print("You lost the battle.")
        Hurt+=8
elif option=="N":
    print("You ran past the mother.")
    Tire+=1
else:
    print("You made a face at the mother. She didn't like it.")
    Hurt+=5

option=raw_input("Night falls. You find a Huge broken egg to sleep in. Will you? Y/N ")

if option=="Y":
    print("You head to sleep")
    Tire-=1
elif option=="N":
    num=random.randrange(1,2)
    if num==1:
        print("You stay up planning out tommorow.")
        Tire+=3
    elif num==2:
        option=raw_input("You encounter a Vulture! Will you attack it? Y/N ")
        if option=="Y":
            num=random.randrange(1,(Tire+4-Hydration)-Hung)
            if num==1:
                print("You won the battle!")
                Meat+=2
                Feather+=3
                Tire+=4
            elif num>1:
                print("You lost the battle.")
                Hurt+=2
                Tire+=4
        elif option=="N":
            print("You slowly backed away from the vulture.")
            Tire+=3
        else:
            print("You have a staring competition with the vulture")
            Tire+=4
else:
    print("You think about how far you've gone on this journey, then head to sleep.")
    Tire+=1

if Tire<0:
    Tire=0

print("You head out for an adventure. You can smell the sea, so you know you're close.")
option=raw_input("You Run down the mountain, but then come to a cliff side. Will you jump. Y/N ")

if option=="Y":
    print("You jumped and were slightly hurt. You only fell a story.")
    Hurt+=5
elif option=="N":
    print("You found a detour, but it was hours away.")
    Tire+=1
else:
    print("You thought on it for a while. Then found a short detour")
    Tire+=1

option=raw_input("You found a Tavern. The Beer looks expensive. So it probably costs 3 Feathers. You have {} Feathers. Will you go in? Y/N ".format(Feather))

if option=="Y":
    if Feather>=3:
        print("You bought a Special Beer.")
        Hydration=0
        Hydration+=1
    elif Feather<3:
        print("You looked at the price and wondered why you came in.")
        Hydration=0
elif option=="N":
    print("You keep going, not minding the Tavern.")
    Hydration=0
else:
    ("You look inside and think about that delicious Beer. You keep heading onwards.")
    Hydration=0

option=raw_input("You find a Huge Vulture. Will you attack it? Y/N ")

if option=="Y":
    num=random.randrange(1,(Tire+4-Hydration)-Hung)
    if num==1:
        print("You won the battle!")
        Meat+=5
        Feather+=5
        Hung=0
    elif num>1:
        print("You lost the battle.")
        Hurt+=15
        Hung=0
elif option=="N":
    print("You ran as fast as possible to just barely pass the Vulture.")
    Tire+=3
    Hung=0
else:
    print("You ran, but got pecked by the Vulture once.")
    Hurt+=4
    Tire+=1
    Hung=0
print("You are almost at the bottom of the Mountain.")
option=raw_input("You can quickly run down or slowly walk down. Will you run? Y/N ")

if option=="Y":
    print("You quickly ran down.")
    Tire+=2
elif option=="N":
    print("You slowly walked down. (Please wait 60 Seconds.)")
    time.sleep(60)
else:
    print("You ran down.(Please wait 20 seconds.)")
    time.sleep(20)
print("You make it to the bottom of the Mountain.")
option=raw_input("Night falls. You know you're getting close to the end of your journey. Will you sleep? Y/N ")

if option=="Y":
    print("You headed to sleep.")
    Tire-=1
elif option=="N":
    print("You decided to plan for tommorow. Since it might be your last day that you are lost.")
    Tire+=3
else:
    print("You stay up for a little bit and wonder about what'll happen tommorow.")
    Tire+=1

if Tire<0:
    Tire=0

RL=True
while RL:
    option=raw_input("You come across a split path. To the Right is a Snowy Field. To the left is a Lake. Will you go Right or Left. R/L ")
    if option=="R":
        RL=False
        print("You head to the Right. Snow is evverywhere. You decide to make a couple of snowballs for later.")
        option=raw_input("You find an Ice Golem. Will you fight it? Y/N ")
        if option=="Y":
            num=random.randrange(1,(Tire+4-Hydration)-Hung)
            if num==1:
                print("You won the battle!")
            elif num>1:
                print("You lost the battle.")
                Hurt+=13
        elif option=="N":
            print("You lookeed around and decided to run past it.")
            Tire+=1
        else:
            print("You backed away slowly.")
        option=raw_input("The next stretch of path is through a cave filled with icicles. Decide to break one off. It was quite hard so would you like to find a detour? Y/N ")
        if option=="Y":
            print("You found a safe detour not to far away.")
            Tire+=1
        elif option=="N":
            print("You went throught the icicles.")
            Hurt+=8
        else:
            print("You precautiously went through the icicles.")
            Tire+=1
        option=raw_input("You find a Tavern. You look in and see that the price is 1 Cloth for a Beer. You have {} Cloth. Will you go in. Y/N ".format(Cloth))

        if option=="Y":
            if Cloth>=1:
                Hydration=0
                print("You had a Beer.")
                Hydration+=1
                Cloth-=1
            elif Cloth<1:
                print("You asked for a free Beer and started a fight")
                Hydration=0
                Hurt+=4
        elif option=="N":
            print("You headed onwards.")
            Hydration=0
        else:
            Hydration=0
            print("You looked inside wondering how your thirst would be quenched.")
        option==raw_input("You find some Frozen Berries. Will you eat them? Y/N ")

        if option=="Y":
            num=random.randrange(1,3)
            if num==1:
                Hung=0
                print("You ate the Completely Normal Berries.")
                Hung+=1
            elif num==2:
                Hung=0
                print("You ate the Poisonous Berries.")
                Hurt+=5
                Hung+=1
        elif option=="N":
            num=random.randrange(3,5)
            if num==3:
                Hung=0
                print("You smashed the Completely Normal Berries.")
            elif num==4:
                Hung=0
                print("You smashed the Poisonous Berries.")
        else:
            Hung=0
            print("You looked at the berries. Wondering why they were here.")

        option=raw_input("A Snow Golem comes close. Will you fight it? Y/N ")

        if option=="Y":
            num=random.randrange(1,(Tire+4-Hydration)-Hung)
            if num==1:
                print("You won the battle.")
            elif num>1:
                print("You lost the battle.")
                Hurt+=5
        elif option=="N":
            print("You ran past the Snow Golem.")
            Tire+=1
        else:
            print("You had a nice chat with the Snow Golem.")

        print("You take a large piece of ice with you as a memory.")
        option=raw_input("Night falls. Will you sleep? Y/N ")

        if option=="Y":
            print("You went to sleep and dreamt of getting home.")
            Tire-=1
        elif option=="N":
            num=randm.randrange(1,3)
            if num=="1":
                print("You stayed up and planned for tommorow, since you knew it was the final day that you would be lost.")
                Tire+=3
            elif num=="2":
                option=raw_input("You ran into an Evil Snowman. Will you fight it? Y/N ")
                if option=="Y":
                    num=random.randrange(1,(Tire+4-Hydration)-Hunger)
                    if num=="Y":
                        print("You won the battle!")
                        Tire+=3
                        Cloth+=1
                    elif num=="N":
                        print("You lost the battle.")
                        Tire+=3
                        Hurt+=6
                elif option=="N":
                    print("You walked back to were you were.")
                    Tire+=3
                else:
                    print("You sang with The Snowman and made him nice!")
        else:
            print("You stayed up for a little while wondering what would happen tommorow.")
            Tire+=1
        if Tire<0:
            Tire=0
        print("In the morning you entered a Village")
        Water=0
        Snow=0
        Snow+=1
    elif option=="L":
        RL=False
        print("You found a boat and paddle and rode down the lake in it.")
        option=raw_input("You came to a water fall. Will you take a detour? Y/N ")

        if option=="N":
            print("You went down the waterfall.")
            Hurt+=15
        elif option=="Y":
            print("You found a detour not to far away.")
            time.sleep(2)
            Tire+=1
        else:
            print("You looked around before you found a detour")

        print("You found a Chipped Machete.")
        option=raw_input("A Sea Serpent confronts you. Will you fight it? Y/N ")

        if option=="Y":
            num=random.randrange(1,(Tire+4-Hydration)-Hung)
            if num==1:
                print("You won the battle!")
                Hydration=0
            elif num>1:
                print("You lost the battle.")
                Hydration=0
                Hurt+=15
        elif option=="N":
            print("You boated past it quickly.")
            Hydration=0
            Tire+=1
        else:
            print("You had a nice chat with the Sea Serpent.")
            Hydration=0
        option=raw_input("You came across a dock with a Restaurant. The prices seem to be 10 Logs for a meal. You have {} Logs. Will you go in? Y/N ".format(Log))

        if option=="Y":
            if Log>=10:
                print("You had and Espresso and Serpent Burger")
                Hung=0
                Hydration+=1
                Hung+=1
            elif Log<10:
                print("You decided to keep going")
                Hung=0
        elif option=="N":
            print("You headed forwards.")
            Hung=0
        else:
            Hung=0
            print("You decided to look around for another food source.")

        print("You find a Super Soaker in the Lake.")
        option=raw_input("You find a Giant Pirahna. Will you fight it? Y/N ")

        if option=="Y":
            num=random.randrange(1,(Tire+4-Hydration)-Hung)
            if num==1:
                print("You won the battle!")
            elif num>1:
                print("You lost the battle.")
                Hurt+=15
        elif option=="N":
            print("You quickly paddled past it.")
            Tire+=1
        else:
            print("You decided to punch the Pirahna, then paddle past it.")

        option=raw_input("You arrived at land. Would you like to sleep? Y/N ")

        if option=="Y":
            print("You slept well.")
            Tire-=1
        elif option=="N":
            num=random.randrange(1,3)
            if num==1:
                print("You planned out tommorow since you knew it would be your last day lost.")
                Tire+=3
            elif num==2:
                print("You came across an Earthly being. It attacks you.")
                num=random.randrange(1,(Tire+4-Hydration)-Hung)
                if num==1:
                    print("You won the battle")
                    Stik+=2
                elif num>1:
                    print("You lost the battle")
                    Hurt+=9
        else:
            print("You stayed awake for a little bit wondering what will happen tommorow.")
            Tire+=1

        if Tire<0:
            Tire=0
        print("After the night you found a Village and entered it.")
        Water=0
        Snow=0
        Water+=1

option=raw_input("A Guard Villager Confronts you. Will you attack them? Y/N ")

if option=="Y":
    num=random.randrange(1,(Tire+4-Hydration)-Hung)
    if num==1:
        print("You won the battle!")
    elif num>1:
        print("You lost the battle")
        Hurt+=20
elif option=="N":
    print("You talked the situation over with the Guard and he let's you pass.")
else:
    print("You tried to run past the Guard and he stabbed you.")
    Hurt+=13

print("After passing the guard you look around the Village.")
option=raw_input("A Poorly looking Villager asks you for A donation of 2 Feathers. You have {} Feathers. Will you give them to him? Y/N ".format(Feather))

if option=="Y":
    if Feather>=2:
        print("The Poor Villager thanks you and gives you 1 Log.")
        Feather-=2
        Log+=1
    elif Feather<2:
        print("You told the Poor Villager that you can't spare the matierials.")
        print("The Villager gave you a sad face.")
elif option=="N":
    print("You turned your back to the Villager.")
else:
    print("You told the Villager Sorry.")

print("You take a final look around the Village before you continue your journey.")
time.sleep(2)
print("You keep heading on your journey.")
time.sleep(1)
print("you come to a dock and the FBI confront you.")
time.sleep(2)
print("The FBI said they crahsed the plane and are here to stop you.")
time.sleep(2)

if Snow==1:
    LRDur=10
    SRDur=3
    BHP=100
    while BHP>0:
        SHi=0
        option=raw_input("You can either Stab them with an icicle, Barrage them with Snowballs, or Use your Ice Shield. (SR stands for Short Range, LR Longrange, SH Shield.) SR/LR/SH ")
        if option=="SR":
            if SRDur>0:
                BHP-=7
                print("You stabbed the FBI, they are down to {} Health.".format(BHP))
                SRDur-=1
                if SRDur==0:
                    print("The Icicle broke.")
        elif option=="LR":
            if LRDur>0:
                BHP-=10
                print("You threw a barrage of Snowballs at the FBI, they are down to {} Health.".format(BHP))
                LRDur-=1
                if LRDur==0:
                    print("You ran out of Snowballs.")
        elif option=="SH":
            print("You put up your Ice Shield.")
            SHi+=1
        else:
            print("You were stupid and did nothing")
        print("The FBI go.")
        FBI=random.randrange(1,4)
        if FBI==1:
            print("The FBI shot you.")
            Hurt+=30
            if SHi==1:
                Hurt-=30
                SHi-=1
        elif FBI==2:
            print("The FBI punched you.")
            Hurt+=10
            if SHi==1:
                Hurt-=10
                SHi-=1
        elif FBI==3:
            print("The FBI Kicked you.")
            Hurt+=20
            if SHi==1:
                Hurt-=20
                SHi-=1
        time.sleep(4)
if Water==1:
    LRDur=4
    SRDur=9
    BHP=100
    while BHP>0:
        SHi=0
        option=raw_input("You can either Stab them with a Chipped Machete, Squirt them with a Super Soaker, or Use your Boat as a Shield. (SR stands for Short Range, LR Longrange, SH Shield.) SR/LR/SH ")
        if option=="SR":
            if SRDur>0:
                BHP-=10
                print("You stabbed the FBI, they are down to {} Health.".format(BHP))
                SRDur-=1
                if SRDur==0:
                    print("The Machete Broke.")
        elif option=="LR":
            if LRDur>0:
                BHP-=2.5
                print("You Squirted the FBI, they are down to {} Health.".format(BHP))
                LRDur-=1
                if LRDur==0:
                    print("You ran out of Water.")
        elif option=="SH":
            print("You put up your Boat Shield.")
            SHi+=1
        else:
            print("You were stupid and did nothing")
        print("The FBI go.")
        FBI=random.randrange(1,4)
        if FBI==1:
            print("The FBI shot you.")
            Hurt+=30
            if SHi==1:
                Hurt-=30
                SHi-=1
        elif FBI==2:
            print("The FBI punched you.")
            Hurt+=10
            if SHi==1:
                Hurt-=10
                SHi-=1
        elif FBI==3:
            print("The FBI Kicked you.")
            Hurt+=20
            if SHi==1:
                Hurt-=20
                SHi-=1
        time.sleep(4)

print("You won the battle against the FBI.")
time.sleep(1)
print("You find a boat and a map.")
time.sleep(1)
print("You find out you are on an island.")
time.sleep(1)
print("You boat home.")
print("The End.")
print("You took {} Damage throughout the whole game!".format(Hurt))