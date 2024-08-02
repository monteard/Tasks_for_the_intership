Приложение app.js, в котором находится весь основной код, находится на порту `8000`. Задание, касающиеся раздела docker'a, выполняется по адресу `http://localhost:8001, 8002 и 8003`, соотвественно у каждой реплики.

В качестве переменных сред создается два параметра вручную:
- AUTHOR
- UUID

Реализация healthcheck реализована в коде + docker compose по адресу:
`http://localhost:8001/health`

Отображаются соотвественно переменные в адресах: 
`http://localhost:8001/hostname`
`http://localhost:8001/id`
`http://localhost:8001/author`

![изображение](https://github.com/user-attachments/assets/74eaca34-7ba2-471c-b1cf-963d969beeb8)

![изображение](https://github.com/user-attachments/assets/9fe14334-8d70-491d-8673-ebad1b87bd36)

По запросу запущенные контейнеры могу прокинуть из своей сети во внешнюю для просмотра.
