---

# 🙌 Contributing to PNG to PPT Converter

We’re excited that you’re interested in contributing to the PNG to PPT Converter project! Your contributions help make this project better for everyone. This document provides guidelines and best practices for contributing.

## 📝 How to Contribute

### 1. Fork the Repository

1. Navigate to the [repository](https://github.com/TheProlifical/ppt-to-png) on GitHub.
2. Click the "Fork" button in the upper right corner of the page to create a copy of the repository under your GitHub account.

### 2. Clone Your Fork

```bash
git clone https://github.com/theprolifical/ppt-to-png.git
cd ppt-to-png
```

### 3. Create a New Branch

Before making any changes, create a new branch for your feature or bugfix:

```bash
git checkout -b my-new-feature
```

### 4. Make Your Changes

Make your changes or additions in your new branch. Be sure to:

- Follow the code style of the project.
- Write or update tests as necessary.
- Document any new features or changes in the `README.md`.

### 5. Test Your Changes

Make sure your changes work as expected. If you’re working on the website version or standalone version, run the respective scripts to verify functionality.

- **Web Version**: 
    ```bash
    python web_version.py
    # Access the web interface at http://localhost:8080 and test functionality
    ```
- **Standalone Version**:
    ```bash
    python standalone.py
    # Verify that the PNG files in the 'files' folder are correctly converted to PPT files in the root directory
    ```

### 6. Commit Your Changes

Use descriptive and concise commit messages. For example:

```bash
git add .
git commit -m "Add support for batch processing of PNG files"
```

### 7. Push to Your Fork

Push your changes to your forked repository:

```bash
git push origin my-new-feature
```

### 8. Submit a Pull Request

Go to the original repository on GitHub and submit a Pull Request (PR) from your branch. Fill out the PR template, providing as much detail as possible.

---

## 🛠️ Code Style

Please ensure that your code follows the project’s code style guidelines:

- **Python Version**: Ensure your code is compatible with Python 3.x.
- **Linting**: Run a linter (e.g., `flake8`, `black`) before submitting.
- **Comments**: Comment your code where necessary to explain complex logic.

---

## 🧪 Testing

Writing tests is an important part of contributing to this project:

- Include tests for any new features or significant changes.
- Run all existing tests to ensure your changes don't cause any regressions.
- Use the `unittest` framework, or another suitable testing framework, to write tests.

### Testing Instructions

- **Web Version**:
  - Upload PNG files via the web interface.
  - Ensure the converted PPT files are saved in the `outputs` folder.
  - Test multiple scenarios to verify robustness.

- **Standalone Version**:
  - Place PNG files in the `files` folder.
  - Run `standalone.py` and ensure the converted PPT files are saved in the root directory.
  - Test with different numbers of PNG files to verify batch processing.

---

## 🗂️ Documentation

Please update the `README.md` or any other relevant documentation for any changes or new features you introduce. Well-documented code is easier to maintain and understand!

---

## 🛡️ Security

If you are submitting a bug fix or feature that addresses a security issue, please make sure you have read and followed the guidelines in the [Security Policy](SECURITY.md).

---

## 🤝 Code of Conduct

Please note that this project is governed by a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## 💬 Getting Help

If you need any help or have questions about contributing, feel free to open an issue or contact the maintainers at [itsahson1978@gmail.com].

---

Thank you for contributing! 🚀

---
