---
title: "Obsidian 用於 OffSec 考試報告"
description: "Obsidian for OffSec Exam"
date: "Jan 06 2025"
---

用於 OffSec 考試使用的 Obsidian 版本
# MAC OS 版本
---
#### Step1:  [Homebrew Formulae](https://formulae.brew.sh/) 安裝套件
```
brew install --cask obsidian
brew install pandoc
brew install --cask mactex
```

#### Step2:  套件插件啟用安裝
```
Community Plugin -> Turn on community plugins -> Browse -> pandoc -> Install -> Enable
```

#### Step3.1:  Pandoc Options 設定 Pandoc Path
```
which pandoc
>> /opt/homebrew/bin/pandoc
```

#### Step3.2:  Pandoc Options 設定 PDFLatex Path
```
which pdflatex
>> /Library/Tex/texbin/pdflatex
```

#### Step3.3:  Pandoc Options 設定 Extra Pandoc Arguments
```
--template /Users/r4ulux/.pandoc/templates/eisvogel.latex
--from markdown+yaml_metadata_block+raw_html
--table-of-contents
--toc-depth 4
--number-sections
--top-level-division=chapter
--highlight-style breezedark
--resource-path=.:src
--listings
```

#### Step3.4:  Pandoc Options 設定 Export folder
```
/Users/r4ulux/Desktop
```

#### Step3.5:  Pandoc Options 設定 Export file from HTML or Markdown?
```
Markdown
```

#### Step4:  eisvogel.latex
```
mkdir -p ~/.pandoc/templates/

wget https://github.com/Wandmalfarbe/pandoc-latex-template/releases/download/v3.0.0/Eisvogel-3.0.0.zip -O ~/.pandoc/templates/eisvogel.latex.zip

cd ~/.pandoc/templates unzip eisvogel.latex.zip

ls -1 | grep -v -E '^eisvogel.latex$' | xargs rm -rf
```

#### Step5:  Git Clone Markdown
```
git clone https://github.com/noraj/OSCP-Exam-Report-Template-Markdown.git
```

#### Step6:  Markdown 輸出 PDF 測試
```
>_ 命令面板輸入以下任何關鍵字
Pandoc Plugin: Export as PDF (via LaTeX)
```

#### 成功會顯示 Successfully exported