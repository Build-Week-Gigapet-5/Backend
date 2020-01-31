<a name="top"></a>

# Gigapet5 v1.0.0

---

#### Back End Architect: Michelle Scott (Github: scottmm374)

---

BASE URL: https://gigapet5.herokuapp.com/

---

## REGISTRATION & LOGIN (Parent/user)

### User Registration (POST)

https://gigapet5.herokuapp.com/auth/register

### Parameters

| Name     | Type   | Description                              |
| :------- | :----- | :--------------------------------------- |
| name     | String | <p>The New Users name \*Required</p>     |
| email    | String | <p>The New Users email \*Required</p>    |
| password | String | <p>The New Users password \*Required</p> |

#####Client sends:

{
"name": "ginger",
"email": "ginger@gmail.com",
"password":"password"
}

#####Server returns:
{
"id": 18,
"name": "ginger",
"email": "ginger@gmail.com"
}

---

### User Login (POST)

| Name     | Type   | Description                              |
| :------- | :----- | :--------------------------------------- |
| email    | String | <p>The New Users email \*Required</p>    |
| password | String | <p>The New Users password \*Required</p> |

#####Client sends:

{
"email": "ginger@gmail.com",
"password":"password"
}

#####Server returns:

{
"token": "Very long token",
"message": "Welcome to Gigpet"
}
