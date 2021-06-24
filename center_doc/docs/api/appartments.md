**URL** : `/apartments/`

**Method** : `GET`

**Auth required** : No

**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

```json
{
   "Appartments": [
    {
        "ApartmentID": 1,
        "Number": 101,
        "Square": 20,
        "Description": "Топ за свои деньги",
        "Photo": "http://127.0.0.1:8000/media/app1.jpg",
        "Cost": 2000
    },
    {
        "ApartmentID": 2,
        "Number": 102,
        "Square": 60,
        "Description": "Бери, не пожалеешь",
        "Photo": "http://127.0.0.1:8000/media/app2.jpg",
        "Cost": 3000
    },
    {
        "ApartmentID": 3,
        "Number": 103,
        "Square": 100,
        "Description": "Большая, что потеряешся",
        "Photo": "http://127.0.0.1:8000/media/app3.jpg",
        "Cost": 5000
    },
    {
        "ApartmentID": 4,
        "Number": 21,
        "Square": 70,
        "Description": "Лухари квартира, стоит своих денег, вид топ",
        "Photo": "http://127.0.0.1:8000/media/app4.png",
        "Cost": 10000
    },
    {
        "ApartmentID": 5,
        "Number": 22,
        "Square": 80,
        "Description": "Топ для отдыха, даже думать не надо, надо брать",
        "Photo": "http://127.0.0.1:8000/media/app5.jpg",
        "Cost": 4000
    }
]
}
```