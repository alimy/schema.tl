FROM golang:1.22-alpine3.18 AS builder
WORKDIR /github.com/tjhorner/schema.tl
RUN apk --no-cache --no-progress add --virtual \
  build-deps \
  build-base
COPY . .
RUN make build

FROM alpine:3.18
ENV TZ=Asia/Shanghai
WORKDIR /app
COPY --from=builder /github.com/tjhorner/schema.tl/tl-explorer .
EXPOSE 8080
ENTRYPOINT ["/app/tl-explorer"]
