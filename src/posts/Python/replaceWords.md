---
title: "批量替换Word文档内容"
icon: "tool"
subtitle: "python"
date: 2023-03-24 10:52:27
isOriginal: true
category:
  - python
tag:
  - 工具脚本
---

# 项目名称
批量替换Word文档内容

## 项目描述
这是一个使用Python和Tkinter构建的GUI应用程序，用于批量替换指定文件夹中的Word文档内容。用户可以选择文件夹、输入要替换的旧文本和新文本，并指定输出文件夹。程序会遍历文件夹中的所有Word文档，替换指定内容，并将修改后的文档保存到输出文件夹。

## 依赖项
- Python 3.x
- [`tkinter`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Ff%3A%2FA-MyUI%2Fcnmd-icu%2Fsrc%2Fposts%2FPython%2F%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E6%A1%A3%E5%86%85%E5%AE%B9%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A4%7D%7D%5D%2C%22d7e38168-7de5-4b5e-9caa-c65204d1e8b3%22%5D "Go to definition")：Python内置的GUI库
- `python-docx`：用于处理Word文档
- [`pyinstaller`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Ff%3A%2FA-MyUI%2Fcnmd-icu%2Fsrc%2Fposts%2FPython%2F%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E6%A1%A3%E5%86%85%E5%AE%B9%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A4%7D%7D%5D%2C%22d7e38168-7de5-4b5e-9caa-c65204d1e8b3%22%5D "Go to definition")：用于将Python脚本打包成可执行文件

## 安装依赖项
```sh
pip install python-docx
pip install pyinstaller
```

## 使用方法
1. 运行脚本：
   ```sh
   python 批量替换word文档内的内容.py
   ```
2. 选择要处理的文件夹。
3. 输入要替换的旧文本和新文本。
4. 选择输出文件夹。
5. 点击“开始替换”按钮，程序将开始处理文件，并显示进度和统计信息。

## 代码
```python
import os
import tkinter as tk
from tkinter import filedialog, messagebox
from tkinter import ttk
import logging
from docx import Document

def replace_text_in_docx(file_path, old_text, new_text, output_folder, success_files, failed_files):
    try:
        doc = Document(file_path)
        for para in doc.paragraphs:
            if old_text in para.text:
                para.text = para.text.replace(old_text, new_text)
        for table in doc.tables:
            for row in table.rows:
                for cell in row.cells:
                    if old_text in cell.text:
                        cell.text = cell.text.replace(old_text, new_text)
        
        new_file_path = os.path.join(output_folder, os.path.basename(file_path))
        doc.save(new_file_path)
        logging.info(f"文件已保存: {new_file_path}")
        success_files.append(file_path)
    except Exception as e:
        logging.error(f"处理文件 {file_path} 时出错: {e}")
        failed_files.append(file_path)

def batch_replace_in_docx_files(folder_path, old_text, new_text, output_folder):
    success_files = []
    failed_files = []

    try:
        os.makedirs(output_folder, exist_ok=True)
        docx_files = [f for f in os.listdir(folder_path) if f.endswith('.docx')]
        total_files = len(docx_files)
        
        for i, filename in enumerate(docx_files):
            file_path = os.path.join(folder_path, filename)
            replace_text_in_docx(file_path, old_text, new_text, output_folder, success_files, failed_files)
            progress_var.set((i + 1) / total_files * 100)
            stats_label.config(text=f"总文件数: {total_files} 成功替换: {len(success_files)} 替换失败: {len(failed_files)}")
            root.update_idletasks()
    except Exception as e:
        logging.error(f"批量处理文件时出错: {e}")

    logging.info(f"文件总数: {total_files}")
    logging.info(f"成功: {len(success_files)}")
    logging.info(f"失败: {len(failed_files)}")
    if failed_files:
        logging.info(f"修改失败的文件: {', '.join(failed_files)}")

    return total_files, len(success_files), len(failed_files)

def select_folder():
    folder_path = filedialog.askdirectory()
    if folder_path:
        folder_entry.delete(0, tk.END)
        folder_entry.insert(0, folder_path)
        total_files = count_docx_files(folder_path)
        stats_label.config(text=f"总文件数: {total_files} 成功替换: 0 替换失败: 0")

def select_output_folder():
    output_folder = filedialog.askdirectory()
    if output_folder:
        output_folder_entry.delete(0, tk.END)
        output_folder_entry.insert(0, output_folder)

def count_docx_files(folder_path):
    return sum(1 for filename in os.listdir(folder_path) if filename.endswith('.docx'))

def start_replacement():
    folder_path = folder_entry.get()
    old_text = old_text_entry.get()
    new_text = new_text_entry.get()
    output_folder = output_folder_entry.get()

    if not folder_path or not old_text or not new_text or not output_folder:
        messagebox.showwarning("警告", "请填写所有字段")
        return

    total_files, success_count, failed_count = batch_replace_in_docx_files(folder_path, old_text, new_text, output_folder)
    messagebox.showinfo("完成", "批量替换操作完成")
    stats_label.config(text=f"总文件数: {total_files} 成功替换: {success_count} 替换失败: {failed_count}")
    progress_var.set(100)

# 创建主窗口
root = tk.Tk()
root.title("批量替换Word文档内容")

# 文件夹选择
tk.Label(root, text="选择文件夹:").grid(row=0, column=0, padx=10, pady=5)
folder_entry = tk.Entry(root, width=50)
folder_entry.grid(row=0, column=1, padx=10, pady=5)
tk.Button(root, text="浏览", command=select_folder).grid(row=0, column=2, padx=10, pady=5)

# 旧文本输入
tk.Label(root, text="替换内容:").grid(row=1, column=0, padx=10, pady=5)
old_text_entry = tk.Entry(root, width=50)
old_text_entry.grid(row=1, column=1, padx=10, pady=5)

# 新文本输入
tk.Label(root, text="新的内容:").grid(row=2, column=0, padx=10, pady=5)
new_text_entry = tk.Entry(root, width=50)
new_text_entry.grid(row=2, column=1, padx=10, pady=5)

# 输出文件夹输入
tk.Label(root, text="输出文件夹:").grid(row=3, column=0, padx=10, pady=5)
output_folder_entry = tk.Entry(root, width=50)
output_folder_entry.grid(row=3, column=1, padx=10, pady=5)
tk.Button(root, text="浏览", command=select_output_folder).grid(row=3, column=2, padx=10, pady=5)

# 开始按钮
tk.Button(root, text="开始替换", command=start_replacement).grid(row=4, column=1, padx=10, pady=20)

# 统计信息标签
stats_label = tk.Label(root, text="总文件数: 0 成功替换: 0 替换失败: 0")
stats_label.grid(row=5, column=1, padx=10, pady=5)

# 进度条
progress_var = tk.DoubleVar()
progress_bar = ttk.Progressbar(root, variable=progress_var, maximum=100)
progress_bar.grid(row=6, column=0, columnspan=3, padx=10, pady=10, sticky="ew")

# 运行主循环
root.mainloop()
```