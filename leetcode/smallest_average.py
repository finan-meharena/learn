"""
write a function named smallest_average(person1: dict, person2: dict, person3: dict), which takes three dictionary objects as its arguments.

Each dictionary object contains values mapped to the following keys:

"name": The name of the contestant
"result1": the first result of the contestant (an integer between 1 and 10)
"result2": the second result of the contestant (as above)
"result3": the third result of the contestant (as above)
The function should calculate the average of the three results for each contestant, and then return the contestant whose average result was the smallest. The return value should be the entire dictionary object containing the contestant's information.

You may assume there will be no ties, i.e. a single contestant will have the smallest average result.

An example of the function in action:

person1 = {"name": "Mary", "result1": 2, "result2": 3, "result3": 3}
person2 = {"name": "Gary", "result1": 5, "result2": 1, "result3": 8}
person3 = {"name": "Larry", "result1": 3, "result2": 1, "result3": 1}

print(smallest_average(person1, person2, person3))
Sample output
{'name': 'Larry', 'result1': 3, 'result2': 1, 'result3': 1}

"""

def smallest_average(person1: dict,person2: dict, person3: dict):
    list_of_objects = [person1, person2, person3]
    list_of_means = []
    for pers_obj in list_of_objects:
        list_of_means.append(((pers_obj["result1"] + pers_obj["result2"] + pers_obj["result3"]) / 3))
    # print(list_of_means)
    index_of_minimum = list_of_means.index(min(list_of_means))
    # print(index_of_minimum)
    return list_of_objects[index_of_minimum]


person1 = {"name": "Mary", "result1": 2, "result2": 3, "result3": 3}
person2 = {"name": "Gary", "result1": 5, "result2": 1, "result3": 8}
person3 = {"name": "Larry", "result1": 3, "result2": 1, "result3": 1}

print(smallest_average(person1, person2, person3))

# more efficent way (accoridn to ChatGPT)
def smallest_average(person1: dict, person2: dict, person3: dict):
    def average(person):
        return (person["result1"] + person["result2"] + person["result3"]) / 3
    # Get the person with the smallest average
    return min([person1, person2, person3], key=average)


# Test data
person1 = {"name": "Mary", "result1": 2, "result2": 3, "result3": 3}
person2 = {"name": "Gary", "result1": 5, "result2": 1, "result3": 8}
person3 = {"name": "Larry", "result1": 3, "result2": 1, "result3": 1}

print(smallest_average(person1, person2, person3))
