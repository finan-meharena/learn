class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next
        
    
class LinkedList:
    def __init__(self):
        self.head = None
        
    def insert_at_begining(self, data):
        node = Node(data, self.head)
        self.head = node
        
    def print(self):
        if self.head is None:
            return print("Linked list is empty")
        itr = self.head
        llstring = ""
        
        while itr:
            llstring += str(itr.data) + "-->"
            itr = itr.next
            print(llstring)
            
    def insert_at_end(self, data):
        if self.head is None:
            self.head = Node(data, None)
            return
        itr = self.head
        while itr.next:
            itr = itr.next
        itr.next = Node(data, None)
            
if __name__ =="__main__":
    linkedList = LinkedList()
    linkedList.insert_at_begining(5)
    linkedList.insert_at_begining(89)
    linkedList.insert_at_end(99)
    linkedList.print()