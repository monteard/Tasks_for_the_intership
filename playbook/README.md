Запуск плейбука происходит с помощью команды:

`ansible-playbook testask.yaml -i hosts  --user=ur_username \
                --extra-vars "ansible_sudo_pass=ur_password"`

В качестве `--user` необходимо использовать имя пользователя от которого выполняются команды, `"ansible_sudo_pass"` указывается пароль пользователя.
