# Gigapet5 v1.0.0

---

#### Back End Architect: Michelle Scott (Github: scottmm374)

---

BASE URL: https://gigapetfive.herokuapp.com/

---

#### API

The following endpoints are available (GET)

- `GET https://gigapetfive.herokuapp.com/auth/users` - gets master list of users
- `GET https://gigapetfive.herokuapp.com/auth/users/:id` - gets a single user
- `GET https://gigapetfive.herokuapp.com/auth/users/:id/children` - gets all the children for that user
- `GET https://gigapetfive.herokuapp.com/auth/children` -gets all children in database
- `GET https://gigapetfive.herokuapp.com/auth/children/:id` - Gets child by (child's) id

- `GET https://gigapetfive.herokuapp.com/auth/food` - Gets all Food
- `GET https://gigapetfive.herokuapp.com/auth/food/categories` - Gets all Categories

The following endpoints are available (POST/PUT/DELETE)

- `POST https://gigapetfive.herokuapp.com/auth/register` - Register New User
- `POST https://gigapetfive.herokuapp.com/auth/login` - Login User
- `POST https://gigapetfive.herokuapp.com/auth/users/addChild` - Add Child

- `POST https://gigapetfive.herokuapp.com/auth/food/addFood` - Add Food
- `PUT https://gigapetfive.herokuapp.com/auth/food/:id` - Edit Food
- `DELETE https://gigapetfive.herokuapp.com/auth/food/:id` - Delete Food

---

## REGISTRATION & LOGIN (Parent/user)

### User Registration (POST)

https://gigapetfive.herokuapp.com/auth/register

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

https://gigapetfive.herokuapp.com/auth/login

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

---

### All Users (Parents) (GET) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/users

##### Server returns:

```
[
    {
        "id": 1,
        "name": "Jane",
        "email": "Jane@gmail.com"
    },
    {
        "id": 2,
        "name": "Sara",
        "email": "Sara@gmail.com"
    },
    {
        "id": 3,
        "name": "Mike",
        "email": "Mike@gmail.com"
    },
    {
        "id": 4,
        "name": "Jerry",
        "email": "Jerry@gmail.com"
    },

]

```

---

### Get User(Parent) By ID (GET) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/users/:id (id is users id)

##### Server returns:

```
{
    "id": 1,
    "name": "Jane",
    "email": "Jane@gmail.com"
}
```

---

### Get All Children by Users ID (GET) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/users/:id/children (id is users id)

##### Server returns:

- id in response is children_id

```
[
    {
        "id": 1,  // children_id
        "name": "Jane",
        "email": "Jane@gmail.com",
        "password": "abcde",
        "child_name": "Ben",
        "child_age": 3,
        "users_id": 1
    },
    {
        "id": 2,
        "name": "Jane",
        "email": "Jane@gmail.com",
        "password": "abcde",
        "child_name": "Sara",
        "child_age": 5,
        "users_id": 1
    },
    {
        "id": 13,
        "name": "Jane",
        "email": "Jane@gmail.com",
        "password": "abcde",
        "child_name": "Samantha",
        "child_age": 9,
        "users_id": 1
    },
    {
        "id": 14,
        "name": "Jane",
        "email": "Jane@gmail.com",
        "password": "abcde",
        "child_name": "Samantha",
        "child_age": 9,
        "users_id": 1
    },
    {
        "id": 15,
        "name": "Jane",
        "email": "Jane@gmail.com",
        "password": "abcde",
        "child_name": "Samantha",
        "child_age": 9,
        "users_id": 1
    }
]
```

---

### ADD CHILD (POST) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/users/addChild

### Parameters

| Name       | Type   | Description                              |
| :--------- | :----- | :--------------------------------------- |
| child_name | String | <p>The childs name \*Required</p>        |
| child_age  | String | <p>The childs age \*Optional </p>        |
| users_id   | String | <p>Parents ID (users_id ) \*Required</p> |

##### Client sends:

```

{
	"child_name": "Scott",
	"child_age": 9,
	"users_id": 2
}

```

##### Server returns:

```

{
    "message": "Scott has been added!"
}

```

---

### Get All Children (GET) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/children

##### Server returns:

```
[

    {
        "id": 1,
        "child_name": "Ben",
        "child_age": 3,
        "users_id": 1
    },
    {
        "id": 2,
        "child_name": "Sara",
        "child_age": 5,
        "users_id": 1
    },
    {
        "id": 3,
        "child_name": "Alice",
        "child_age": 5,
        "users_id": 2
    },
    {
        "id": 4,
        "child_name": "Beth",
        "child_age": 5,
        "users_id": 3
    }
]
```

---

### Get Child by ID (GET) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/children/:id (id is children_id)

##### Server returns:

```
{
    "id": 1,
    "child_name": "Ben",
    "child_age": 3,
    "users_id": 1
}
```

---

### ADD Food (POST) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/food/addFood

### Parameters

| Name        | Type    | Description                                 |
| :---------- | :------ | :------------------------------------------ |
| food_name   | String  | <p>The Food name \*Required</p>             |
| qty         | integer | <p>Qty of food \*Required </p>              |
| date        | String  | <p>YYYY-MM-DD \*Required</p>                |
| children_id | integer | <p>Childs ID (children_id )\*Required</p>   |
| category_id | integer | <p>Category ID (category_id )\*Required</p> |

##### Client sends:

```

{
"food_name": "Cinnamon roll",
"qty": 1,
"date": "2015-03-07",
"children_id": 1,
"category_id": 6
}

```

##### Server returns:

```

{
"message": "Cinnamon roll added!"
}

```

---

### EDIT Food (PUT) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/food/:id (Id is food id)

### Parameters

| Name        | Type    | Description                                 |
| :---------- | :------ | :------------------------------------------ |
| food_name   | String  | <p>The Food name \*Required</p>             |
| qty         | integer | <p>Qty of food \*Required </p>              |
| date        | String  | <p>YYYY-MM-DD \*Required</p>                |
| children_id | integer | <p>Childs ID (children_id )\*Required</p>   |
| category_id | integer | <p>Category ID (category_id )\*Required</p> |

##### Client sends:

```

{
"food_name": "Cinnamon roll",
"qty": 1,
"date": "2015-03-07",
"children_id": 1,
"category_id": 6
}

```

##### Server returns:

```

{
"message": "Food record Updated"
}

```

---

### Remove Food (delete) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/food/:id (Id is food id)

##### Server returns:

```

{
"message": "Food record removed"
}

```

---

### Get All Food (Restricted Route)

https://gigapetfive.herokuapp.com/auth/food

##### Server returns:

```
[
    {
        "id": 1,
        "food_name": "Oatmeal",
        "qty": 1,
        "date": "2015-03-06T00:00:00.000Z",
        "children_id": 1,
        "category_id": 4
    },
    {
        "id": 2,
        "food_name": "Banana",
        "qty": 1,
        "date": "2015-03-07T00:00:00.000Z",
        "children_id": 1,
        "category_id": 2
    },
    {
        "id": 3,
        "food_name": "Chicken Nuggets",
        "qty": 1,
        "date": "2015-04-06T00:00:00.000Z",
        "children_id": 3,
        "category_id": 3
    },
    {
        "id": 4,
        "food_name": "Mac and Cheese",
        "qty": 1,
        "date": "2015-04-06T00:00:00.000Z",
        "children_id": 3,
        "category_id": 5
    }
]

```

---

### Get Food By Childs ID (GET) (Restricted Route)

https://gigapetfive.herokuapp.com/auth/children/:id/food (Id is children_id)

##### Server returns:

```

[
    {
        "id": 4,
        "food_name": "Oatmeal",
        "qty": 1,
        "date": "2015-03-06T00:00:00.000Z",
        "children_id": 1,
        "category_id": 4,
        "category_name": "Grains",
        "category_points": 2
    },
    {
        "id": 2,
        "food_name": "Banana",
        "qty": 1,
        "date": "2015-03-07T00:00:00.000Z",
        "children_id": 1,
        "category_id": 2,
        "category_name": "Fruits",
        "category_points": 5
    },
    {
        "id": 6,
        "food_name": "Cinnamon roll",
        "qty": 1,
        "date": "2015-03-07T00:00:00.000Z",
        "children_id": 1,
        "category_id": 6,
        "category_name": "Snacks",
        "category_points": 0
    },
    {
        "id": 6,
        "food_name": "Cinnamon roll",
        "qty": 1,
        "date": "2015-03-07T00:00:00.000Z",
        "children_id": 1,
        "category_id": 6,
        "category_name": "Snacks",
        "category_points": 0
    },
    {
        "id": 6,
        "food_name": "Cinnamon roll",
        "qty": 1,
        "date": "2015-03-07T00:00:00.000Z",
        "children_id": 1,
        "category_id": 6,
        "category_name": "Snacks",
        "category_points": 0
    },
    {
        "id": 3,
        "food_name": "Grilled Chicken",
        "qty": 1,
        "date": "2016-03-06T00:00:00.000Z",
        "children_id": 1,
        "category_id": 3,
        "category_name": "Protein",
        "category_points": 2
    },
    {
        "id": 6,
        "food_name": "Cinnamon roll",
        "qty": 1,
        "date": "2015-03-07T00:00:00.000Z",
        "children_id": 1,
        "category_id": 6,
        "category_name": "Snacks",
        "category_points": 0
    },
    {
        "id": 6,
        "food_name": "Cinnamon bun",
        "qty": 1,
        "date": "2015-03-07T00:00:00.000Z",
        "children_id": 1,
        "category_id": 6,
        "category_name": "Snacks",
        "category_points": 0
    }
]
```

---

### Get All Categories (GET)

https://gigapetfive.herokuapp.com/auth/food/categories

##### Server returns:

```

[
{
"id": 1,
"category_name": "Vegetable",
"category_points": 5
},
{
"id": 2,
"category_name": "Fruits",
"category_points": 5
},
{
"id": 3,
"category_name": "Protein",
"category_points": 2
},
{
"id": 4,
"category_name": "Grains",
"category_points": 2
},
{
"id": 5,
"category_name": "Dairy",
"category_points": 3
},
{
"id": 6,
"category_name": "Snacks",
"category_points": 0
}
]

```

```

```
