package main

import (
	"embed"
	"flag"
	"fmt"
	"log"
	"net/http"
)

var (
	//go:embed css docs fonts img js resources views index.html
	rootfs embed.FS

	host string
	port uint
)

func init() {
	flag.StringVar(&host, "host", "", "listening host")
	flag.UintVar(&port, "port", 8080, "listening port")
}

func main() {
	flag.Parse()

	addr := fmt.Sprintf("%s:%d", host, port)
	if host == "" {
		host = "localhost"
	}
	fmt.Printf("Listening in [%s]. Please open http://%s:%d in browser to enjoy yourself.\n", addr, host, port)

	http.Handle("/", http.FileServer(http.FS(rootfs)))
	log.Fatal(http.ListenAndServe(addr, nil))
}
