import random

suits = ['heart','spade','club','diamond']
values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

class card:
    def __init__(self,suit,value,rank):
        self.suit = suit
        self.value = value
        self.rank = rank
    def card_print(self):
        return self.suit +' '+ self.value +' '+str(self.rank)
    def key(self):
        return self.rank

class deck:
    def __init__(self):
        self.all_cards = []
        self.shuffled_cards = []
        for suit in suits:
            for value in values:
                rank = values.index(value)
                self.all_cards.append(card(suit,value,rank))
    def deal(self):
        numbers = random.sample(range(len(self.all_cards)),5)
        #print("numbers" +  str(numbers))
        for i in numbers:
            self.shuffled_cards.append(self.all_cards[i])
        
        #print(self.toString());
        
        return self.shuffled_cards
    def toString(self):
        allCards = []
        for c in self.shuffled_cards:
            allCards.append(c.card_print())
        return allCards;

class hand:
    def __init__(self):
        self.hand1 = deck().deal()
        print("Dealt hand: " + self.print_hand())
    def deal_hand(self):
        return self.hand1
    def return_rank(self,card):
        return card.rank
    def sort_hand(self):
        self.hand1.sort(key=self.return_rank)
    def print_hand(self):
        allCards = []
        for c in self.hand1:
            allCards.append(c.card_print())
        return str(allCards);


user_hand = hand()

user_hand.sort_hand()

#.sort_hand()

#def print_card(held_hand):
#    for card in held_hand:
#       print(card.card_print())


#print_card(user_hand)