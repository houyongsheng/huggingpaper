# 贡献指南

感谢你对 HuggingPaper 项目的关注！我们非常欢迎社区成员参与贡献。本指南将帮助你了解如何参与项目开发和内容创作。

## 贡献方式

你可以通过以下方式参与贡献：

### 1. 论文解读

- 选择一篇 AI 领域的论文
- 按照我们的模板创建解读文档
- 提交 Pull Request

#### 论文解读模板

```markdown
---
title: 论文标题
authors: 作者列表
date: 发表日期
tags: [标签1, 标签2]
---

## 论文概述

简要介绍论文的主要内容和贡献。

## 核心思想

详细解释论文的核心思想和创新点。

## 技术细节

### 方法
描述论文提出的方法。

### 实验
介绍实验设计和结果。

## 总结与思考

总结论文的优缺点，以及个人见解。
```

### 2. 文档改进

- 修正错别字和语法错误
- 改进文档结构和表述
- 添加示例和图表

### 3. 功能开发

- 修复 Bug
- 添加新功能
- 改进用户体验

## 提交规范

### Commit 信息格式

```
<类型>: <描述>

[可选的详细描述]

[可选的 Issue 引用]
```

类型包括：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### Pull Request 规范

1. 标题清晰描述改动内容
2. 详细说明改动原因和实现方式
3. 确保通过所有测试
4. 如果是新功能，请先创建 Issue 讨论

## 开发流程

1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 同步上游更新
5. 提交 Pull Request

```bash
# Fork 后克隆你的仓库
git clone https://github.com/你的用户名/huggingpaper.git

# 添加上游仓库
git remote add upstream https://github.com/huggingpaper/huggingpaper.git

# 创建特性分支
git checkout -b feature/xxx

# 提交改动
git add .
git commit -m "feat: xxx"

# 同步上游更新
git fetch upstream
git rebase upstream/main

# 推送到你的仓库
git push origin feature/xxx
```

## 行为准则

请阅读我们的[行为准则](./CODE_OF_CONDUCT.md)，确保创造一个友好的社区环境。

## 获取帮助

- 查看[文档](https://huggingpaper.com/docs)
- 在 [GitHub Discussions](https://github.com/huggingpaper/huggingpaper/discussions) 提问
- 加入我们的 [Discord](https://discord.gg/huggingpaper) 社区

再次感谢你的贡献！
