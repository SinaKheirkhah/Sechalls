require 'sinatra'
require 'open-uri'

get '/' do
  '<html><body><h1>Hello World!</h1><a href="/page/?url=https://google.com">Load Google :)</a></body></html>'
end

get '/page/' do
  if (params[:url] =~ /\|/)
    "Security failed"
  else
    format 'RESPONSE: %s', open(params[:url]).read
  end
end

error RuntimeError do
  "A RuntimeError occured"
end