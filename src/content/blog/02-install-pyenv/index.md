---
title: "安裝 PyEnv 管理 Python 版本"
description: "MACOS Install PyEnv"
date: "Jan 06 2025"
---

PyEnv 是一個管理 Python 版本的套件，安裝完成後可以輕鬆切換所需的區域所使用的版本。
# MAC OS 版本
---

#### Step1:  [Homebrew Formulae](https://formulae.brew.sh/) 安裝套件
```
brew install pyenv
```

#### Step2: 環境變數設定
```
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

#### Step3: 重新啟動 Shell
```
exec "$SHELL"
```

#### Step4: 列出 PyEnv 可安裝的 Python 版本
```
pyenv install --list
```

#### Step5: PyEnv 安裝 Python
```
pyenv install 3.13.1
```

#### Step6: PyEnv 設置使用區域

* global：全域 - 影響範圍全系統
```
pyenv global 3.13.1
```

* local：目錄 - 影響範圍當前目錄
```
pyenv local 3.13.1
```

* shell：臨時 - 影響範圍當前shell
```
pyenv shell 3.13.1
```

* system：預設 - 切回系統預設版本
```
pyenv global system
```

#### Step7: PyEnv 檢查

* 檢查目前使用的版本
```
pyenv versions
>>> * system (set by /Users/r4ulux/.pyenv/version)
>>>   3.13.1
```