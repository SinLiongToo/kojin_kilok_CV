# Masa Hsin-Lung Tu (杜信龍) | 跨界・鏈結 Portfolio & Resume

> 跨越晶片與文字的邊界，持續奔跑。

本專案為杜信龍（Masa Hsin-Lung Tu）的個人專業履歷與跨界作品集網站。結合了 20 餘年跨國半導體研發與新產品導入（NPI）工程經歷、臺灣文學金典獎首獎作家與出版詩集、以及完成 85 場超級馬拉松與百岳越野之極限體能紀錄。

---

## 🌟 核心特色與亮點

- **三大領域跨界整合**：
  - 🔬 **半導體與科技 (Tech)**：20+ 年產業資歷、25+ 件跨國發明專利、車用 5G 雷達、六標準差黑帶與自研工程 WebApps。
  - 📚 **台語文學創作 (Literature)**：9 本已出版著作、金典獎創作首獎、打狗文學獎等歷屆獎項、18 場講座歷程與影音講堂。
  - 🏃 **極限超馬與越野 (Ultra Running)**：85 場全馬與超馬紀錄（含 100K 超馬）、台灣百岳地圖、95 筆真實 GPX 跑步足跡互動地圖。
- **極致前端體驗**：
  - 🌓 **雙主題流暢切換**：深色模式（Dark Theme）與淺色模式（Light Theme）一鍵無縫切換，並與足跡地圖即時同步。
  - 🔄 **3D 翻轉個人名片 (Profile Card)**：首頁 Hero 視覺卡正面展示個人資訊，背面展示極限數據總覽與實體工作識別證入口。
  - 🏷️ **歷年實體工作識別證畫廊 (Career Badges Archive)**：收錄 Foxconn、MStar 等真實工作識別證，具備高畫質燈箱放大功能與經歷時間軸關聯。
  - 📱 **全響應式設計**：支援桌機、平板與智慧型手機，提供折疊式展開與平滑滾動導覽。

---

## 📁 專案檔案架構

```text
PERSONAL CV/
├── index.html                     # 主動態網站（外連 style.css 與 script.js）
├── style.css                      # 全站 CSS 設計系統、變數與深淺主題樣式
├── script.js                      # 核心前端邏輯、資料庫（Badges, Races, Patents, Books...）
├── resume_Masa_standalone.html    # 單檔案離線版（全圖片/資料 base64 內嵌，可直接傳閱）
├── resume_Masa_Hsin_Lung_Tu.html  # 完整列印與典藏版
├── RUNNING_MAP.html               # 台灣跑步足跡地圖 Leaflet 獨立嵌入頁面
├── running_tracks_data.js         # 壓縮後之跑步軌跡資料集
├── assets/
│   └── images/                    # 專案圖片、書封、以及工作識別證圖檔
│       ├── badge_foxconn.jpg      # Foxconn 實體工作證（已裁切）
│       ├── badge_mstar.jpg        # MStar 晨星半導體工作證（已裁切）
│       └── ...
├── resume_picture/                # 原始待處理之證件照片暫存資料夾
├── CHANGELOG.md                   # 專案版本詳細開發與維護變更記錄
└── README.md                      # 本說明文件
```

---

## 🏷️ 如何新增工作識別證 (Badge ID Workflow)

系統已建立高度模組化且易於擴充的資料結構（Data Flow）。未來若要新增新的實體識別證（例如 NXP 荷蘭出差證、NXP 台灣證等），請遵循以下簡易流程：

### 步驟 1：準備與裁切圖片
1. 將拍攝好的識別證照片放入 `resume_picture/` 或直接處理。
2. 建議裁切為垂直卡片比例（約 `1 : 1.4` 至 `1 : 1.6`，例如寬 450px × 高 650px）。
3. 去除周遭多餘背景雜物，保留完整的公司 Logo、照片、姓名與識別號碼。
4. 將處理完成的高解析圖檔存入 `assets/images/`，命名範例：`badge_nxp.jpg`。

### 步驟 2：在 `script.js` 的 `BADGES_DATABASE` 中追加資料
開啟 `script.js`，找到 `const BADGES_DATABASE = [...]`，在陣列中加入新物件：

```javascript
const BADGES_DATABASE = [
  // 現有識別證
  {
    id: "foxconn",
    company: "Foxconn (鴻海精密)",
    period: "2006 - 2011",
    title: "RF System Engineer",
    image: "assets/images/badge_foxconn.jpg",
    caption: "Foxconn 鴻海精密工業股份有限公司 | 識別證 (2006 - 2011)",
    desc: "負責 WiMAX 終端設備與基站模組設計、自動化測試與射頻認證。"
  },
  {
    id: "mstar",
    company: "MStar (晨星半導體)",
    period: "2011 - 2012",
    title: "RF Senior Engineer",
    image: "assets/images/badge_mstar.jpg",
    caption: "MStar Semiconductor 晨星半導體 | 識別證 (2011 - 2012)",
    desc: "負責藍牙晶片系統級測試、設計驗證、失效分析與頻段共存排查。"
  },
  // 🔽 未來新增的新工牌 🔽
  {
    id: "nxp",
    company: "NXP (恩智浦半導體)",
    period: "2012 - Present",
    title: "Advanced / Principle Product Engineer",
    image: "assets/images/badge_nxp.jpg",
    caption: "NXP Semiconductors | 識別證 (2012 - Present)",
    desc: "主導車用 5G 雷達、ADAS 處理器之 NPI 導入、六標準差良率改善與全球封測驗證。"
  }
];
```

### 步驟 3：自動生效效果
- **Hero 卡片背面**：按鈕上的微型重疊圖示堆疊與總張數（例如「3 張 ❯」）將**自動動態計算與更新**。
- **識別證彈窗 (Badges Modal)**：彈窗內會自動生成該張工牌的展示卡，點擊可直接透過高解析度燈箱（Lightbox）放大檢視。
- **經歷時間軸關聯 (選用)**：可在 `index.html` 該任職公司的經歷標題加上：
  ```html
  <a href="#openBadgesModal" class="timeline-badge-link" data-badge-id="nxp" title="查看 NXP 識別證"><i class="fa-solid fa-id-badge"></i> 識別證</a>
  ```

---

## 💻 本機預覽方式

無需安裝額外伺服器或建置工具，直接使用任何現代瀏覽器開啟：
1. **主網站**：直接雙擊開啟 `index.html`。
2. **單檔案獨立版**：直接雙擊開啟 `resume_Masa_standalone.html`（所有圖片皆以 base64 內嵌，離線可直接閱讀）。

---

## 📝 授權與版權聲明

© 2026 Masa Hsin-Lung Tu (杜信龍). All Rights Reserved.
本專案內所收錄之技術專利、文學創作作品、書籍封面、相片影像與賽事足跡資料版權均屬原作者所有，未經授權請勿擅自轉載或商業使用。
