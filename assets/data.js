/* ============================================================
 * data.js —— 葛雪峰 · AIGC 视觉设计师 作品集「内容层」
 * 内容与《葛雪峰_AIGC视觉设计师_作品集》21 页 PPT 同源：六大能力板块。
 * ============================================================ */
window.PORTFOLIO = {

  /* ---------- 1. 基本信息 ---------- */
  profile: {
    name: "葛雪峰",
    nameEn: "GE XUEFENG",
    role: "AIGC 视觉设计师",
    tagline: "用 AIGC 把抽象需求<br><span class=\"grad\">变成可落地的视觉方案</span>",
    sub: "7 年+ 视觉设计 · 3 年+ AIGC 生产链路。公司第一批 AIGC 工具落地推动者，独立完成从 ComfyUI 工作流搭建、提示词工程到 Photoshop 精修合成的完整链路——把「会生成」做成「能交付」，也把视觉叙事与镜头语言做成可复用的方法。",
    avatar: "assets/img/avatar.svg",
    aboutTitle: "从工作流搭建到 PS 精修，一条链路走完",
    about: [
      "长期负责游戏宣传 Banner、海报与活动视觉的全流程设计，服务过多款已上线游戏项目。环境设计专业出身，具备扎实的空间构成、色彩与光影审美功底。",
      "深度使用 ComfyUI、Stable Diffusion、Midjourney、ChatGPT 等 AIGC 工具，能独立完成从工作流搭建、模型选型、提示词工程到 Photoshop 精修合成的完整 AI 视觉生产链路。",
      "作为公司第一批 AIGC 工具落地推动者，把 ComfyUI / SD 引入宣传物料生产，并推动 AI 视频（MiniMax H3 / 即梦）用于广告物料；近两年在业务端推动 AI 落地，让工具真正服务交付。",
      "持续产出 AI 生图测评内容，对流行游戏风格与 AIGC 最新玩法保持高敏感度——下面六个板块，每一块都是一次完整的「需求 → 控制 → 生成 → 精修 → 落地」。"
    ],
    meta: ["汕头大学 · 环境设计 · 本科", "7 年+ 视觉设计经验", "3 年+ AIGC 生产链路", "长沙"]
  },

  /* ---------- 2. Hero 数据 ---------- */
  stats: [
    { num: "6",    label: "能力板块 · 21 页作品集" },
    { num: "7年+", label: "视觉设计经验" },
    { num: "3年+", label: "AIGC 生产链路" }
  ],

  /* ---------- 3. 专注方向 ---------- */
  focus: [
    "配色构成",
    "光影把控",
    "ComfyUI 工作流",
    "游戏视觉落地",
    "AI 动态视觉",
    "LoRA 风格定制"
  ],

  /* ---------- 3.5 首屏精选轮播 ---------- */
  showcase: [
    {
      type: "image",
      src: "assets/img/show-kv.jpg",
      title: "花火祭 · 活动主 KV",
      note: "自建日式手绘世界观「花火祭」：鸟居、纸灯笼、花火与海浪。AI 生成 + PS 精修，靛蓝夜幕 + 暖金主色",
      tag: "GAME KV"
    },
    {
      type: "image",
      src: "assets/img/show-gold.jpg",
      title: "一图四色 · 暖金剧场",
      note: "同一构图输出四套配色并排对比：暖金 + 朱红对应史诗 / 国风，配色是比较出来的",
      tag: "COLOR STUDY"
    },
    {
      type: "image",
      src: "assets/img/show-dusk.jpg",
      title: "同场景 · 黄昏金调",
      note: "光照词 golden hour + 暖色温，氛围词 warm glow，PS 统一暖色调加光晕",
      tag: "LIGHTING"
    },
    {
      type: "image",
      src: "assets/img/show-comfy2.jpg",
      title: "ComfyUI 批量出图工作流",
      note: "Lora Stack ×3 + ControlNet + Batch 16 张自动落盘，换题材不换流程",
      tag: "WORKFLOW"
    },
    {
      type: "image",
      src: "assets/img/show-lora.jpg",
      title: "蛋仔风格 · LoRA 风格化出样",
      note: "12-20 张 Q 版图训练风格 LoRA，同一风格稳定复现成套运营物料",
      tag: "LORA"
    }
  ],

  /* ---------- 4. 工具矩阵 ---------- */
  tools: [
    {
      icon: "🎨", title: "图像生成", level: "CORE",
      items: ["Midjourney", "Stable Diffusion", "ComfyUI", "Flux", "Seedream"],
      level_pct: 92
    },
    {
      icon: "🧩", title: "工作流与控制", level: "CORE",
      items: ["ComfyUI 复杂工作流", "ControlNet", "LoRA 训练", "提示词工程"],
      level_pct: 90
    },
    {
      icon: "🖌️", title: "后期精修与视觉叙事", level: "ADVANCED",
      items: ["Photoshop 精修合成", "AE", "PR", "剪映", "MiniMax H3", "即梦"],
      level_pct: 86
    },
    {
      icon: "🤖", title: "文本与大模型", level: "DAILY",
      items: ["ChatGPT", "Claude", "DeepSeek", "Kimi"],
      level_pct: 85
    }
  ],

  /* ---------- 5. 精选作品（六大能力板块） ---------- */
  works: [
    {
      cover: "assets/img/work-palette.jpg",
      kicker: "COLOR",
      title: "板块一 · 一图四色：色板实验",
      desc: "同一张基础构图，输出 4 套配色方案并排对比：冷冽蓝调 / 暖金剧场 / 莫兰迪高级灰 / 高饱和游戏风。每套标注色彩构成分析与适合的游戏风格类型——配色不是感觉，是比较出来的。",
      tags: ["色彩构成", "配色方法论", "Midjourney", "PS 调色"],
      process: [
        ["基调", "先定情绪与题材：科技 / 国风 / 文艺 / 二次元各归其位"],
        ["控制", "锁定构图与光影不变，只改色彩关键词，保证唯一变量"],
        ["生成", "同一构图批量出 4 套配色，统一分辨率与视角"],
        ["分析", "标注明度 / 纯度 / 色相结构，给出适用游戏类型"]
      ],
      gallery: [
        { img: "assets/img/snip-cold.jpg",  cap: "冷冽蓝调 · 科技 / 克苏鲁" },
        { img: "assets/img/g1-gold.jpg",    cap: "暖金剧场 · 史诗 / 国风" },
        { img: "assets/img/snip-morandi.jpg", cap: "莫兰迪灰 · 文艺 / 策略" },
        { img: "assets/img/snip-game.jpg",  cap: "高饱和 · 二次元 / 竞技" }
      ],
      note: "方法论来自环境设计专业的色彩构成训练——先定基调与情绪，再按明度 / 纯度 / 色相推导整套配色；锁定构图只改色彩词，保证唯一变量，让配色变成可比较的客观题。"
    },
    {
      cover: "assets/img/work-light.jpg",
      kicker: "LIGHTING",
      title: "板块二 · 同场景五时光影",
      desc: "同一场景跑通清晨柔光 / 正午硬光 / 黄昏金调 / 蓝调时刻 / 霓虹夜景 5 种光照时段。光照词 + 氛围词双轨控制，PS 后期补光收尾——光影是可以被精确指挥的。",
      tags: ["光照词控制", "氛围词", "PS 补光"],
      process: [
        ["光照", "光照词定时段：soft morning light / golden hour / blue hour / neon"],
        ["氛围", "haze / glow / contrast 控制空气感与画面对比"],
        ["后期", "PS 分层补光：暗部提亮、高光压制、冷暖对比强化"]
      ],
      gallery: [
        { img: "assets/img/g2-morning.jpg",  cap: "清晨柔光 · soft morning light" },
        { img: "assets/img/g2-noon.jpg",     cap: "正午硬光 · noon harsh sunlight" },
        { img: "assets/img/g2-dusk.jpg",     cap: "黄昏金调 · golden hour" },
        { img: "assets/img/g2-bluehour.jpg", cap: "蓝调时刻 · blue hour" },
        { img: "assets/img/g2-night.jpg",    cap: "霓虹夜景 · neon" }
      ],
      note: "同一场景验证光影可被精确指挥：光照词定时段、氛围词控空气感，PS 分层补光收尾——五张图的色温与光位差异即控制力证明。"
    },
    {
      cover: "assets/img/work-comfy.jpg",
      kicker: "WORKFLOW",
      title: "板块三 · ComfyUI 复杂工作流",
      desc: "多模型对比评测 + 风格化批量出图 + 真实节点排障：统一提示词并联 3 个 Checkpoint 出对比拼图；Lora Stack ×3 + ControlNet 批量 16 张；一次 CUDA 显存不足的完整排障链路。",
      tags: ["ComfyUI", "多模型评测", "批量出图", "节点排障"],
      process: [
        ["对比", "统一提示词并联 3 个底模，2×2 拼图横向对比风格"],
        ["批量", "Lora Stack 分层控权重，Batch 16 张自动编号落盘"],
        ["模板", "参数模板化，换题材即换提示词，流程稳定复用"],
        ["排障", "CUDA 显存不足 → 定位 KSampler → 降权重跑成功"]
      ],
      gallery: [
        { img: "assets/img/show-comfy2.jpg", cap: "工作流 2 · Lora Stack ×3 + 批量 16 张" },
        { img: "assets/img/g3-tshoot.jpg",   cap: "节点排障 · 报错定位到修复全链路" }
      ],
      note: "排障链路实录：CUDA 显存不足 → 定位 KSampler → 切换 sdxl_turbo + 降权 → 重新分配显存 → 重跑成功。参数模板化让换题材即换提示词，流程稳定复用。"
    },
    {
      cover: "assets/img/work-kv.jpg",
      kicker: "GAME VISUAL",
      title: "板块四 · 花火祭：游戏视觉落地",
      desc: "自建日式手绘世界观「花火祭」，围绕一个运营活动做成套视觉：活动主 KV、横竖版 Banner、弹窗、Icon 系列。同一世界观同一视觉语言，成套一致、可直接进游戏 UI。",
      tags: ["世界观设定", "活动 KV", "成套交付", "PS 精修"],
      process: [
        ["设定", "世界观文案：仲夏夜神社祭典、狐灵出没、御守兑换的故事线"],
        ["生成", "AI 出概念场景与 KV 骨架：鸟居 + 花火 + 标题位"],
        ["精修", "PS 修型调色，统一靛蓝夜幕 + 暖金主色"],
        ["成套", "延展横 / 竖 Banner、弹窗与御守 / 狐面 / 灯笼 Icon"]
      ],
      gallery: [
        { img: "assets/img/g4-scene.jpg",    cap: "概念场景 · 夏夜祭典鸟居" },
        { img: "assets/img/g4-banner-h.jpg", cap: "横版 Banner · 商店大图" },
        { img: "assets/img/g4-banner-v.jpg", cap: "竖版 Banner · 开屏投放" },
        { img: "assets/img/snip-popup.jpg",  cap: "活动弹窗 · 限时活动视觉" },
        { img: "assets/img/snip-icons.jpg",  cap: "Icon · 狐狸面具符号" },
        { img: "assets/img/g4-delivery.jpg", cap: "成套交付 · 同世界观同视觉语言" }
      ],
      note: "KV 构图公式：鸟居 + 花火 + 标题位，视觉中心明确；配色锁定靛蓝夜幕 + 暖金主色。Icon（御守/狐面/灯笼）统一样式，可直接进游戏 UI——从世界观到成套物料一条链路交付。"
    },
    {
      cover: "assets/img/work-motion.jpg",
      kicker: "MOTION",
      title: "板块五 · AI 动态视觉",
      desc: "用静帧表达动态：AI 生成关键帧 + 插帧，粒子轨迹与光效表达运动方向与速度感，AE / ComfyUI 补间与运镜，产出 10-20 秒可循环片段——面试现场可演示视频。",
      tags: ["图生视频", "粒子光效", "AE 补间", "循环片段"],
      process: [
        ["关键帧", "AI 生成起止关键帧与光效素材"],
        ["动效", "流光粒子轨迹 / 呼吸灯 / 景深运镜表达时间感"],
        ["合成", "AE / ComfyUI 补间与运镜，形成 10-20s 可循环片段"]
      ],
      gallery: [
        { img: "assets/img/g5-still0.jpg", cap: "静帧种子 · 流光粒子轨迹" },
        { img: "assets/img/snip-still.jpg", cap: "粒子方向 · 运动速度感" },
        { img: "assets/img/g5-still2.jpg", cap: "光效收尾 · 景深运镜" }
      ],
      note: "动态思路：精选高质量静帧作「种子」交图生视频引擎演绎，AI 生成关键帧 + 插帧，粒子轨迹与光效表达运动方向；AE / ComfyUI 补间与运镜，输出 10-20s 可循环片段。"
    },
    {
      cover: "assets/img/work-lora.jpg",
      kicker: "LORA",
      title: "板块六 · 蛋仔风格 LoRA 定制",
      desc: "训练特定氛围风格 LoRA：圆润 Q 版、明快糖果色、活泼表情。12-20 张训练集即可稳定复现风格化出样，直接用于 Q 版角色、吉祥物与社交传播物料。",
      tags: ["LoRA 训练", "风格化", "Q 版角色", "成套出样"],
      process: [
        ["训练集", "精选 12-20 张 Q 版角色缩略图"],
        ["训练", "风格 LoRA 定位：蛋仔派对式圆润可爱风"],
        ["验证", "写实角色 → 风格化 Q 版前后对比"],
        ["出样", "Q 版角色 / 活动吉祥物 / 社交传播成套物料"]
      ],
      gallery: [
        { img: "assets/img/snip-lora-ba.jpg", cap: "训练前后 · 写实 → Q 版对比" },
        { img: "assets/img/show-lora.jpg",    cap: "风格化出样 · 成套 Q 版角色" }
      ],
      note: "训练集 12-20 张 Q 版角色缩略图，风格定位蛋仔派对式圆润可爱风；同一 LoRA 稳定复现，出样可直接用于 Q 版角色 / 吉祥物 / 社交传播物料。"
    }
  ],

  /* ---------- 5.5 深度案例（二级详情页） ---------- */
  caseStudies: [
    {
      num: "01",
      kicker: "E-COMMERCE DETAIL PAGE",
      title: "LUMIA 光研 · 详情页全案",
      desc: "虚构护肤品牌 7 屏竖版详情长图，配 Design Show 标题页、手机 mockup、规格书、设计判断、三段式配方与迭代对照。",
      cover: "assets/lumia/m2/m2_s0.jpg",
      href: "case-lumia.html",
      tags: ["详情页全案", "手机 mockup", "可复现配方"]
    },
    {
      num: "02",
      kicker: "AI VIDEO & MODEL SELECTION",
      title: "AI 视频 · 变形修复与模型选型",
      desc: "雨夜跑车 TVC 从背景崩、手崩到可用成片的三版迭代，另附 5 条多模型视频成片：宠物广告 / 竖版微缩 / 2D 动画 / 电影感对峙 / 水墨剪影。",
      cover: "assets/video/car_tvc_sof_poster.jpg",
      href: "case-video.html",
      tags: ["视频成片", "迭代对照", "6 模型"]
    },
    {
      num: "03",
      kicker: "GUOFENG FESTIVAL KV",
      title: "国风节庆 KV · 四时流转",
      desc: "覆盖春节 / 夏日祭 / 中秋 / 秋景四个节令的国风视觉，从完整活动 KV 到节日海报，再加国风角色与装饰海报延展——展示国风美学在商业活动、艺术表达与角色插画间的切换。",
      cover: "assets/guofeng/ruixue_kv.jpg",
      href: "case-guofeng.html",
      tags: ["国风节庆", "活动 KV", "Q 版 / 写实"]
    },
    {
      num: "04",
      kicker: "FASHION EDITORIAL",
      title: "时尚大片 · 四联时装与人像",
      desc: "LA LUMIÈRE PARIS 四联时装大片，加潮流插画 / 情绪时尚 / 油画质感 / 森系角色 / 雪地情绪 / 概念剪影 / 楼梯光影七张人像，展示成组调性统一与人物、光影质感两种高难度能力。",
      cover: "assets/fashion/lumiere_quad.jpg",
      href: "case-fashion.html",
      tags: ["时尚大片", "四联成组", "人物质感"]
    },
    {
      num: "05",
      kicker: "VISUAL CATEGORY EXPANSION · EYROVE ARCHIVE",
      title: "风格图库 · 六类视觉补全",
      desc: "从 EYROVE 项目海量素材中筛选、去重、分类的视觉参考库：UI 信息、3D 艺术、动物萌宠、产品设计、绘本插画、海报人像六类，补全现有能力板块未覆盖的视觉类型。素材来源于公开授权项目，作为风格参考与选型判断依据，非本人原创作品。",
      cover: "assets/3dart/rv-jimeng-3761cda9d26887bd6de14b981e07.webp",
      href: "case-categories.html",
      tags: ["六类补全", "筛选去重", "风格参考"]
    },
    {
      num: "06",
      kicker: "SECOND-PASS CURATION · EYROVE ARCHIVE",
      title: "美术性复筛 · 74 张二次入库精选",
      desc: "从 26814 条备选池中按设计性与美术性二次复筛出的 74 张代表作，覆盖国风美学、写实人像、动漫游戏、未来科幻、插画 CG 等 14 类视觉类型。尺寸不再是硬门槛，好看、可借鉴才是入库标准。",
      cover: "assets/inspiration/secondpass/eyrove2-038-rv-jimeng-e15fcb3ddd4edf.webp",
      href: "case-curation.html",
      tags: ["二次精选", "美术性复筛", "14 类目"]
    }
  ],

  /* ---------- 6. 作品片段 ---------- */
  snippets: [
    { img: "assets/img/snip-cold.jpg",     cap: "冷冽蓝调 · 科技 / 克苏鲁" },
    { img: "assets/img/snip-game.jpg",     cap: "高饱和游戏风 · 二次元竞技" },
    { img: "assets/img/snip-morandi.jpg",  cap: "莫兰迪灰 · 文艺 / 策略" },
    { img: "assets/img/snip-bluehour.jpg", cap: "蓝调时刻 · 城市灯光" },
    { img: "assets/img/snip-popup.jpg",    cap: "活动弹窗 · 花火祭" },
    { img: "assets/img/snip-icons.jpg",    cap: "Icon · 狐狸面具符号" },
    { img: "assets/img/snip-still.jpg",    cap: "动态静帧 · 粒子轨迹" },
    { img: "assets/img/snip-lora-ba.jpg",  cap: "LoRA 风格化前后对比" }
  ],

  /* ---------- 6.5 灵感库（参与项目精选图） ---------- */
  inspiration: [
    { img: "assets/inspiration/white-dress-flow.jpg", cap: "白裙飞扬 · 动态服装大片", tag: "人像 / 服装" },
    { img: "assets/inspiration/outdoor-fitness.jpg", cap: "户外运动 · 山野人像", tag: "人像 / 户外" },
    { img: "assets/inspiration/window-reading.jpg", cap: "窗边合书 · 静谧氛围", tag: "人像 / 氛围" },
    { img: "assets/inspiration/pocket-watch-city.jpg", cap: "怀表齿轮 · 微缩机械都市", tag: "微缩 / 机械" },
    { img: "assets/inspiration/red-dress-sunset.jpg", cap: "红裙日落 · 民俗户外写真", tag: "人像 / 民俗" },
    { img: "assets/inspiration/neon-triptych.jpg", cap: "霓虹光影 · 未来科技人像三联", tag: "电影感 / 三联" },
    { img: "assets/inspiration/miniature-painter.jpg", cap: "指尖微观 · 迷你画师创作", tag: "微缩 / 创意" },
    { img: "assets/inspiration/low-angle-architecture.jpg", cap: "大透视仰拍 · 建筑光影", tag: "建筑 / 透视" },
    { img: "assets/inspiration/blue-cable-car.jpg", cap: "蓝调缆车 · 滑雪制服写真", tag: "人像 / 制服" },
    { img: "assets/inspiration/candle-product.jpg", cap: "香薰蜡烛 · 产品静物", tag: "产品 / 静物" },
    { img: "assets/inspiration/pool-morning-light.jpg", cap: "泳池晨光 · 柔雾人像", tag: "人像 / 光影" },
    { img: "assets/inspiration/sand-dune-telescope.jpg", cap: "沙丘战损 · 科幻望远镜", tag: "场景 / 科幻" },
    { img: "assets/inspiration/deep-sea-diving.jpg", cap: "深海夺珠 · 废墟航行", tag: "场景 / 水下" },
    { img: "assets/inspiration/warm-red-hair.jpg", cap: "窗外暖光 · 红发人像", tag: "人像 / 暖光" },
    { img: "assets/inspiration/orange-still-life.jpg", cap: "橙子场景 · 商业静物", tag: "静物 / 商业" },
    { img: "assets/ui/202148.webp", cap: "美食点餐 · 移动端界面（EYROVE）", tag: "UI / 界面" },
    { img: "assets/ui/300014.webp", cap: "美食图标 · 点餐系统（EYROVE）", tag: "UI / 界面" },
    { img: "assets/ui/300008.webp", cap: "APP 图标 · 扁平图标集（EYROVE）", tag: "UI / 界面" },
    { img: "assets/ui/401021.webp", cap: "咖啡主题 · Icon Set（EYROVE）", tag: "UI / 界面" },
    { img: "assets/ui/400159.webp", cap: "版式海报 · 网格构成（EYROVE）", tag: "UI / 界面" },
    { img: "assets/ui/600794.webp", cap: "等距微缩 · 建筑场景（EYROVE）", tag: "UI / 界面" },
    { img: "assets/3dart/rv-jimeng-29176ce65971c3373a3079720f27.webp", cap: "3D 艺术 · Seedream（EYROVE）", tag: "3D / 潮玩" },
    { img: "assets/3dart/rv-jimeng-2e9b57f5b2260697ef8724ac3284.webp", cap: "3D 艺术 · 微缩橙子都市（EYROVE）", tag: "3D / 潮玩" },
    { img: "assets/3dart/rv-jimeng-3761cda9d26887bd6de14b981e07.webp", cap: "3D 艺术 · 国潮醒狮机甲（EYROVE）", tag: "3D / 潮玩" },
    { img: "assets/3dart/rv-jimeng-79057c3055a70b2f2238bbffef79.webp", cap: "3D 艺术 · 蝴蝶结少女（EYROVE）", tag: "3D / 潮玩" },
    { img: "assets/3dart/rv-jimeng-c9dcdae4d8a901c8d2aa5a9d4c75.webp", cap: "3D 艺术 · 泳圈夏日少女（EYROVE）", tag: "3D / 潮玩" },
    { img: "assets/3dart/rv-jimeng-6c3c97a200a089c010964b0bda14.webp", cap: "3D 艺术 · 唐装 Q 版人物（EYROVE）", tag: "3D / 潮玩" },
    { img: "assets/pets/rv-jimeng-ccbc65e48462e5811feb5d135779.webp", cap: "萌宠 · 夜色黑猫（EYROVE）", tag: "萌宠 / 角色" },
    { img: "assets/pets/rv-jimeng-8b55a014714ae6b227bfb467531b.webp", cap: "萌宠 · 暖光橘猫（EYROVE）", tag: "萌宠 / 角色" },
    { img: "assets/pets/rv-jimeng-ec0f939165023c61f0507496b4ec.webp", cap: "萌宠 · 虎斑猫（EYROVE）", tag: "萌宠 / 角色" },
    { img: "assets/pets/rv-jimeng-5f55ec8413ffae66ba5f2d867f1d.webp", cap: "萌宠 · 边牧犬（EYROVE）", tag: "萌宠 / 角色" },
    { img: "assets/pets/rv-jimeng-7f5bce3c3db9a5399ade215bc3ba.webp", cap: "萌宠 · 猫头鹰武士（EYROVE）", tag: "萌宠 / 角色" },
    { img: "assets/pets/rv-jimeng-e08730e97dd306c5d3196478b455.webp", cap: "萌宠 · 宇航员猫咪（EYROVE）", tag: "萌宠 / 角色" },
    { img: "assets/product/rv-jimeng-d861b330daa3091ac62988b8c9b9.webp", cap: "产品设计 · 柠檬汽水（EYROVE）", tag: "产品 / 静物" },
    { img: "assets/product/rv-jimeng-daf9232b8409f317adb6702326a3.webp", cap: "产品设计 · 甜品蛋糕（EYROVE）", tag: "产品 / 静物" },
    { img: "assets/product/rv-jimeng-0105b74ac5807741f5201748038b.webp", cap: "产品设计 · 极简耳机（EYROVE）", tag: "产品 / 静物" },
    { img: "assets/product/rv-jimeng-db82b8bffca2ec0a4b4616d2af9c.webp", cap: "产品设计 · 运动鞋（EYROVE）", tag: "产品 / 静物" },
    { img: "assets/product/rv-jimeng-182d9069d2cf4b803a54aea901fa.webp", cap: "产品设计 · 香氛瓶（EYROVE）", tag: "产品 / 静物" },
    { img: "assets/product/rv-jimeng-9d509542b3ac8e33371922bd9436.webp", cap: "产品设计 · 微缩景观（EYROVE）", tag: "产品 / 静物" },
    { img: "assets/inspiration/eyrove-rv-jimeng-bcd1522b1a7e7d10b73b007d9bcf.webp", cap: "绘本插画 · 红发少女与锦鲤（EYROVE）", tag: "插画 / 绘本" },
    { img: "assets/inspiration/eyrove-rv-jimeng-682496f257500e82f4d2d809a4cd.webp", cap: "绘本插画 · 粉发机械少女（EYROVE）", tag: "插画 / 绘本" },
    { img: "assets/inspiration/eyrove-rv-jimeng-73635439102bab560c55b7991eec.webp", cap: "绘本插画 · 涂鸦贴纸风（EYROVE）", tag: "插画 / 绘本" },
    { img: "assets/inspiration/eyrove-rv-jimeng-77fa196c3b66b3213063af6d6f0e.webp", cap: "绘本插画 · 向日葵少年（EYROVE）", tag: "插画 / 绘本" },
    { img: "assets/inspiration/eyrove-runninghub-2094304624574488577.webp", cap: "海报 · 电影感人像（EYROVE）", tag: "海报 / 人像" },
    { img: "assets/inspiration/eyrove-runninghub-2094302485336842242.webp", cap: "海报 · 电影感人像（EYROVE）", tag: "海报 / 人像" },
    { img: "assets/inspiration/secondpass/eyrove2-000-rv-jimeng-be929278fcc459.webp", cap: "少女，中景（EYROVE 二次精选）", tag: "国风美学 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-001-rv-jimeng-106d1c23bec30e.webp", cap: "一位古代农夫（EYROVE 二次精选）", tag: "国风美学 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-002-rv-jimeng-618e85d6d76958.webp", cap: "一个身穿孔雀服饰的健壮的中国少年（EYROVE 二次精选）", tag: "国风美学 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-003-rv-jimeng-222eeba5f07137.webp", cap: "一位黑色贴头直发穿着新中式风格的美女（EYROVE 二次精选）", tag: "国风美学 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-004-920031.webp", cap: "人物角色 · 参考图（EYROVE 二次精选）", tag: "人物角色 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-005-rv-jimeng-0d35827ff2d534.webp", cap: "微距，巧克力（EYROVE 二次精选）", tag: "3D 艺术 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-006-rv-jimeng-9eb1b2f19ef01a.webp", cap: "由针织毛线材料制成的小狗（EYROVE 二次精选）", tag: "3D 艺术 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-007-rv-jimeng-bdc06d61652a83.webp", cap: "三角形黄色奶酪（EYROVE 二次精选）", tag: "3D 艺术 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-008-rv-jimeng-0cc50a81b9d308.webp", cap: "极端特写，年轻女士的脸（EYROVE 二次精选）", tag: "写实人像 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-009-rv-jimeng-ba7d1b7048e740.webp", cap: "外骨骼士兵，超写实（EYROVE 二次精选）", tag: "写实人像 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-010-200251.webp", cap: "透明塑料袋装物体（EYROVE 二次精选）", tag: "产品品牌 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-011-600242.webp", cap: "产品品牌 · 参考图（EYROVE 二次精选）", tag: "产品品牌 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-012-600653.webp", cap: "产品品牌 · 参考图（EYROVE 二次精选）", tag: "产品品牌 / Gemini" },
    { img: "assets/inspiration/secondpass/eyrove2-013-600589.webp", cap: "产品品牌 · 参考图（EYROVE 二次精选）", tag: "产品品牌 / Gemini" },
    { img: "assets/inspiration/secondpass/eyrove2-014-603791.webp", cap: "UI信息 · 参考图（EYROVE 二次精选）", tag: "UI信息 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-015-600112.webp", cap: "UI信息 · 参考图（EYROVE 二次精选）", tag: "UI信息 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-016-324.webp", cap: "复古巴士上的红风衣女郎（EYROVE 二次精选）", tag: "UI信息 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-017-rv-jimeng-3555a41d7303ff.webp", cap: "涂鸦艺术风格（EYROVE 二次精选）", tag: "动漫游戏 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-018-rv-jimeng-1c26adb7dd7426.webp", cap: "狂风呼啸着，吹乱了他的毛发（EYROVE 二次精选）", tag: "动漫游戏 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-019-rv-jimeng-4fc7c12da99ce2.webp", cap: "纯白，朦胧感（EYROVE 二次精选）", tag: "动漫游戏 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-020-rv-jimeng-8259a4b1591e68.webp", cap: "近景，特写（EYROVE 二次精选）", tag: "海报设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-021-rv-jimeng-48b89b48415f5b.webp", cap: "CD封面，超现实主义（EYROVE 二次精选）", tag: "海报设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-022-rv-jimeng-bd1ddd26d1ebc5.webp", cap: "4 幅丰子恺风格的方形漫画（EYROVE 二次精选）", tag: "海报设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-023-rv-jimeng-dd2b932803a6db.webp", cap: "一只古老的智慧乌鸦（EYROVE 二次精选）", tag: "动物萌宠 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-024-rv-jimeng-087f6d29593024.webp", cap: "动物萌宠 · 参考图（EYROVE 二次精选）", tag: "动物萌宠 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-025-rv-jimeng-ad65f280c4051b.webp", cap: "白色小狗，可爱（EYROVE 二次精选）", tag: "动物萌宠 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-026-rv-jimeng-d6409bfdba1599.webp", cap: "一个女生头像（EYROVE 二次精选）", tag: "绘本插画 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-027-rv-jimeng-f6368e3ffbb9ef.webp", cap: "城市耳机女孩头像（EYROVE 二次精选）", tag: "绘本插画 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-028-rv-jimeng-82ba53c55837a1.webp", cap: "窗内的森林，笔触（EYROVE 二次精选）", tag: "绘本插画 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-029-604848.webp", cap: "插画CG · 参考图（EYROVE 二次精选）", tag: "插画CG / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-030-601021.webp", cap: "插画CG · 参考图（EYROVE 二次精选）", tag: "插画CG / Gemini" },
    { img: "assets/inspiration/secondpass/eyrove2-031-202086.webp", cap: "奢华未来主义的悬浮陀螺（EYROVE 二次精选）", tag: "插画CG / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-032-rv-jimeng-57ed6ee1b2912a.webp", cap: "粉色轿车，极简风格海报（EYROVE 二次精选）", tag: "产品设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-033-rv-jimeng-b0e83c8f26c1f3.webp", cap: "护肤品拍摄，一瓶精致的安瓶精华液（EYROVE 二次精选）", tag: "产品设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-034-rv-jimeng-9d01cc06301a2c.webp", cap: "护肤品拍摄，一瓶精致的安瓶精华液（EYROVE 二次精选）", tag: "产品设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-035-rv-jimeng-f000b888811d32.webp", cap: "护肤品拍摄，一瓶精致的安瓶精华液（EYROVE 二次精选）", tag: "产品设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-036-runninghub-2096590231613.webp", cap: "生成一张 9:16 竖版真实摄影质感女性写真（EYROVE 二次精选）", tag: "海报 / Krea 2" },
    { img: "assets/inspiration/secondpass/eyrove2-037-runninghub-2094370956450.webp", cap: "海报 · 参考图（EYROVE 二次精选）", tag: "海报 / Krea 2" },
    { img: "assets/inspiration/secondpass/eyrove2-038-rv-jimeng-e15fcb3ddd4edf.webp", cap: "一只重点色布偶猫（EYROVE 二次精选）", tag: "未来科幻 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-039-rv-jimeng-cf6fbb1ed5f91d.webp", cap: "月球表面出现了一扇门（EYROVE 二次精选）", tag: "未来科幻 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-040-rv-jimeng-52c81d480d30cc.webp", cap: "未来主义的机械长城（EYROVE 二次精选）", tag: "未来科幻 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-041-rv-jimeng-482e3930e41e57.webp", cap: "一位身穿民族服饰的女性肖像（EYROVE 二次精选）", tag: "国风美学 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-042-rv-jimeng-3bca196ac61a63.webp", cap: "古风女子，完美的身材比例（EYROVE 二次精选）", tag: "国风美学 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-043-rv-jimeng-52de40995420ab.webp", cap: "一张印有“HAPPY CHINESE NEW YEA（EYROVE 二次精选）", tag: "国风美学 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-044-rv-jimeng-79fe661cdfc9cb.webp", cap: "模糊，全局朦胧模糊（EYROVE 二次精选）", tag: "国风美学 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-045-rv-jimeng-518c3d3fd22dbd.webp", cap: "C4D，创意设计（EYROVE 二次精选）", tag: "3D 艺术 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-046-rv-jimeng-f4ea7abe302310.webp", cap: "围绕在欧美女人物周围围着不同的抽象物品（EYROVE 二次精选）", tag: "写实人像 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-047-201869.webp", cap: "巨物化产品：微缩工地奇观（EYROVE 二次精选）", tag: "产品品牌 / Midjourney" },
    { img: "assets/inspiration/secondpass/eyrove2-048-606231.webp", cap: "UI信息 · 参考图（EYROVE 二次精选）", tag: "UI信息 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-049-606230.webp", cap: "UI信息 · 参考图（EYROVE 二次精选）", tag: "UI信息 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-050-603317.webp", cap: "UI信息 · 参考图（EYROVE 二次精选）", tag: "UI信息 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-051-rv-jimeng-edf1e577eaa40c.webp", cap: "巨大的水母入侵城市（EYROVE 二次精选）", tag: "动漫游戏 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-052-rv-jimeng-d2de4cc4e2fc6f.webp", cap: "波普风 青年女人 脸部特写 线条画 雕刻图像 绘画插（EYROVE 二次精选）", tag: "动漫游戏 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-053-rv-jimeng-dfb775e9922163.webp", cap: "太空，白色高光（EYROVE 二次精选）", tag: "海报设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-054-rv-jimeng-26a3b0e25771ef.webp", cap: "未来机器人，科幻感（EYROVE 二次精选）", tag: "海报设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-055-rv-jimeng-5fa3de3fe23d24.webp", cap: "一张电影海报（EYROVE 二次精选）", tag: "海报设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-056-rv-jimeng-cf3a309ab0e259.webp", cap: "纯黑色大狗熊扮演运动员形象（EYROVE 二次精选）", tag: "动物萌宠 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-057-rv-jimeng-2b5d01b0894d7c.webp", cap: "老虎，一只雄壮的东北虎在雪地上咆哮（EYROVE 二次精选）", tag: "动物萌宠 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-058-rv-jimeng-99209ab032e8b0.webp", cap: "白色可爱小猫戴着红色围巾（EYROVE 二次精选）", tag: "绘本插画 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-059-rv-jimeng-079e4590b16d63.webp", cap: "美漫风格，漫画（EYROVE 二次精选）", tag: "绘本插画 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-060-rv-jimeng-69665d0b41e0f5.webp", cap: "主体是汉服女人（EYROVE 二次精选）", tag: "绘本插画 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-061-aiart-api-25a91d3bab5f47.webp", cap: "奇幻电影肖像 #2（EYROVE 二次精选）", tag: "插画CG / Gemini Image" },
    { img: "assets/inspiration/secondpass/eyrove2-062-aiart-api-e5151fd34000ec.webp", cap: "光影电影节海报 #1（EYROVE 二次精选）", tag: "插画CG / Gemini Image" },
    { img: "assets/inspiration/secondpass/eyrove2-063-722862.webp", cap: "幽暗密林中的红芒激战（EYROVE 二次精选）", tag: "插画CG / Gemini" },
    { img: "assets/inspiration/secondpass/eyrove2-064-rv-jimeng-ff4ae24d8bc755.webp", cap: "一个竖放的塑料泡罩包装（EYROVE 二次精选）", tag: "产品设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-065-rv-jimeng-aad84a1e20142e.webp", cap: "粉色轿车，极简风格海报（EYROVE 二次精选）", tag: "产品设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-066-rv-jimeng-b96b3fa3faf562.webp", cap: "酒，这支清澈透明的伏特加（EYROVE 二次精选）", tag: "产品设计 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-067-731200.webp", cap: "现代大型吊扇创意海报（EYROVE 二次精选）", tag: "海报 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-068-731137.webp", cap: "不锈钢保温杯电商海报｜ThermoGo 40（EYROVE 二次精选）", tag: "海报 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-069-731118.webp", cap: "实验字型设计海报（EYROVE 二次精选）", tag: "海报 / GPT Image" },
    { img: "assets/inspiration/secondpass/eyrove2-070-rv-jimeng-c652ead459f5b5.webp", cap: "未来电子人 特写##超高清 暗黑橙色氛围 电子科技产（EYROVE 二次精选）", tag: "未来科幻 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-071-rv-jimeng-56639f3badc658.webp", cap: "破旧的电子集市（EYROVE 二次精选）", tag: "未来科幻 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-072-rv-jimeng-fbe096f324ac3a.webp", cap: "杂志大片，H.R.Giger风格（EYROVE 二次精选）", tag: "未来科幻 / Seedream" },
    { img: "assets/inspiration/secondpass/eyrove2-073-rv-jimeng-bccc76edde5115.webp", cap: "斜侧角度，未来世界（EYROVE 二次精选）", tag: "未来科幻 / Seedream" },
  ],

  /* ---------- 7. 服务能力 ---------- */
  services: [
    {
      num: "01", title: "AI 游戏视觉落地",
      desc: "从世界观到成套活动物料，一条链路交付。",
      points: ["活动主 KV / 横竖版 Banner", "弹窗与 Icon 成套设计", "PS 精修合成与风格统一"]
    },
    {
      num: "02", title: "ComfyUI 工作流搭建",
      desc: "把单张创作变成可复用的流水线。",
      points: ["多模型对比评测工作流", "LoRA + ControlNet 批量出图", "节点排障与参数模板化"]
    },
    {
      num: "03", title: "风格定制与动态视觉",
      desc: "让风格可训练、画面会动。",
      points: ["LoRA 风格 / 角色 LoRA 训练", "AI 动态片段（10-20s 循环）", "配色与光影体系化控制"]
    }
  ],

  /* ---------- 8. 联系方式 ---------- */
  contact: {
    title: "有游戏视觉要做？<br>或者想聊聊 AIGC 工作流。",
    desc: "求职 AIGC 视觉设计师岗位（15-25K），也接受游戏活动视觉、成套物料的合作。加微信或发邮件，发我一句需求，我判断能不能做、大概多久。",
    items: [
      { k: "微信", v: "15313630679" },
      { k: "邮箱", v: "1578758776@qq.com" },
      { k: "电话", v: "153-1363-0679" },
      { k: "城市", v: "长沙" },
      { k: "求职意向", v: "AIGC 视觉设计师 · 15-25K" },
      { k: "背景", v: "7 年+ 视觉 / 3 年+ AIGC" }
    ]
  },

  footer: "GE XUEFENG · AIGC VISUAL DESIGNER · PORTFOLIO"
};
