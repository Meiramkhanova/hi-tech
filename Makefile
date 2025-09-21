VERSION=0.0.1

build-amd:
	docker buildx build --platform linux/amd64 --tag blinkker/hi-tech:$(VERSION)-amd --file ./Dockerfile .

push-amd:
	docker push blinkker/hi-tech:$(VERSION)-amd
