# Folder Sturcture
1. Naka-install ang dependencies – npm install para i-install ang express, cors, mongodb, at dotenv.
2. May .env file ka – Tiyakin na may MONGODB_URI=<your_mongodb_connection_string> sa .env file mo.
3. Organized ang project structure mo – Para mas madaling i-maintain, pwede kang gumawa ng folders tulad ng:
- routes/ → Para sa mga API routes
- models/ → Para sa mga MongoDB schemas
- controllers/ → Para sa business logic
- config/ → Para sa database connection (nagawa mo na ito)