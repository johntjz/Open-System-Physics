---
title: "Patching vs. Refactoring: The Software Equivalent of Shotgun Prescriptions and Classical Jing Fang"
title_zh: "打補丁與代碼重構：群方處方與經典經方的軟體對應"
date: "2026-10-20"
category: "Systems Architecture & Software Engineering"
category_zh: "系統架構與軟體工程"
layout: "base.njk"
---

<!-- ================= ENGLISH SECTION (TOP) ================= -->

### 1. The Engineering Parallel to Medical Interventions

When a complex system—whether human physiology or a software codebase—hits an operational bottleneck, engineers and practitioners face a stark structural choice: apply heavy execution noise (patching or shotgun prescriptions) or perform rigorous diagnostic alignment (refactoring or classical Jing Fang).

- **The Patching Model (The "15-Herb" Equivalent):** When software encounters an edge case or performance bug, a low-discipline approach avoids structural diagnosis. Developers stack conditional statements, global state flags, and wrapper layers. While the feature ships quickly, internal entropy spikes, creating a fragile maze where a single modification silently breaks distant modules.
- **The Refactoring Model (The 3-Herb Jing Fang Equivalent):** Refactoring is the disciplined process of restructuring existing architecture and data flow without altering external behavior. Instead of adding code, rigorous diagnosis identifies the foundational flaw. Removing or reorganizing a minimal core logic makes complexity vanish entirely.

### 2. Why Systems Default to Execution Noise

In both medicine and engineering, the preference for brute-force execution over diagnostic refactoring stems from institutional and cognitive biases:
- **Invisibility of Output:** End-users and stakeholders perceive visible, noisy activity (patches or heavy prescriptions) as immediate progress, whereas structural refactoring leaves the interface looking identical while silently stripping away fragility.
- **Asymmetry of Effort:** Patching requires zero understanding of holistic system dynamics—it only demands local force. Refactoring requires holding the entire system's mental model in focus to locate the single high-leverage intervention point.
- **The Anxiety of Simplicity:** Choosing the simplest path requires comfort with being judged as doing "too little." Stripping a system down to its central pivot demands intense upfront focus, whereas blasting a problem with volume acts as an emotional hedge against diagnostic uncertainty.

---
---

<!-- ================= TRADITIONAL CHINESE SECTION (BOTTOM) ================= -->

### 1. 醫療介入在工程學上的對應

當複雜系統——無論是人體生理還是軟體代碼庫——面臨運作瓶頸時，工程師與從業者皆面臨嚴峻的結構選擇：施加沉重的執行雜訊（打補丁或群方處方），或者進行嚴格的診斷對齊（重構或經典經方）。

- **打補丁模型（「十五味藥」之對應）：** 當軟體遭遇邊緣案例或效能錯誤時，低紀律的方法會避開結構性診斷。開發者堆疊條件判斷、全局狀態旗標與包裝層。雖然功能快速上線，但內部熵值飆升，形成脆弱的迷宮，使單一修改便能默默破壞遠端模組。
- **重構模型（三味經方之對應）：** 重構是重組現有架構與資料流而不改變外部行為的紀律過程。嚴格的診斷不靠增加代碼，而是找出根本缺陷。移除或重組極少的核心邏輯，就能讓複雜性徹底消失。

### 2. 系統預設流向執行雜訊的原因

在醫學與工程學中，偏好暴力執行而非診斷重構，源自體制與認知上的偏誤：
- **產出之不可見性：** 終端用戶與利害關係人將可見、喧囂的活動（補丁或重劑處方）視為即時進展，而結構性重構在介面看似不變的同時，卻默默剝除了脆弱性。
- **力度的不對稱性：** 打補丁不需要理解整體系統動態——它只要求局部施力。重構則需要將整個系統的心智模型維持在焦點中，以找出單一的高槓桿介入點。
- **簡單性的焦慮：** 選擇最簡單的路徑需要能夠忍受被判定為「做得太少」。將系統剝離至其中央樞紐需要強烈的前期專注，而以數量轟炸問題則僅是對診斷不確定性的一種情緒避險。
