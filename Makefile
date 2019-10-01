.PHONY: build
build: clean
	npm run build

.PHONY: clean
clean:
	rm -rf dist
