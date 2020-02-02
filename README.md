# Gigapet5 v1.0.0

---

#### Back End Architect: Michelle Scott (Github: scottmm374)

---

BASE URL: https://gigapet5.herokuapp.com/

---

#### API

The following endpoints are available.

- `GET https://gigapet5.herokuapp.com/auth/users` - gets master list of users(parent)
- `GET https://gigapet5.herokuapp.com/auth/users/:id` - gets a single user(parent)
- `GET https://gigapet5.herokuapp.com/auth/users/:id/children` - gets all the children for that user(parent)
- `GET https://gigapet5.herokuapp.com/auth/children` -gets all children in database
- `GET https://gigapet5.herokuapp.com/auth/children/:id` - Gets child by (child) id

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

##### Client sends:

```
{
"name": "ginger",
"email": "ginger@gmail.com",
"password":"password"
}
```

##### Server returns:

```
{
"id": 18,
"name": "ginger",
"email": "ginger@gmail.com"
}
```

---

### User Login (POST)

https://gigapet5.herokuapp.com/auth/login

### Parameters

| Name     | Type   | Description                              |
| :------- | :----- | :--------------------------------------- |
| email    | String | <p>The New Users email \*Required</p>    |
| password | String | <p>The New Users password \*Required</p> |

##### Client sends:

```
{
"email": "megan@gmail.com",
"password":"password"
}
```

##### Server returns:

```
{
    "message": "Welcome Megan to Gigpet",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoiTWVnYW4iLCJpYXQiOjE1ODA2NjE5OTMsImV4cCI6MTU4MTA5Mzk5M30.UbyzaZAhwi6-kupEL-0HARA9t6iNTd3LR6vVMcgdPjA"
}
```

### User GET ALL USERS (GET)

https://gigapet5.herokuapp.com/auth/users

### Parameters

| Name     | Type   | Description                              |
| :------- | :----- | :--------------------------------------- |
| email    | String | <p>The New Users email \*Required</p>    |
| password | String | <p>The New Users password \*Required</p> |

##### Client sends:

```
{
"email": "megan@gmail.com",
"password":"password"
}
```

##### Server returns:

```
{
    "message": "Welcome Megan to Gigpet",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJuYW1lIjoiTWVnYW4iLCJpYXQiOjE1ODA2NjE5OTMsImV4cCI6MTU4MTA5Mzk5M30.UbyzaZAhwi6-kupEL-0HARA9t6iNTd3LR6vVMcgdPjA"
}
```

### ADD CHILD (POST)

https://gigapet5.herokuapp.com/auth/children/addChild

### Parameters

| Name       | Type   | Description                              |
| :--------- | :----- | :--------------------------------------- |
| child_name | String | <p>The childs name \*Required</p>        |
| child_age  | String | <p>The childs age \*Optional </p>        |
| users_id   | String | <p>Parents ID (users_id ) \*Required</p> |

##### Client sends:

```
{
	"child_name": "Anna",
	"child_age": "7",
	"users_id": 3  // users_id is the Parents id
}
```

##### Server returns:

```
{
    "message": "New child added"
}
```
