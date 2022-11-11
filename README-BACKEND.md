# Документация API

## `/`

### Запрос:

GET

### Ответ:

JSON:

```json
{
  "msg": "Simple message!"
}
```

## `/getping`

### Запрос:

GET:

* ``msg``: сообщение

### Пример: 
``/getping?msg=<msg>``

### Ответ:

JSON:

```json
{
  "msg":"GET Pong: <msg>"
}
```
