require 'rubygems'
require 'sinatra'

get '/' do
  send_file 'index.html'
end

get '/test' do
  send_file 'test/index.html'
end

get '/:folder/*.*', provides: [:js, :css] do |folder, path, ext|
  send_file params[:folder] + "/" + [path, ext].join(".")
end
