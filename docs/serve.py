#!/usr/bin/env python3
"""
Simple HTTP server to host the LiTo website.
"""

import http.server
import os
import socketserver

if __name__ == "__main__":
    # Get port from environment variable
    PORT = int(os.environ.get("GRADIO_DEMO", 8000))

    # Change to the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    # Create server with custom handler that uses smart caching
    class SmartCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
        # Enable range request support (required for Safari video streaming)
        protocol_version = "HTTP/1.1"

        def end_headers(self):
            # Smart caching based on file type
            path = self.path.lower()

            # Safari needs Accept-Ranges for proper video handling
            if path.endswith(".mp4"):
                self.send_header("Accept-Ranges", "bytes")

            # Long cache for large binary assets (30 days)
            if path.endswith(
                (".spz", ".ply", ".mp4", ".png", ".jpg", ".jpeg", ".gif", ".webp")
            ):
                self.send_header("Cache-Control", "public, max-age=2592000")
            # Medium cache for CSS/JS (1 week)
            elif path.endswith((".css", ".js")):
                self.send_header("Cache-Control", "public, max-age=604800")
            # Short cache for HTML (1 hour)
            elif path.endswith(".html"):
                self.send_header("Cache-Control", "public, max-age=3600")
            # No cache for everything else (development)
            else:
                self.send_header(
                    "Cache-Control", "no-store, no-cache, must-revalidate, max-age=0"
                )
                self.send_header("Pragma", "no-cache")
                self.send_header("Expires", "0")

            super().end_headers()

    Handler = SmartCacheHTTPRequestHandler
    Handler.extensions_map[".js"] = "application/javascript"
    Handler.extensions_map[".css"] = "text/css"
    Handler.extensions_map[".spz"] = "application/octet-stream"
    Handler.extensions_map[".ply"] = "application/octet-stream"

    # Use ThreadingTCPServer for better concurrent request handling
    with socketserver.ThreadingTCPServer(("", PORT), Handler) as httpd:
        httpd.allow_reuse_address = True
        print(f"Server running at http://0.0.0.0:{PORT}/")
        print(f"Serving files from: {os.getcwd()}")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
