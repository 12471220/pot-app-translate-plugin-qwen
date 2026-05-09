# pot-app-translate-plugin-qwen

[English](README.md)

一个 [Pot](https://github.com/pot-app/pot-desktop) 翻译插件，通过阿里云 DashScope API 调用 Qwen 系列模型进行文本翻译。

## 运行截图

![screenshot1](pics/excute_img1.png)
![screenshot2](pics/excute_img2.png)
![screenshot3](pics/excute_img3.png)

## 配置

安装插件后，在 Pot 的插件设置中配置以下字段：

| 字段 | 必填 | 默认值 | 说明 |
|-------|----------|---------|-------------|
| YOUR Qwen api key | 是 | - | DashScope API key，可在[阿里云模型服务](https://bailian.console.aliyun.com/)获取 |
| model | 否 | qwen-flash | 模型名称，如 `qwen-flash`、`qwen-plus`、`qwen-max` |
| Base URL | 否 | `https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation` | API 端点，国际用户可改为 `https://dashscope-intl.aliyuncs.com/...` |
| System Prompt | 否 | 内置翻译提示词 | 自定义系统提示词，用于调整翻译行为 |

## 支持语言

自动检测、简体中文、繁体中文、英语、日语、韩语、法语、西班牙语、俄语、德语、意大利语、土耳其语、葡萄牙语（葡萄牙/巴西）、越南语、印尼语、泰语、马来语、阿拉伯语、印地语、蒙古语（西里尔/蒙古文）、高棉语、挪威语（巴克摩/尼诺斯克）、波斯语。

## 构建

在项目根目录执行：

```bash
# 使用 Shell 脚本
bash build/build.sh

# 或使用 Python 脚本
python3 build/build.py
```

两个脚本均会生成 `build/plugin.com.pot-app.sc.qwen.potext`。

GitHub Actions 会在每次推送时自动构建并上传 `.potext` 产物，推送 tag 时附加到 Release。

## 安装

1. 从 Release 页面下载 `.potext` 文件，或自行构建
2. 打开 Pot -> 偏好设置 -> 服务设置 -> 翻译 -> 添加外部插件 -> 安装外部插件
3. 选择 `.potext` 文件
4. 将插件添加到服务列表并配置 API Key

## 许可证

GPL-3.0
