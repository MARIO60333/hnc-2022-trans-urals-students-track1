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

## `/postping`

### Запрос:

POST:
* ``msg``: сообщение

### Пример: 
```json
{
  "msg": "<msg>"
}
```

### Ответ:

JSON:

```json
{
  "msg":"GET Pong: <msg>"
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

## `/singus`
Регистрация стримера

### Запрос:

POST:

* ``username``: Никнейм
* ``firstName``: Имя
* ``lastName``: Фамилия
* ``password``: Пароль
* ``phoneNumber``: Номер телефона

### Пример: 
```json
{
  "username": "<UserName>",
  "firstName": "Вася",
  "lastName": "Пупкин",
  "password": "<Password>",
  "phoneNumber": "+7xxxxxxxxxx"
}
```

### Ответ:

JSON:

```json
{
  "status": 0
}
```
