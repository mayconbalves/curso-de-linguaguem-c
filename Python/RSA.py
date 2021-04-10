from random import randint
import math,platform, os


#globals variables
Public_Key = []
Prive_Key = 0
encript = []
N = 0

# function to clean the screen
def Clear():
	if platform.system() == "Windows": #windows platform
		os.system("cls")
	else:
		os.system("clear") # linux platform
        
"""
GeneratePrimeNumber eh a funcao para gerar os Numeros P e Q aleatoriamente
"""
def GeneratePrimeNumber():
	
	"""
	Loop that will only be broken if the number generated is prime
	"""
	while True:
		#generating a number in that range
		value = randint(100,1000)
		
		count = 0 #variable that counts how many times the number was divided and the rest was zero
		
		#loop to check how many times the number will be divided
		for x in range(1,value+1):
			if value % x ==  0:
				count += 1
		if count == 2: #if the count is equal to 2 it means it's prime and then the loop is broken
			break
	return value # returns the prime number generated

#function to calculate the Phi of N
def PhiFunction(P, Q):
	return (P-1) * (Q-1)

#funcao para gerar o numero E
def GenerateE(PhiN):
	
	"""
loop that will only be broken if the number generated obeys the following condition 1> gen <phiN and gen is prime between PhiN
	"""
	while True:
		count = 0
		gen = GeneratePrimeNumber()
		for x in range(1,PhiN+1):
			if gen % x == 0:
				count += 1
		
		if gen > 1 and gen < PhiN and count == 2:
			return gen
# function to calculate the private key
def CalculateDNumber(E,PhiN):
	i = 1
	while True:
		if E * i % PhiN == 1:
			return i
		else:
			i += 1
		
def Encription(word):
	Clear()
	global Public_Key
	global Private_Key
	global encript
	global N
	P = GeneratePrimeNumber()# function call to generate the P number
	Q = GeneratePrimeNumber() # function call to generate the Q number
	
	N = P * Q #calculating th N
	PhiN = PhiFunction(P,Q) #calculating th Phi of N
	E = GenerateE(PhiN)
	Public_Key.append(N) #public key
	Public_Key.append(E) #public key
	Private_Key = CalculateDNumber(E,PhiN) #generating th private key
	
	print("Your Public Key is ",end="")
	for x in Public_Key:
		print("{}".format(x),end=" ")
	print()
	for x in range(0,len(word)):
		encript.append((ord(word[x])**E)%N)
	print("\nEncrypted Message is:")
	print("\033[34m")
	for x in encript:
		print("{}".format(x),end=" ")
	print("\033[m")
	print("\n\nYour Private Key is \033[31m{}\033[m".format(Private_Key))

	
def Decription(private_key):
	decript = []
	for x in range(0, len(encript)):
		decript.append((encript[x]**Private_Key) % N)
	print("\nDecrypted message is: \033[34m",end="")
	for x in decript:
		print(chr(x),end="")
	print("\033[m")

while True:
	try:
		Clear()
		option = int(input("""1 - Encript\n2 - Decript\n0 - Exit\n"""))
		if option == 1:
			msg = str(input("Enter message to encrypt-> "))
			Encription(msg)
			n = str(input("\nPress ENTER to exit\n"))
		elif option == 2:
			public = int(input("Enter the private key "))
			Clear()
			Decription(public)
			n = str(input("\nPress ENTER to exit\n"))
		elif option == 0:
			break
		else:
			print("\nInvalid Option\n")
	except(ValueError):
		print("Invalid value\n")
		n = str(input("\nPress ENTER to Return\n"))