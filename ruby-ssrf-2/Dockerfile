FROM ruby:latest

# RUN apt-get update -qq && apt-get install -y build-essential

RUN apt-get update && apt-get install -y supervisor

ENV APP_HOME /opt/
WORKDIR $APP_HOME

RUN gem install sinatra-contrib 

COPY . $APP_HOME
RUN mv flag /flag
ENV RACK_ENV production

EXPOSE 8082

RUN useradd -u 8877 ruby-www
RUN chown ruby-www:ruby-www -R /opt/
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord","-c","/etc/supervisor/conf.d/supervisord.conf"]