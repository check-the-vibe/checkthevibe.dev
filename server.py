#!/usr/bin/env python3
"""
Development server for checkthevibe.dev that automatically reloads
when files change and opens the browser automatically.
"""

import os
from livereload import Server

# Set the directory to serve files from
server = Server()

# Watch for changes in these directories and file types
watch_folders = ['.', 'css', 'js', 'images']
watch_extensions = ['.html', '.js', '.css', '.svg']

# Add watchers for each folder and extension combination
for folder in watch_folders:
    for ext in watch_extensions:
        server.watch(f"{folder}/*{ext}")

# Configuration for automatic browser opening and port
port = 8000
host = '0.0.0.0'

# Print startup message with URL
print(f"\n✨ Check The Vibe development server starting...")
print(f"🌐 Server running at http://localhost:{port}")
print(f"🔄 Watching for file changes with auto-reload")
print(f"🌟 Press Ctrl+C to stop\n")

# Start the server
server.serve(port=port, host=host, root='.', open_url_delay=1)