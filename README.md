---

# 🖼️ PNG to PPT Converter

Easily convert PNG images to PowerPoint (PPT) presentations with our simple tool! This project offers two methods: a web interface and a standalone script. 🎨

## ✨ Features

- **Two Modes of Operation**:
  - 🌐 **Website**: Access via a local web server.
  - 🖥️ **Standalone**: Run the script directly for quick conversions.
- **Organized File Handling**:
  - Website: Uploads and outputs are stored in respective folders.
  - Standalone: Input files are placed in a designated folder, and output files are stored at the root directory.

## 📁 Repository

Access the repository [here](https://github.com/TheProlifical/ppt-to-png).

---

## 🌐 Website Version

The website version provides an easy-to-use interface for converting PNG images to PPT. 

### 🔧 How to Run

1. **Navigate to the Project Directory**:
    ```bash
    cd ppt-to-png
    ```
2. **Run the Web Version**:
    ```bash
    python web_version.py
    ```
3. **Access the Web Interface**:
    - Open your browser and go to: `http://localhost:8080`
4. **Uploading Files**:
    - Upload your PNG files via the web interface.
    - Converted PPT files will be saved in the `outputs` folder.
  
### 📁 Folder Structure for Website Version
- `uploads`: Store your uploaded PNG files here.
- `outputs`: Your converted PPT files will be saved here.

---

## 🖥️ Standalone Version

If you prefer a more direct approach, use the standalone script.

### 🔧 How to Run

1. **Navigate to the Project Directory**:
    ```bash
    cd ppt-to-png
    ```
2. **Prepare Your Files**:
    - Place all your PNG files in the `files` folder.
3. **Run the Standalone Script**:
    ```bash
    python standalone.py
    ```
4. **Output Location**:
    - The converted PPT files will be saved in the root directory of the project.

### 📁 Folder Structure for Standalone Version
- `files`: Place your PNG files here before running the script.
- `outputs`: The converted PPT files will be saved in the root directory.

---

## 🚀 Getting Started

### Prerequisites

- Python 3.x
- Required libraries (install via `requirements.txt`)

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/TheProlifical/ppt-to-png.git
    ```
2. **Install Required Libraries**:
    ```bash
    pip install -r requirements.txt
    ```

---

## 🛠️ Tech Stack

- Python 🐍
- **Bottle** 🍾 (for the web interface)
- **python-pptx** 📊 (for generating PowerPoint files)
- **PIL** 🖼️ (Python Imaging Library for image processing)
- **Threading** 🧵 (for handling concurrent tasks)

---

## 🎯 Future Enhancements

- Add support for more image formats.
- Implement batch processing for large sets of images.

---

## 🤝 Contributions

Feel free to fork this repository and contribute! Pull requests are welcome.

---

## 📄 License

This project is licensed under the BSD 3-Clause "New" or "Revised" License. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Ahson.

---
