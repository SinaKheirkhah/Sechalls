FROM ruby:latest

# RUN apt-get update -qq && apt-get install -y build-essential

ENV APP_HOME /opt/
WORKDIR $APP_HOME

RUN gem install sinatra-contrib 

COPY . $APP_HOME
RUN mv flag /flag
ENV RACK_ENV production

EXPOSE 8081

RUN useradd -u 8877 ruby-www
USER ruby-www

CMD ["ruby", "app.rb"]