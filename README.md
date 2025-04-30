# PhishBuster 🛡️

PhishBuster is a simple web-based tool designed to help users detect phishing attempts and educate themselves about online safety.

## 🔍 Features

- ✅ Scan URLs for potential phishing threats
- 📚 Awareness section to educate users on phishing techniques
- 💡 Clean and responsive UI for a smooth experience
- ☕ Java Spring Boot backend API

## 📚 Awareness Section

This section helps users understand:
- Common phishing techniques
- How to spot suspicious links and emails
- Practical tips to stay protected online

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Java (Spring Boot REST API)

## 📦 Dependencies

- Java 17+ (or compatible)
- Maven
- Spring Boot
- Web browser (for frontend)
- (Optional) Any editor like VS Code, IntelliJ, Eclipse

## 🚀 How to Use

1. Go to the **Scan** section.
2. Paste a suspicious email or URL.
3. Click on **Scan Now**.
4. Check the result and explore the **Awareness** section to learn more.

## ⚙️ How to Set Up and Run the Project

### 💻 Frontend
1. Navigate to the `frontend` folder:
   bash
   cd frontend
2. Open index.html in a browser or using VS Code Live Server.

### 🖥️ Backend
1. Navigate to the phishbuster folder (Spring Boot project):
   bash
   cd phishbuster
2. Make sure you have Java and Maven installed.
3. Run the backend using:
    bash
    mvn spring-boot:run
4. The backend will start at: http://localhost:8080

## 📈 Future Improvements

- 🔐 Add user authentication and login
- 📊 Store scan history
- 🖼️ Add database for scan logs
- 🖼️ Support image-based phishing detection

## 📁 Folder Structure
PhishBuster/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── phishbuster/
│   ├── src/
│   ├── pom.xml
│   └── Application.java
└── README.md

Made with ❤️ by Alka Mishra
