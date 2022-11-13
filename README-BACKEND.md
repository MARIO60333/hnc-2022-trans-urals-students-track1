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

## `/signus`
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

## ``/signin``
Форма входа

### Запрос: 

POST: 

* ``username``: Никнейм
* ``password``: Пароль

### Пример: 

JSON:

```json
{
  "username": "<Username>",
  "password": "<Password>"
}
```

### Ответ: 

JSON: 

```json
{
  "status": 0
}
```

## ``/authcheck``
Проверка авторизации

### Запрос: 

GET

### Ответ: 

Неавторизованный:
```json
{
  "msg": "Not authorized"
}
```

Авторизованный:
```json
{
  "msg": "Authorized"
}
```

## ``/signout``
Выход из системы

### Запрос: 

GET

### Ответ: 

```
HTTP/1.1 200 OK
```