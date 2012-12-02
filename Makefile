.PHONY: clean serve

script.js: script.coffee
	coffee -o . -c script.coffee

serve:
	python -m SimpleHTTPServer 8000 .

clean:
	rm script.js
