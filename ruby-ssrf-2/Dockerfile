FROM ruby:latest

# RUN apt-get update -qq && apt-get install -y build-essential

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN gem install sinatra-contrib 

COPY . $APP_HOME
ENV RACK_ENV production

EXPOSE 8082

RUN useradd -u 8877 ruby-www
USER ruby-www

RUN nohup sh -c 'ruby app.rb >/dev/null && ruby app2.ab>/dev/null' &