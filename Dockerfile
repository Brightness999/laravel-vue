FROM php:7.4-fpm-alpine

ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/
ENV PHPIZE_DEPS \
		autoconf \
		dpkg-dev dpkg \
		file \
		g++ \
		gcc \
		libc-dev \
		make \
		pkgconf \
		re2c
RUN set -xe \
	&& apk add --no-cache pcre-dev $PHPIZE_DEPS \
		libmcrypt-dev \
		libxml2-dev \
		libintl \
		gettext-dev \
		openldap-dev \
		freetype-dev \
		libjpeg-turbo-dev	 \
		libpng-dev \
		icu-dev \
		git \
		bash \
		openssh \

	# Install composer and prestissimo
	&& curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && pecl install -f xdebug-2.8.1 \
    && docker-php-ext-enable xdebug \
	&& docker-php-ext-configure gd --with-freetype --with-jpeg \

	&& chmod uga+x /usr/local/bin/install-php-extensions \
	&& sync \
    && install-php-extensions bcmath \
        calendar fileinfo iconv json mbstring \
        gettext mcrypt pcntl pdo pdo_mysql soap \
        tokenizer zip ldap gd intl xdebug \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_autostart=0" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.idekey=PHPSTORM" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \

	&& rm -rf /var/cache/apk/* \

COPY .docker/docker-php-memory-limit.ini /usr/local/etc/php/conf.d/
