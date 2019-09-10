FROM ruby:latest

RUN useradd -s /bin/bash rubyapp

RUN apt-get update -qq && apt-get install -y build-essential

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN gem install sinatra-contrib 

COPY . $APP_HOME
ENV RACK_ENV production

EXPOSE 4567
USER rubyapp

CMD ["ruby", "app.rb"]