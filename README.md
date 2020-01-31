# Backend

Register new user

post

http://localhost:5000/api/auth/register

{
"name": "Fred",
"email": "fred@gmail.com",
"password":"none"
}

{
"id": 3,
"name": "Fred",
"email": "fred@gmail.com",
"password": "$2a$08\$aoqjNJyauBm3tH1.abw82O38JdERn5HD/IXARjGk2KVXo1RWCAYbG"
}

Login

Post

http://localhost:5000/api/auth/login

{
"name": "Fred",
"email": "fred@gmail.com",
"password":"none"
}

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJmcmVkQGdtYWlsLmNvbSIsImlhdCI6MTU4MDQzNTc2MywiZXhwIjoxNTgxNjQ1MzYzfQ.uK05sa15fzb_yu_XUj4b1NmjkE1P2qIFo4lp6A7PmXA",
"message": "Welcome to Gigpet"
}
