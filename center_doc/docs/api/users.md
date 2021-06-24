**URL** : `/users/`

**Method** : `GET`

**Auth required** : No

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

```json
{
   "users": [
    {
        "UserID": 1,
        "password": "pbkdf2_sha256$216000$htMAk4YdDdL9$i9LnWDCOgwjQFPp3Le7zx4y8l/D8b5Mvt4otdxuUNEY=",
        "last_login": "2021-06-23T14:41:11.947266Z",
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
    },
    {
        "UserID": 4,
        "password": "1234",
        "last_login": null,
        "is_superuser": false,
        "username": "client1",
        "first_name": "",
        "last_name": "",
        "email": "",
        "is_staff": false,
        "is_active": true,
        "date_joined": "2021-06-22T20:42:08Z",
        "Passport": null,
        "Phone": null,
        "BirthDate": null,
        "groups": [],
        "user_permissions": []
    },
    {
        "UserID": 5,
        "password": "123123qweqwe",
        "last_login": "2021-06-23T21:42:26Z",
        "is_superuser": false,
        "username": "qwefwqef",
        "first_name": "",
        "last_name": "",
        "email": "",
        "is_staff": false,
        "is_active": true,
        "date_joined": "2021-06-23T20:34:45Z",
        "Passport": null,
        "Phone": null,
        "BirthDate": null,
        "groups": [],
        "user_permissions": []
    },
    {
        "UserID": 6,
        "password": "pbkdf2_sha256$216000$NUOLnAC7Gjto$coAZn/1QnSKZOyqcI5kod26MGEg9uye8jdPMwnfvxVg=",
        "last_login": null,
        "is_superuser": false,
        "username": "qewqwe",
        "first_name": "",
        "last_name": "",
        "email": "",
        "is_staff": false,
        "is_active": true,
        "date_joined": "2021-06-23T21:43:52.618283Z",
        "Passport": null,
        "Phone": null,
        "BirthDate": null,
        "groups": [],
        "user_permissions": []
    }
]
}
```