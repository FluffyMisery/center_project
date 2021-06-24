**URL** : `/contract/update/<int:pk>`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : IsAuthenticated

**Data constraints** : `{}`

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

```json
{
    "ContractID": 1,
    "Status": "На подтверждении",
    "AgentID": 2,
    "ClientID": 4,
    "ApartmentID": 1
}
```