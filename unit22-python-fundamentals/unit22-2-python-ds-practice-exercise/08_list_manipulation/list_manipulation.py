def list_manipulation(lst, command, location, value=None):
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

    remove: remove item at beginning or end, and return item removed

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'remove', 'end')
        3

        >>> list_manipulation(lst, 'remove', 'beginning')
        1

    add: add item at beginning/end, and return list

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'add', 'beginning', 20)
        [20, 1, 2, 3]

        >>> list_manipulation(lst, 'add', 'end', 30)
        [20, 1, 2, 3, 30]

    Invalid commands or locations should return None:

        >>> list_manipulation(lst, 'foo', 'end') is None
        True

        >>> list_manipulation(lst, 'add', 'dunno') is None
        True
    """
    is_command = command == "remove" or command == "add"
    is_location = location == "beginning" or location == "end" 

    if is_command and is_location:
        if command == 'remove' and location == 'end':
            return lst.pop()
        elif command == 'remove' and location == 'beginning':
            return lst.pop(0)
        elif command == 'add' and location == 'beginning':
            lst.insert(0, value)
            return lst
        elif command == 'add' and location == 'end':
            lst.append(value)
            return lst
    else:
        return None       

print("should return 3 ----->,", list_manipulation([1, 2, 3], 'remove', 'end'))
print("should return 1 ----->,", list_manipulation([1, 2, 3], 'remove', 'beginning'))
print("should return [20, 1, 2, 3] ----->,", list_manipulation([1, 2, 3], 'add', 'beginning', 20))
print("should return [1, 2, 3, 30] ----->,", list_manipulation([1, 2, 3], 'add', 'end', 30))

