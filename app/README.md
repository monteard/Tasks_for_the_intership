Приложение app.js, в котором находится весь основной код, находится на порту `8000`. Задание, касающиеся раздела docker'a, выполняется по адресу `http://localhost:8001, 8002 и 8003`, соотвественно у каждой реплики.

В качестве переменных сред создается два параметра вручную:
- AUTHOR
- UUID

Реализация healthcheck реализована в коде + docker compose
`http://localhost:8001/health`

Отображаются соотвественно переменные по адреса: 
`http://localhost:8001/hostname`
`http://localhost:8001/id`
`http://localhost:8001/author`

  ![изображение](https://github.com/user-attachments/assets/c680b403-0416-40f3-a714-24b803dd91ce)

  ![изображение](https://github.com/user-attachments/assets/408a8258-c89b-4175-bd40-019b20374e2b)
