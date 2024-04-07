from storage import save_to_storage, load_from_storage, get_user_paper_ids


a = 'user123'
b = 'POT80s'
c = "Joseph Gabrie is the best code in the existence of the planet"

def storage_test(test_paper_id, test_user_id, data):
    save_to_storage(test_paper_id, test_user_id, data)
    return load_from_storage(test_paper_id, test_user_id)

#print(load_from_storage(a,b))

print(storage_test(a,b,c))
print(get_user_paper_ids(a))

for element in get_user_paper_ids(a):
    print(element)
    print (load_from_storage(a, element))