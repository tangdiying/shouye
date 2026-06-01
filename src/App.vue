<template>
  <div id="app">
    <!-- 导航 -->
    <nav class="nav" :class="{ scrolled: isNavScrolled }">
      <a href="#" class="nav-logo" @click="handleLogoClick">HELLO</a>
      <ul class="nav-links">
        <li><a href="#models">作品</a></li>
        <li><a href="#build">探索</a></li>
        <li><a href="#blog">博客</a></li>
        <li><a href="#join">联系</a></li>
      </ul>
      <div class="nav-actions">
        <a href="#blog" class="btn btn-primary">博客</a>
      </div>
      <button class="nav-toggle" :class="{ open: isMobileMenuOpen }" @click="toggleMobileMenu">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <!-- 移动端菜单 -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <a href="#models" @click="closeMobileMenu">作品</a>
      <a href="#build" @click="closeMobileMenu">探索</a>
      <a href="#blog" @click="closeMobileMenu">博客</a>
      <a href="#join" @click="closeMobileMenu">联系</a>
      <a href="#blog" class="btn btn-primary">博客</a>
    </div>

    <!-- Hero -->
    <section class="hero" ref="heroRef" @mouseenter="handleHeroMouseEnter" @mousemove="handleHeroMouseMove" @mouseleave="handleHeroMouseLeave">
      <!-- 底层卡片 -->
      <div class="hero-card" :class="{ 'is-flipped': isHeroFlipped }">
        <div class="hero-card-inner">
          <div class="hero-card-face">
            <div class="matrix-wrap">
              <div class="matrix-line" v-for="row in matrixRows" :key="'base-' + row">
                <span class="matrix-item" v-for="col in matrixCols" :key="'base-' + row + '-' + col">{{ matrixWord }}</span>
              </div>
            </div>
            <div class="hero-title-wrap">
              <h1>你好，我是 唐頔颖</h1>
            </div>
            <div class="hero-flip-hint" @click="toggleHeroCard">
              <span class="hint-text">{{ isHeroFlipped ? '返回' : '点击了解更多' }}</span>
              <span class="hint-arrow">{{ isHeroFlipped ? '↑' : '↓' }}</span>
            </div>
          </div>
          <div class="hero-card-face hero-card-back">
            <div class="hero-about-panel">
              <h2 class="hero-about-title">关于我</h2>
              <div class="hero-about-body">
                <p>深耕前端领域十余年，专注于创造极致的用户体验与高性能的Web应用。</p>
                <p>从早期的 jQuery 时代到现代的 Vue/React 生态，见证并参与了前端技术的演进历程。</p>
                <p>相信代码不仅是实现功能的工具，更是表达创意与思想的载体。</p>
                <p>专业技能</p>
                <p>精通 Vue3、React、TypeScript 等主流技术栈，擅长复杂交互系统设计、性能优化、工程化实践与跨端开发。</p>
                <p>曾主导多个百万级DAU产品的前端架构设计与核心开发。</p>
                <p>关于这座站点</p>
                <p>这里是我的技术后花园，记录着对前端技术的深度思考、实战经验总结与行业洞察。</p>
                <p>希望通过分享，与更多志同道合的开发者交流成长，共同推动前端技术的边界。</p>
                <p>感谢你的来访，期待与你一同探索技术的无限可能。</p>
              </div>
            </div>
            <div class="hero-flip-hint" @click="toggleHeroCard">
              <span class="hint-text">返回</span>
              <span class="hint-arrow">↑</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 探照灯层 -->
      <div class="hero-spotlight" ref="spotlightRef" v-if="!isHeroFlipped" :style="{ clipPath: spotlightClipPath }">
        <div class="hero-card" :class="{ 'is-flipped': isHeroFlipped }">
          <div class="hero-card-inner">
            <div class="hero-card-face">
              <div class="matrix-wrap">
                <div class="matrix-line" v-for="row in matrixRows" :key="'spotlight-' + row">
                  <span class="matrix-item" v-for="col in matrixCols" :key="'spotlight-' + row + '-' + col">{{ matrixWord }}</span>
                </div>
              </div>
              <div class="hero-title-wrap">
                <h1>Surprise, my friend!</h1>
              </div>
              <div class="hero-flip-hint" @click="toggleHeroCard">
                <span class="hint-text">点击了解更多</span>
                <span class="hint-arrow">↓</span>
              </div>
            </div>
            <div class="hero-card-face hero-card-back">
              <div class="hero-about-panel">
                <h2 class="hero-about-title">关于我</h2>
                <div class="hero-about-body">
                  <p>深耕前端领域十余年，专注于创造极致的用户体验与高性能的Web应用。</p>
                  <p>从早期的 jQuery 时代到现代的 Vue/React 生态，见证并参与了前端技术的演进历程。</p>
                  <p>相信代码不仅是实现功能的工具，更是表达创意与思想的载体。</p>
                  <p>专业技能</p>
                  <p>精通 Vue3、React、TypeScript 等主流技术栈，擅长复杂交互系统设计、性能优化、工程化实践与跨端开发。</p>
                  <p>曾主导多个百万级DAU产品的前端架构设计与核心开发。</p>
                  <p>关于这座站点</p>
                  <p>这里是我的技术后花园，记录着对前端技术的深度思考、实战经验总结与行业洞察。</p>
                  <p>希望通过分享，与更多志同道合的开发者交流成长，共同推动前端技术的边界。</p>
                  <p>感谢你的来访，期待与你一同探索技术的无限可能。</p>
                </div>
              </div>
              <div class="hero-flip-hint" @click="toggleHeroCard">
                <span class="hint-text">返回</span>
                <span class="hint-arrow">↑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 作品 -->
    <section class="section" id="models">
      <h2 class="section-title reveal reveal-delay-1" :class="{ visible: showSections.models }">精选项目</h2>
      <div class="products-grid">
        <div class="product-card reveal reveal-delay-1" :class="{ visible: showSections.models }">
          <h3>企业级组件库</h3>
          <p>基于 Vue3 构建的高质量 UI 组件库，支持主题定制与按需加载，服务于集团内数十个业务系统。</p>
          <div class="card-arrow">→</div>
        </div>
        <div class="product-card reveal reveal-delay-2" :class="{ visible: showSections.models }">
          <h3>数据可视化平台</h3>
          <p>高性能图表引擎与可视化编辑器，支持复杂数据场景的实时渲染与交互分析。</p>
          <div class="card-arrow">→</div>
        </div>
        <div class="product-card reveal reveal-delay-3" :class="{ visible: showSections.models }">
          <h3>微前端架构实践</h3>
          <p>基于 qiankun 的微前端解决方案，实现多团队并行开发与独立部署。</p>
          <div class="card-arrow">→</div>
        </div>
      </div>
    </section>

    <!-- 探索 -->
    <section class="section build-section" id="build">
      <div class="build-inner">
        <h2 class="section-title reveal reveal-delay-1" :class="{ visible: showSections.build }">技术探索</h2>
        <p class="build-desc reveal reveal-delay-2" :class="{ visible: showSections.build }">持续探索前端技术的边界，分享工程化实践与最佳实践。</p>
        <div class="build-cards">
          <div class="build-card reveal reveal-delay-1" :class="{ visible: showSections.build }" @mousemove="handleBuildCardMouseMove">
            <div class="num">01</div>
            <h3>性能优化指南</h3>
            <p>从首屏加载到运行时性能，全方位的前端性能优化策略</p>
            <div class="card-arrow">→</div>
          </div>
          <div class="build-card reveal reveal-delay-2" :class="{ visible: showSections.build }" @mousemove="handleBuildCardMouseMove">
            <div class="num">02</div>
            <h3>工程化实践</h3>
            <p>现代前端工程体系搭建，CI/CD 流程与质量保障</p>
            <div class="card-arrow">→</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 博客 -->
    <section class="section" id="blog">
      <h2 class="section-title reveal reveal-delay-1" :class="{ visible: showSections.blog }">技术博客</h2>
      <div class="blog-list">
        <div class="blog-item reveal" :class="{ visible: showSections.blog }">
          <div class="blog-item-left">
            <span class="blog-num">01</span>
            <h3>Vue3 Composition API 深入解析 — 响应式原理与最佳实践</h3>
          </div>
          <span class="card-arrow">→</span>
        </div>
        <div class="blog-item reveal reveal-delay-1" :class="{ visible: showSections.blog }">
          <div class="blog-item-left">
            <span class="blog-num">02</span>
            <h3>前端性能优化实战 — 从 3s 到 0.8s 的优化之旅</h3>
          </div>
          <span class="card-arrow">→</span>
        </div>
        <div class="blog-item reveal reveal-delay-2" :class="{ visible: showSections.blog }">
          <div class="blog-item-left">
            <span class="blog-num">03</span>
            <h3>微前端架构设计 — qiankun 源码剖析与实践总结</h3>
          </div>
          <span class="card-arrow">→</span>
        </div>
        <div class="blog-item reveal reveal-delay-3" :class="{ visible: showSections.blog }">
          <div class="blog-item-left">
            <span class="blog-num">04</span>
            <h3>TypeScript 类型体操 — 高级类型技巧与实战案例</h3>
          </div>
          <span class="card-arrow">→</span>
        </div>
      </div>
    </section>

    <!-- 联系 -->
    <section class="section" id="join">
      <h2 class="section-title reveal reveal-delay-1" :class="{ visible: showSections.join }">联系我</h2>
      <p class="join-desc reveal reveal-delay-2" :class="{ visible: showSections.join }">如果你对前端架构、性能优化或团队协作有兴趣，欢迎交流探讨。</p>
      <div class="join-list reveal reveal-delay-3" :class="{ visible: showSections.join }">
        <div class="join-item"><span class="num">01</span><h3>前端架构咨询</h3><span class="card-arrow">→</span></div>
        <div class="join-item"><span class="num">02</span><h3>性能优化服务</h3><span class="card-arrow">→</span></div>
        <div class="join-item"><span class="num">03</span><h3>技术培训指导</h3><span class="card-arrow">→</span></div>
        <div class="join-item"><span class="num">04</span><h3>代码审查服务</h3><span class="card-arrow">→</span></div>
        <div class="join-item"><span class="num">05</span><h3>开源项目合作</h3><span class="card-arrow">→</span></div>
        <div class="join-item"><span class="num">06</span><h3>技术分享邀约</h3><span class="card-arrow">→</span></div>
      </div>
      <p class="join-contact reveal" :class="{ visible: showSections.join }">如有任何问题，欢迎邮件联系：<a href="mailto:tangdiying@example.com">tangdiying@example.com</a></p>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <p>Copyright © 2026 唐頔颖 保留所有权利</p>
      <p class="footer-icp"><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">鄂ICP备2026025710号-1</a></p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const CONFIG = {
  matrixRows: 13,
  matrixCols: 13,
  matrixWord: "T D Y",
  trailCount: 6,
  spotlightR: 200
}

const matrixRows = Array.from({ length: CONFIG.matrixRows }, (_, i) => i)
const matrixCols = Array.from({ length: CONFIG.matrixCols }, (_, i) => i)
const matrixWord = CONFIG.matrixWord

const isNavScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isHeroFlipped = ref(false)
const showSections = {
  about: ref(false),
  models: ref(false),
  build: ref(false),
  blog: ref(false),
  join: ref(false)
}

const heroRef = ref(null)
const spotlightRef = ref(null)

const trailPoints = ref([])
const targetX = ref(0)
const targetY = ref(0)
const isSpotlightActive = ref(false)
let animId = 0

const isMobileView = computed(() => window.matchMedia("(max-width: 768px)").matches)

const spotlightClipPath = computed(() => {
  if (!isSpotlightActive.value || trailPoints.value.length === 0) {
    return "circle(0px at -300px -300px)"
  }
  const head = trailPoints.value[0]
  const tail = trailPoints.value[CONFIG.trailCount - 1]
  const diffX = head.x - tail.x
  const diffY = head.y - tail.y
  const distance = Math.sqrt(diffX * diffX + diffY * diffY)
  
  if (distance < 10) {
    return `circle(${CONFIG.spotlightR}px at ${head.x}px ${head.y}px)`
  }

  const angle = Math.atan2(diffY, diffX)
  const points = []
  for (let j = 0; j <= 30; j++) {
    const theta = angle - Math.PI / 2 + (Math.PI * j) / 30
    points.push(`${head.x + CONFIG.spotlightR * Math.cos(theta)}px ${head.y + CONFIG.spotlightR * Math.sin(theta)}px`)
  }
  for (let j = 0; j <= 30; j++) {
    const theta = angle + Math.PI / 2 + (Math.PI * j) / 30
    points.push(`${tail.x + CONFIG.spotlightR * Math.cos(theta)}px ${tail.y + CONFIG.spotlightR * Math.sin(theta)}px`)
  }
  return `polygon(${points.join(", ")})`
})

const resetTrail = (x, y) => {
  targetX.value = x
  targetY.value = y
  trailPoints.value = Array.from({ length: CONFIG.trailCount }, () => ({ x, y }))
}

const updateTrail = () => {
  for (let t = 0; t < CONFIG.trailCount; t++) {
    const prevX = t === 0 ? targetX.value : trailPoints.value[t - 1].x
    const prevY = t === 0 ? targetY.value : trailPoints.value[t - 1].y
    const damping = 0.7 - 0.04 * t
    trailPoints.value[t].x += (prevX - trailPoints.value[t].x) * damping
    trailPoints.value[t].y += (prevY - trailPoints.value[t].y) * damping
  }
}

const animate = () => {
  if (isSpotlightActive.value) {
    updateTrail()
    animId = requestAnimationFrame(animate)
  }
}

const getHeroPos = (clientX, clientY) => {
  if (!heroRef.value) return { x: 0, y: 0 }
  const rect = heroRef.value.getBoundingClientRect()
  return { x: clientX - rect.left, y: clientY - rect.top }
}

const startSpotlight = (x, y) => {
  targetX.value = x
  targetY.value = y
  isSpotlightActive.value = true
  if (!animId) animId = requestAnimationFrame(animate)
}

const stopSpotlight = () => {
  isSpotlightActive.value = false
  if (animId) { cancelAnimationFrame(animId); animId = 0 }
}

const applySpotlightMode = () => {
  if (isMobileView.value) {
    stopSpotlight()
    if (spotlightRef.value) spotlightRef.value.style.display = 'none'
    if (heroRef.value) heroRef.value.style.cursor = 'default'
  } else {
    if (spotlightRef.value) spotlightRef.value.style.display = ''
    if (heroRef.value) heroRef.value.style.cursor = 'crosshair'
  }
}

const handleHeroMouseEnter = (e) => {
  if (isMobileView.value) return
  const pos = getHeroPos(e.clientX, e.clientY)
  resetTrail(pos.x, pos.y)
  startSpotlight(pos.x, pos.y)
}

const handleHeroMouseMove = (e) => {
  if (isMobileView.value) return
  const pos = getHeroPos(e.clientX, e.clientY)
  targetX.value = pos.x
  targetY.value = pos.y
}

const handleHeroMouseLeave = () => {
  if (isMobileView.value) return
  stopSpotlight()
}

const toggleHeroCard = () => { isHeroFlipped.value = !isHeroFlipped.value }

const handleLogoClick = (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  isHeroFlipped.value = false
}


const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleBuildCardMouseMove = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width * 100)}%`)
  card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height * 100)}%`)
}

const handleScroll = () => {
  isNavScrolled.value = window.scrollY > 20
  const top = window.scrollY + window.innerHeight
  
  const sections = ['about', 'models', 'build', 'blog', 'join']
  sections.forEach(name => {
    const el = document.querySelector(`#${name}`)
    if (el) showSections[name].value = top > el.offsetTop + 100
  })
}

const handleResize = () => {
  applySpotlightMode()
  if (heroRef.value) {
    const rect = heroRef.value.getBoundingClientRect()
    resetTrail(rect.width / 2, rect.height / 2)
  }
}

onMounted(() => {
  resetTrail(window.innerWidth / 2, window.innerHeight / 2)
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  applySpotlightMode()
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  stopSpotlight()
})
</script>

<style>
:root {
  --bg: #fff;
  --text: #000;
  --text-muted: rgba(0, 0, 0, 0.45);
  --text-matrix: rgba(0, 0, 0, 0.035);
  --text-matrix-spotlight: rgba(255, 255, 255, 0.1);
  --spotlight-bg: #000;
  --border: rgba(0, 0, 0, 0.12);
  --nav-h: 64px;
  --font: "MiSans", "PingFang SC", "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-en: "Helvetica Neue", "Arial", sans-serif;
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --spotlight-r: 200px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--text); font-family: var(--font); overflow-x: hidden; -webkit-font-smoothing: antialiased; }
a { color: inherit; text-decoration: none; }

.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000; height: var(--nav-h);
  display: flex; align-items: center; justify-content: space-between; padding: 0 40px;
  background: rgba(255, 255, 255, 0.72); -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s var(--ease), background 0.3s var(--ease);
}
.nav.scrolled { border-bottom-color: var(--border); background: rgba(255, 255, 255, 0.95); }
.nav-logo { font-size: 18px; font-weight: 600; letter-spacing: 0.04em; }
.nav-links { display: flex; align-items: center; gap: 36px; list-style: none; }
.nav-links a { font-size: 13px; letter-spacing: 0.06em; color: var(--text-muted); position: relative; transition: color 0.25s var(--ease); }
.nav-links a::after { content: ""; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--text); transition: width 0.3s var(--ease); }
.nav-links a:hover { color: var(--text); }
.nav-links a:hover::after { width: 100%; }
.nav-actions { display: flex; align-items: center; gap: 12px; }

.btn {
  display: inline-flex; align-items: center; gap: 8px; padding: 10px 22px;
  font-size: 13px; font-family: var(--font); letter-spacing: 0.04em;
  border-radius: 100px; border: 1px solid var(--border); background: transparent;
  color: var(--text); cursor: pointer;
  transition: transform 0.25s var(--ease), background 0.25s var(--ease), border-color 0.25s var(--ease);
}
.btn:hover { transform: scale(1.04); background: rgba(0, 0, 0, 0.05); border-color: rgba(0, 0, 0, 0.25); }
.btn-primary { background: var(--text); color: var(--bg); border-color: var(--text); }
.btn-primary:hover { background: rgba(0, 0, 0, 0.85); border-color: rgba(0, 0, 0, 0.85); }

.nav-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
.nav-toggle span { display: block; width: 22px; height: 1.5px; background: var(--text); transition: transform 0.3s var(--ease), opacity 0.3s var(--ease); }
.nav-toggle.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.hero { position: relative; width: 100%; height: 100vh; min-height: 600px; overflow: hidden; cursor: crosshair; }
.matrix-wrap { position: absolute; inset: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: center; }
.matrix-line { display: flex; flex-wrap: nowrap; white-space: nowrap; font-family: var(--font-en); font-size: clamp(40px, 6.5vw, 72px); font-weight: 700; line-height: 1.5; letter-spacing: 0.35em; color: var(--text-matrix); }
.matrix-line:nth-child(odd) { margin-left: -2em; }
.matrix-item { flex-shrink: 0; margin-right: 0.6em; }

.hero-card { position: absolute; top: var(--nav-h); left: 0; right: 0; bottom: 0; z-index: 2; perspective: 1400px; }
.hero-card-inner { position: absolute; inset: 1px; border: 1px solid rgba(0, 0, 0, 0.3); border-radius: 2px; transform-style: preserve-3d; transition: transform 0.8s var(--ease); }
.hero-card.is-flipped .hero-card-inner { transform: rotateX(180deg); }

.hero-card-face { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; backface-visibility: hidden; }
.hero-card-back { transform: rotateX(180deg); }

.hero-title-wrap { position: relative; z-index: 2; text-align: center; }
.hero-title-wrap h1 { font-size: clamp(36px, 6vw, 80px); font-weight: 700; letter-spacing: 0.02em; line-height: 1.2; }

.hero-about-panel { 
  width: 90%; height: 85%; margin: 0; 
  padding: 40px 100px; border: 1px dashed rgba(0, 0, 0, 0.2); border-radius: 0; 
  background: rgba(255, 255, 255, 0.72); -webkit-backdrop-filter: blur(24px); backdrop-filter: blur(24px); overflow-y: auto; 
}
.hero-about-title { font-size: clamp(24px, 4vw, 36px); font-weight: 700; letter-spacing: 0.02em; line-height: 1.3; margin-bottom: 24px; }
.hero-about-body { font-size: clamp(14px, 1.6vw, 16px); line-height: 2; color: var(--text-muted); }
.hero-about-body p + p { margin-top: 4px; }
.hero-about-sign { margin-top: 32px; font-size: 14px; letter-spacing: 0.1em; color: var(--text-muted); }

.hero-flip-hint { position: absolute; bottom: 60px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; z-index: 10; }
.hero-flip-hint .hint-text { font-size: 13px; letter-spacing: 0.12em; color: var(--text-muted); transition: color 0.3s var(--ease); }
.hero-flip-hint .hint-arrow { font-size: 20px; color: var(--text-muted); animation: bounce 2s ease-in-out infinite; transition: color 0.3s var(--ease); }
.hero-flip-hint:hover .hint-text, .hero-flip-hint:hover .hint-arrow { color: var(--text); }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

.hero-spotlight { position: absolute; inset: 0; z-index: 10; background: var(--spotlight-bg); pointer-events: none; will-change: clip-path; clip-path: circle(0px at -300px -300px); }
.hero-spotlight .matrix-line { color: var(--text-matrix-spotlight); }
.hero-spotlight .matrix-line:nth-child(odd) { margin-left: -0.5em; }
.hero-spotlight .hero-title-wrap h1, .hero-spotlight .hero-about-title { color: #fff; }
.hero-spotlight .hero-about-panel { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; padding: 40px; border: 1px dashed rgba(255, 255, 255, 0.3); border-radius: 0; background: rgba(0, 0, 0, 0.6); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); overflow-y: auto; }
.hero-spotlight .hero-about-body, .hero-spotlight .hero-about-sign { color: rgba(255, 255, 255, 0.85); }
.hero-spotlight .hero-flip-hint .hint-text, .hero-spotlight .hero-flip-hint .hint-arrow { color: rgba(255, 255, 255, 0.8); }

.section { padding: 120px 40px; max-width: 1200px; margin: 0 auto; }
.section-label { font-size: 12px; letter-spacing: 0.2em; color: var(--text-muted); margin-bottom: 24px; }
.section-title { font-size: clamp(28px, 4vw, 48px); font-weight: 700; letter-spacing: 0.01em; line-height: 1.3; margin-bottom: 48px; }

.reveal { opacity: 0; transform: translateY(48px); transition: opacity 0.8s var(--ease), transform 0.8s var(--ease); }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

.about-text { font-size: clamp(15px, 1.8vw, 18px); line-height: 2; color: var(--text-muted); max-width: 800px; }
.about-text p + p { margin-top: 24px; }
.about-signature { margin-top: 48px; font-size: 14px; letter-spacing: 0.1em; color: var(--text-muted); }

.products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); margin-top: 64px; }
.product-card { background: var(--bg); padding: 48px 36px; transition: background 0.3s var(--ease); cursor: pointer; }
.product-card:hover { background: rgba(0, 0, 0, 0.03); }
.product-card h3 { font-size: 18px; font-weight: 600; margin-bottom: 12px; }
.product-card p { font-size: 14px; color: var(--text-muted); line-height: 1.6; }
.product-card .card-arrow { margin-top: 32px; font-size: 20px; opacity: 0.4; transition: transform 0.3s var(--ease), opacity 0.3s var(--ease); }
.product-card:hover .card-arrow { transform: translateX(6px); opacity: 1; }

.build-section { max-width: none; padding-left: 0; padding-right: 0; }
.build-inner { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
.build-desc { font-size: 16px; color: var(--text-muted); max-width: 600px; line-height: 1.8; margin-bottom: 64px; }
.build-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.build-card { border: 1px solid var(--border); border-radius: 16px; padding: 48px 40px; transition: border-color 0.3s var(--ease), transform 0.3s var(--ease); cursor: pointer; position: relative; overflow: hidden; }
.build-card::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(0,0,0,0.04), transparent 60%); opacity: 0; transition: opacity 0.3s; }
.build-card:hover { border-color: rgba(0, 0, 0, 0.25); transform: translateY(-4px); }
.build-card:hover::before { opacity: 1; }
.build-card .num { font-size: 13px; color: var(--text-muted); letter-spacing: 0.1em; margin-bottom: 24px; }
.build-card h3 { font-size: 24px; font-weight: 600; margin-bottom: 12px; }
.build-card p { font-size: 14px; color: var(--text-muted); line-height: 1.6; }
.build-card .card-arrow { position: absolute; bottom: 40px; right: 40px; font-size: 24px; opacity: 0.3; transition: transform 0.3s var(--ease), opacity 0.3s var(--ease); }
.build-card:hover .card-arrow { transform: translate(4px, -4px); opacity: 1; }

.blog-list { display: flex; flex-direction: column; border-top: 1px solid var(--border); }
.blog-item { display: flex; align-items: center; justify-content: space-between; padding: 32px 0; border-bottom: 1px solid var(--border); cursor: pointer; transition: padding-left 0.3s var(--ease), background 0.3s var(--ease); gap: 24px; }
.blog-item:hover { padding-left: 16px; background: rgba(0, 0, 0, 0.02); }
.blog-item-left { display: flex; align-items: flex-start; gap: 32px; flex: 1; }
.blog-num { font-size: 13px; color: var(--text-muted); letter-spacing: 0.1em; min-width: 28px; padding-top: 4px; }
.blog-item h3 { font-size: clamp(16px, 2vw, 20px); font-weight: 500; line-height: 1.4; }
.blog-item .card-arrow { font-size: 20px; opacity: 0.3; flex-shrink: 0; transition: transform 0.3s var(--ease), opacity 0.3s var(--ease); }
.blog-item:hover .card-arrow { transform: translateX(6px); opacity: 1; }

.join-desc { font-size: 16px; color: var(--text-muted); line-height: 1.8; max-width: 720px; margin-bottom: 64px; }
.join-list { display: grid; grid-template-columns: repeat(2, 1fr); border: 1px solid var(--border); }
.join-item { display: flex; align-items: center; justify-content: space-between; padding: 28px 32px; border-bottom: 1px solid var(--border); cursor: pointer; transition: background 0.3s var(--ease), padding-left 0.3s var(--ease); }
.join-item:nth-child(odd) { border-right: 1px solid var(--border); }
.join-item:hover { background: rgba(0, 0, 0, 0.03); padding-left: 40px; }
.join-item .num { font-size: 13px; color: var(--text-muted); margin-right: 24px; min-width: 24px; }
.join-item h3 { font-size: 15px; font-weight: 500; flex: 1; }
.join-item .card-arrow { opacity: 0.3; transition: transform 0.3s var(--ease), opacity 0.3s var(--ease); }
.join-item:hover .card-arrow { transform: translateX(4px); opacity: 1; }
.join-contact { margin-top: 48px; font-size: 14px; color: var(--text-muted); }
.join-contact a { color: var(--text); border-bottom: 1px solid var(--border); transition: border-color 0.25s; }
.join-contact a:hover { border-color: var(--text); }

.footer { border-top: 1px solid var(--border); padding: 40px; text-align: center; font-size: 12px; color: var(--text-muted); letter-spacing: 0.04em; }
.footer-icp { margin-top: 8px; }
.footer-icp a { color: inherit; }
.footer-icp a:hover { color: var(--text); }

.mobile-menu { display: none; position: fixed; inset: 0; z-index: 999; background: rgba(255, 255, 255, 0.97); -webkit-backdrop-filter: blur(30px); backdrop-filter: blur(30px); flex-direction: column; align-items: center; justify-content: center; gap: 32px; opacity: 0; pointer-events: none; transition: opacity 0.3s var(--ease); }
.mobile-menu.open { opacity: 1; pointer-events: auto; }
.mobile-menu a { font-size: 20px; letter-spacing: 0.1em; color: var(--text-muted); transition: color 0.25s; }
.mobile-menu a:hover { color: var(--text); }

@media (max-width: 1024px) {
  .products-grid, .build-cards, .join-list { grid-template-columns: 1fr; }
  .join-item:nth-child(odd) { border-right: none; }
}

@media (max-width: 768px) {
  :root { --nav-h: 56px; }
  .hero { cursor: default; }
  .hero-spotlight { display: none; }
  .nav { padding: 0 20px; }
  .nav-links, .nav-actions { display: none; }
  .nav-toggle { display: flex; }
  .mobile-menu { display: flex; }
  .section { padding: 80px 20px; }
  .build-inner { padding: 0 20px; }
  .matrix-line { font-size: 32px; letter-spacing: 0.25em; }
  .matrix-line:nth-child(odd) { margin-left: -1em; }
  .hero-about-panel { padding: 40px; }
}
</style>