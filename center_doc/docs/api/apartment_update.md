**URL** : `/apartment/update/<int:pk>`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : IsAuthenticated

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

```json
{
    "ApartmentID": 22,
    "Number": 1231234,
    "Square": 123123,
    "Description": "qwdqwd",
    "Photo": null,
    "Cost": 123124
}
```