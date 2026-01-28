with open("README.md", "w", encoding="utf-8") as f:
    f.write(readme_content)
# Create empty favicon
with open("public/favicon.ico", "wb") as f:
    f.write(b"")

print("  ✓ .gitignore created")
print("  ✓ README.md created")
print("  ✓ public/favicon.ico created")

# =================== 8. Success Message ===================
print("\n" + "=" * 60)
print("🎉 WEBSITE CREATED SUCCESSFULLY!")
print("=" * 60)

project_path = os.path.abspath(".")

print(f"\n📂 Project Location: {project_path}")
print("\n🚀 To start the website:")
print(f"cd {project_name}")
print("npm install")
print("npm run dev")
print("\n🌐 Then open: http://localhost:3000")
print("\n📱 Available Pages:")
print("• Home: http://localhost:3000")
print("• About: http://localhost:3000/about")
print("• Portfolio: http://localhost:3000/portfolio")
print("• Legal: http://localhost:3000/legal")

print("\n⚡ Quick Commands (copy and paste):")
print(f"""cd {project_name} && npm install && npm run dev""")

print("\n✅ All files created:")
print("  📁 change-foundation-website/")
print("  ├── 📄 package.json")
print("  ├── 📄 index.html")
print("  ├── ⚙️  vite.config.js")
print("  ├── 🎨 tailwind.config.js")
print("  ├── 🎨 postcss.config.js")
print("  ├── 📄 .gitignore")
print("  ├── 📄 README.md")
print("  ├── 📁 public/")
print("  └── 📁 src/")
print("      ├── 📄 App.jsx")
print("      ├── 📄 main.jsx")
print("      ├── 📄 index.css")
print("      ├── 📁 components/")
print("      │   ├── Header.jsx")
print("      │   └── Footer.jsx")
print("      └── 📁 pages/")
print("          ├── Home.jsx")
print("          ├── About.jsx")
print("          ├── Portfolio.jsx")
print("          └── Legal.jsx")

# Optional: Auto install
print("\n" + "=" * 60)
print("📦 Do you want to install dependencies automatically? (y/n)")
choice = input("> ").strip().lower()

if choice == 'y':
    print("\n📦 Installing dependencies...")
    try:
        subprocess.run("npm install", shell=True, check=True)
        print("✅ Dependencies installed successfully!")
        
        print("\n🚀 Starting development server...")
        print("🌐 Opening: http://localhost:3000")
        
        # Start server
        import threading
        
        def start_server():
            subprocess.run("npm run dev", shell=True)
        
        server_thread = threading.Thread(target=start_server)
        server_thread.daemon = True
        server_thread.start()
        
        # Wait a moment
        time.sleep(3)
        
        # Open browser
        import webbrowser
        webbrowser.open("http://localhost:3000")
        
        print("\n✅ Server started! Press Ctrl+C to stop.")
        print("\n🌐 Website is now running at: http://localhost:3000")
        
        # Keep script running
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            print("\n👋 Server stopped.")
            
    except Exception as e:
        print(f"❌ Error: {e}")
        print("\n📋 Manual installation:")
        print(f"cd {project_name}")
        print("npm install")
        print("npm run dev")
else:
    print("\n📋 Manual installation:")
    print(f"cd {project_name}")
    print("npm install")
    print("npm run dev")