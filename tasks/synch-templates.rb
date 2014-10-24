#!/usr/bin/env ruby
LAYOUTS          = %w(development.html test/index.html index.html)
TEMPLATE         = File.read("template.html")
LAYOUT_REGEX     = /(<\!--\*\*BEGIN\*\*-->)((\n|.)*)(<!--\*\*END\*\*-->)/
TEMPLATE_REPLACE = "\\1\n#{TEMPLATE}    \\4"

def set_layout(layout, html_file)
  File.open(layout, 'w') do |f|
    f << html_file
  end
end

LAYOUTS.each do |layout|
  set_layout layout, File.read(layout).gsub!(LAYOUT_REGEX, TEMPLATE_REPLACE)
end
