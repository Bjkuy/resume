# 🎨 Midjourney 提示词手册

> ⚠️ **重要**：每个镜头生成 3-5 张图，选最自然的一张。
> 所有提示词已内嵌"去 AI 味"关键词：photorealistic / candid / subtle grain / Fujifilm。

---

## 先决步骤：生成角色参考图

在开始分镜之前，先锁定角色形象。以下两张图用于后续所有镜头的角色参考。

### 女主角参考
```
A young Chinese woman, early 20s, natural looking, minimal makeup, long dark straight hair, oval face, gentle eyes, warm smile, casual white linen shirt, natural morning light, photorealistic portrait, shot on Fujifilm X-T5, 35mm f/2 lens, candid photography, subtle skin texture, no studio lighting, no over-processed skin, slight film grain --ar 3:4 --style raw
```
> 生成后选最好的一张作为"女主参考图"，后续所有镜头都参考这张图的脸。

### 金毛犬参考
```
A golden retriever dog, 3 years old, healthy golden coat, gentle loyal expression, lying on wooden floor, natural window light, photorealistic pet photography, shallow depth of field, shot on Fujifilm X-T5, candid, warm tone, no studio setup --ar 3:4 --style raw
```
> 同理，选一张最自然的作为"宠物参考图"。

---

## 镜头 1：清晨房间（全景 · 8秒）

### 主提示词
```
Wide shot of a cozy bedroom interior, morning sunlight streaming through sheer white curtains creating soft light patterns on the floor, gentle breeze moving the curtains slightly, wooden floor, a bed with white linen bedding, minimal decor, warm natural morning atmosphere, photorealistic, shot on Fujifilm X-T5, 35mm lens, candid daily life photography, subtle film grain, warm tone, no cinematic lighting, no dramatic effect --ar 16:9 --style raw
```

### 备用（如果上面太暗）
```
Bright cozy bedroom morning, sunlight through white curtains, warm beige walls, wooden floor reflecting light, peaceful atmosphere, airy and soft, photorealistic interior photography, natural home feeling --ar 16:9 --style raw
```

### 视频动作提示（用在可灵/Runway中）
```
curtains swaying gently in a light breeze, slow motion, natural movement, minimal change
```

---

## 镜头 2：美女醒来（中景 · 6秒）

### 主提示词
```
Medium shot of a young Chinese woman sleeping peacefully on her side in bed, natural morning sunlight softly illuminating her face, long dark hair spread on white pillow, minimal makeup, natural skin with visible texture, eyelashes fluttering slightly, about to wake up, white bedding, candid intimate moment, photorealistic, shot on Fujifilm X-T5, 35mm f/2, natural morning light only, slight film grain, warm skin tone, not posed --ar 16:9 --style raw
```

### 视频动作提示
```
eyes slowly opening from sleep, subtle facial movement, minimal motion, natural waking up speed, no dramatic expression
```

---

## 镜头 3：床边的狗（近景 · 8秒）

### 主提示词
```
Close-up of a golden retriever lying on wooden floor right beside a bed, morning sunlight illuminating golden fur, tail gently resting then slightly wagging, looking up toward the bed with loyal patient eyes, natural pet photography, shallow depth of field, warm cozy tones, photorealistic, shot on Fujifilm X-T5, candid moment, subtle grain, natural home environment --ar 16:9 --style raw
```

### 视频动作提示
```
dog tail wagging very gently, soft breathing visible in the chest, minimal movement, peaceful waiting, slow motion
```

---

## 镜头 4：摸狗头（中景 · 10秒）

### 主提示词
```
Medium shot of a young Chinese woman in a white linen shirt sitting on the edge of a bed, reaching down with one hand to gently pet a golden retriever on the floor beside the bed, the dog looking up with trusting eyes and leaning into her touch, warm morning light, intimate candid moment, photorealistic, shot on Fujifilm X-T5, 35mm lens, natural interaction, not staged, subtle grain, warm tone --ar 16:9 --style raw
```

### 视频动作提示
```
hand gently stroking dog head slowly, dog leaning into the touch, subtle movement, natural interaction speed, no exaggerated motion
```

---

## 镜头 5：窗边背影（全景 · 10秒）

### 主提示词
```
Wide back view shot of a young woman with long dark hair in a white linen shirt standing by a window, holding a ceramic coffee mug, a golden retriever sitting calmly at her feet, morning light creating a soft natural silhouette, steam rising from the coffee, peaceful quiet morning moment, photorealistic, shot on Fujifilm X-T5, 35mm lens, natural grain, warm ambient tone, candid atmosphere, not staged --ar 16:9 --style raw
```

### 视频动作提示
```
steam gently rising from coffee cup, minimal movement, tranquil still scene, very subtle breathing, peaceful atmosphere
```

---

## 🔑 去 AI 味的提示词秘诀

所有提示词都嵌入了以下关键词，你也可以在别的场景复用：

| 关键词 | 作用 |
|--------|------|
| `photorealistic` | 逼真照片质感 |
| `shot on Fujifilm X-T5` | 模拟真实相机 |
| `candid` / `not staged` | 抓拍感，消除摆拍 |
| `subtle grain` / `film grain` | 胶片颗粒，遮住光滑感 |
| `natural light only` | 只用自然光，不要影棚光 |
| `no cinematic lighting` | 避免过度戏剧化 |
| `--style raw` | Midjourney 原生风格，减少 AI 渲染感 |
| `minimal makeup` | 减少过度美颜 |
| `natural skin texture` | 保留皮肤细节 |
