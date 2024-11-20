from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes
import base64

def encrypt_password(password, key):
    cipher = AES.new(key, AES.MODE_CBC)
    ciphertext = cipher.encrypt(pad(password.encode(), AES.block_size))
    return base64.b64encode(cipher.iv + ciphertext).decode()

def decrypt_password(ciphertext, key):
    data = base64.b64decode(ciphertext)
    iv = data[:AES.block_size]
    ciphertext = data[AES.block_size:]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    return unpad(cipher.decrypt(ciphertext), AES.block_size).decode()

if __name__ == "__main__":
    secret_key = b'sixteenbytekey12'
    password = input("Enter your password: ")
    encrypted_password = encrypt_password(password, secret_key)
    print("\nEncrypted Password:", encrypted_password)
    decrypted_password = decrypt_password(encrypted_password, secret_key)
    print("Decrypted Password:", decrypted_password)
