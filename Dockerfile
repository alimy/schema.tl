FROM golang:alpine3.11 AS builder
WORKDIR /github.com/tjhorner/schema.tl
RUN apk --no-cache --no-progress add --virtual \
  build-deps \
  build-base
COPY . .
RUN make build

FROM golang:alpine3.11
WORKDIR /app
COPY --from=builder /github.com/tjhorner/schema.tl/tl-explorer .
EXPOSE 8080
ENTRYPOINT ["/app/tl-explorer"]
