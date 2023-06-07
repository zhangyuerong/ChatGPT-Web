<script setup lang="ts">
import { ref } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'

const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()
const isWechat = ref(/micromessenger/.test(navigator.userAgent.toLowerCase()))
</script>

<template>
  <NConfigProvider
    class="h-full"
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language"
  >
    <NaiveProvider>
      <!-- 如果不是在微信中打开，则显示遮罩层 -->
      <div v-if="!isWechat" class="wechat-warning">
        请在微信内打开此页面
      </div>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
<style scoped>
.wechat-warning {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
