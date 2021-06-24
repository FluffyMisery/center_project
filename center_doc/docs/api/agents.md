**URL** : `/agents/`

**Method** : `GET`

**Auth required** : No

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

```json
{
   "Agents": [
    {
        "UserID": 1,
        "password": "pbkdf2_sha256$260000$PH7sC6aSpTauqCP6k9ROOn$VsoDYguR9AqlLxWGVp5GDRHqVJPrptZLJ3tnz3zNGUE=",
        "last_login": "2021-06-22T19:54:56.106464Z",
        "is_superuser": true,
        "username": "Admin",
        "first_name": "",
        "last_name": "",
        "email": "admin@gmail.com",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2021-06-22T19:54:40.254073Z",
        "Passport": null,
        "Phone": null,
        "BirthDate": null,
        "groups": [],
        "user_permissions": []
    },
    {
        "UserID": 2,
        "password": "1234",
        "last_login": null,
        "is_superuser": false,
        "username": "agent1",
        "first_name": "Олег",
        "last_name": "Смирнов",
        "email": "smirnov@gmail.com",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2021-06-22T20:13:04Z",
        "Passport": null,
        "Phone": "89051234567",
        "BirthDate": "2021-06-01",
        "groups": [],
        "user_permissions": []
    },
    {
        "UserID": 3,
        "password": "1234",
        "last_login": null,
        "is_superuser": false,
        "username": "agent2",
        "first_name": "Николай",
        "last_name": "Лебедев",
        "email": "lebedev@gmail.com",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2021-06-22T20:14:14Z",
        "Passport": null,
        "Phone": "89087654321",
        "BirthDate": "2021-05-04",
        "groups": [],
        "user_permissions": []
    }
]
}
```