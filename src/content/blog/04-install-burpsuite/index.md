---
title: "M1 虛擬機內 Kali Linux 安裝 Burp Suite"
description: "How to Install Burp Suite on Kali Linux for Apple Silicon"
date: "Jan 10 2025"
---

在 Mx 晶片上的 Apple 系統，Kali 內安裝 Burp Suite Community Edit
# MAC OS 版本
---
#### Step1:  [BurpSuite JAR](https://portswigger.net/burp/releases) 下載套件
```
下載 Burp Suite Community Edition JAR
```

#### Step2: 拷貝檔案到 /opt 資料夾內
```
sudo cp burpsuite_community_v2024.11.2.jar /opt
```

#### Step3: 進入 /opt 修改檔名
```
cd /opt && sudo ln -s burpsuite_community_v2024.11.2.jar burpsuite.jar
```

#### Step4: 進入 /usr/local/bin 建立 burpsuite 與內容
```
sudo vi /usr/local/bin/burpsuite
```

```
#!/bin/bash

java -jar /opt/burpsuite.jar
```

#### Step5: 給予 burpsuite 權限
```
sudo chmod +x burpsuite
```

#### Step6: 測試 burpsuite
```
burpsuite
```

#### Step7: FireFox 設置 Proxy
```
HTTP
127.0.0.1:8080

HTTPS
127.0.0.1:8080
```

#### Step8: FireFox 進入網址下載 CA憑證
```
http://burpsuite
```

#### Step9: FireFox 匯入 CA憑證
```
Certificate Manager -> Authorities -> Import
```
 - [x] Trust this CA to identify websites.
 - [x] Trust this CA to identify email users.

