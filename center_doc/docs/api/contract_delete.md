**URL** : `/contract/delete/<int:pk>`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : IsAudmin

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