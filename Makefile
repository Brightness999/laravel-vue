ENV=local
dir=${CURDIR}
project=-p spacegoals
service=ppr_php-fpm
serviceNode=node:12-alpine

start:
	@docker-compose $(project) up -d

start-ci:
	@docker-compose $(project) -f docker-compose.ci.yml up -d --remove-orphans

stop:
	@docker-compose $(project) down

restart: stop start

env:
	cp ./.env.local ./.env

ssh:
	@docker-compose $(project) exec php-fpm sh

exec:
	@docker run -t  --interactive -v $(dir):/var/www/html $(service) $$cmd

exec-db:
	@docker run -t -v $(dir):/var/www/html --network ppr_default --link database $(service) $$cmd

exec-node:
	@docker run -t -v $(dir):/var/www/html -w /var/www/html $(serviceNode) $$cmd

chmod:
	@make exec cmd="chmod -R 777 *"

composer-install:
	@make exec cmd="composer install"

composer-update:
	@make exec cmd="composer update"

truncate:
	@make exec-db cmd="php artisan db:truncate"

migrate:
	@make exec-db cmd="php artisan migrate"

clear-config:
	@make exec-db cmd="php artisan config:cache"

migrate-rollback:
	@make exec-db cmd="php artisan migrate:rollback"

seed:
	@make exec-db cmd="php artisan db:seed"

npm-install:
	@make exec-node cmd="npm install"

npm-update:
	@make exec-node cmd="npm update"

npm-prune:
	@make exec-node cmd="npm prune"

get-1s-users:
	@make exec-db cmd="php artisan 1s:get-users"

get-1s-projects:
	@make exec-db cmd="php artisan 1s:get-projects"

ldap:
	@make exec-db cmd="php artisan ldap"

sync-bench-resources:
	@make exec-db cmd="php artisan sync_bench_resources"

npm-dev:
	@make exec-node cmd="npm run dev"

npm-rebuild:
	@make exec-node cmd="npm rebuild node-sass"
	
npm-watch:
	@make exec-node cmd="npm run watch"

get-avatars:
	@make exec-db cmd="php artisan get-avatars"
	