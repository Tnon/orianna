<template>
  <div class="login-box">
    <a-form :model="formInline" @submit="handleSubmit">
      <div class="title">沙箱</div>
      <a-form-item>
        <a-input
          v-model:value.trim="formInline.username"
          size="large"
          placeholder="请输入用户名"
        >
          <template v-slot:prefix> <UserOutlined /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value.trim="formInline.password"
          size="large"
          placeholder="请输入密码"
          type="password"
          autocomplete="new-password"
        >
          <template v-slot:prefix> <LockOutlined /></template>
        </a-input>
      </a-form-item>

      <a-form-item class="mt30">
        <a-button
          type="primary"
          html-type="submit"
          size="large"
          :loading="loading"
          block
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { message } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { pCompile } from '@/utils/urlUtils'
import { useRouter } from 'vue-router'
import { useUserToken } from '@/store/modules'
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    //登录结构体
    const state = reactive({
      loading: false,
      formInline: {
        username: '',
        password: ''
      }
    })

    const userTokenStore = useUserToken()
    const router = useRouter()
    const handleSubmit = async () => {
      const { username, password } = state.formInline
      if (username.trim() == '' || password.trim() == '')
        return message.warning('账号或密码不能为空')
      state.loading = true
      const response = await userTokenStore
        .login({
          username,
          password: pCompile(password)
        })
        .finally(() => {
          state.loading = false
        })
      if (response) {
        router.replace('/')
      }
    }
    return {
      ...toRefs(state),
      handleSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100vw;
  height: 100vh;

  background: url('@/assets/images/login-bg.jpg') no-repeat;
  background-position: 10% 40%;
  background-color: #0f1410;
  ::v-deep(.ant-form) {
    width: 400px;
    position: absolute;
    top: 30%;
    right: 15%;
    background: #fff;
    padding: 50px 30px;
    .ant-col {
      width: 100%;
    }
    .mt30 {
      margin-top: 30px;
    }
    .ant-form-item-label {
      padding-right: 6px;
    }
    .ant-input {
      font-size: 14px;
    }
    .title {
      text-align: center;
      font-weight: 800;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.85);
      line-height: 32px;
      margin-bottom: 40px;
    }
  }
}
</style>
