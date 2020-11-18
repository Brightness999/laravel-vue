# Pre project requirements

Docker version 19.03.8 (other version could work as well)
Docker-compose version 1.25.5 (other version could work as well)

# Project setup

```bash
make env
make start
make composer-install
make npm-install
```

Connect to mysql container with local configuration and create DB (configuration from env.example)

```bash
make migrate
make seed
make npm-dev
```

Enjoy website on http://localhost:8086/

## Contributing

1) Please start work in your branch created from master.
2) Create pull request on master branch after finalizing a task. (recheck your code twice before review)
3) Do not hesitate to update read.me with your error/solutions to fix an error

