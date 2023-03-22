<script lang="ts" setup>
import { computed, ref } from 'vue'
import { NButton, NInput, useMessage } from 'naive-ui'
import { useUserStore } from '@/store'
import type { ModelInfo } from '@/store/modules/user/helper'
import { t } from '@/locales'

const userStore = useUserStore()

const ms = useMessage()

const modelInfo = computed(() => userStore.model)

const model = ref(modelInfo.value.model)

const temperature = ref(modelInfo.value.temperature)

const max_tokens = ref(modelInfo.value.max_tokens)

function updateModelInfo(options: Partial<ModelInfo>) {
  userStore.updateModelInfo(options)
  ms.success(t('common.success'))
}
</script>

<template>
  <div class="p-4 space-y-5 min-h-[200px]">
    <div class="space-y-6">
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.model_temperature') }}</span>
        <div class="flex-1">
          <NInput v-model:value="temperature" placeholder="" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateModelInfo({ temperature })">
          {{ $t('common.save') }}
        </NButton>
      </div>
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.model') }}</span>
        <div class="flex-1">
          <NInput v-model:value="model" placeholder="" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateModelInfo({ model })">
          {{ $t('common.save') }}
        </NButton>
      </div>
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.max_tokens') }}</span>
        <div class="flex-1">
          <NInput v-model:value="max_tokens" placeholder="" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateModelInfo({ max_tokens })">
          {{ $t('common.save') }}
        </NButton>
      </div>
      <!-- <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.language') }}</span>
        <div class="flex flex-wrap items-center gap-4">
          <NSelect
            style="width: 140px"
            :value="model"
            :options="languageOptions"
            @update-value="value => appStore.setLanguage(value)"
          />
        </div>
      </div> -->
      <!-- <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[100px]">{{ $t('setting.resetUserInfo') }}</span>
        <NButton size="small" @click="handleReset">
          {{ $t('common.reset') }}
        </NButton>
      </div> -->
    </div>
  </div>
</template>
