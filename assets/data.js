/* ============================================================
 * data.js —— 葛雪峰 · AIGC 视觉设计师 作品集「内容层」
 * 内容与《葛雪峰_AIGC视觉设计师_作品集》21 页 PPT 同源：六大能力板块。
 * ============================================================ */
window.PORTFOLIO = {

  /* ---------- 1. 基本信息 ---------- */
  profile: {
    name: "葛雪峰",
    nameEn: "GE XUEFENG",
    role: "AIGC 视觉设计师 · 游戏视觉方向",
    tagline: "用 AIGC 把抽象需求<br><span class=\"grad\">变成可落地的视觉方案</span>",
    sub: "7 年+ 视觉设计 · 5 年+ 游戏行业。能独立完成从 ComfyUI 工作流搭建、提示词工程到 Photoshop 精修合成的完整 AI 视觉生产链路——把「会生成」做成「能交付」。",
    avatar: "assets/img/avatar.svg",
    aboutTitle: "从工作流搭建到 PS 精修，一条链路走完",
    about: [
      "长期负责游戏宣传 Banner、海报与活动视觉的全流程设计，服务过多款已上线游戏项目。环境设计专业出身，具备扎实的空间构成、色彩与光影审美功底。",
      "深度使用 ComfyUI、Stable Diffusion、Midjourney、ChatGPT 等 AIGC 工具，能独立完成从工作流搭建、模型选型、提示词工程到 Photoshop 精修合成的完整 AI 视觉生产链路。",
      "持续产出 AI 生图测评内容，对流行游戏风格与 AIGC 最新玩法保持高敏感度——下面六个板块，每一块都是一次完整的「需求 → 控制 → 生成 → 精修 → 落地」。"
    ],
    meta: ["汕头大学 · 环境设计 · 本科", "7 年+ 视觉设计经验", "5 年+ 游戏行业", "长沙"]
  },

  /* ---------- 2. Hero 数据 ---------- */
  stats: [
    { num: "6",    label: "能力板块 · 21 页作品集" },
    { num: "7年+", label: "视觉设计经验" },
    { num: "5年+", label: "游戏行业深耕" }
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
      icon: "🖌️", title: "后期精修", level: "ADVANCED",
      items: ["Photoshop 精修合成", "AE", "PR", "剪映"],
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
      desc: "覆盖春节 / 夏日祭 / 中秋 / 秋景四个节令的国风视觉，从完整活动 KV（含 Logo 与 slogan）到节日海报，展示国风美学在商业活动与艺术表达之间的切换。",
      cover: "assets/guofeng/ruixue_kv.jpg",
      href: "case-guofeng.html",
      tags: ["国风节庆", "活动 KV", "Q 版 / 写实"]
    },
    {
      num: "04",
      kicker: "FASHION EDITORIAL",
      title: "时尚大片 · 四联时装与人像",
      desc: "LA LUMIÈRE PARIS 四联时装大片，加潮流插画 / 情绪时尚 / 油画质感三张人像，展示成组调性统一与单张人物质感两种高难度能力。",
      cover: "assets/fashion/lumiere_quad.jpg",
      href: "case-fashion.html",
      tags: ["时尚大片", "四联成组", "人物质感"]
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
      { k: "背景", v: "7 年+ 视觉 / 5 年+ 游戏" }
    ]
  },

  footer: "GE XUEFENG · AIGC VISUAL DESIGNER · PORTFOLIO"
};
