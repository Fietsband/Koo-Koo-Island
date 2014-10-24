#!/usr/bin/env ruby
template = File.read("template.html")

["development.html", "test/index.html", "index.html"].each do |t|
  html_file = File.read(t)
  html_file.gsub!(/(<\!--\*\*BEGIN\*\*-->)((\n|.)*)(<!--\*\*END\*\*-->)/, "\\1\n#{template}    \\4")

  File.open(t, 'w') do |out|
    out << html_file
  end
end
