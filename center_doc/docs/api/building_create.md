**URL** : `/building/create`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : IsAuthenticated

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

```json
{
    "BuildingID": 22,
    "City": "City",
    "Street": "Street",
    "Number": "1",
    "Type": "prem",
    "Description": "qweqwe",
    "Photo": null,
    "Apartments": [
        1,
        2
    ]
}
```