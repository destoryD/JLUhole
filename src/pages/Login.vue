<template>
<div class="background" style="">
  <v-card
  elevation="2"
  class="ma-2 pa-3"
>
<v-row justify="center"><v-card-title>欢迎来到树洞世界</v-card-title></v-row>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="username"
      label="账号"
      required
    ></v-text-field>

    <v-text-field
      v-model="passwd"
      :rules="passwdRules"
      label="密码"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || '勾选才能继续!']"
      label="同意 《服务条款》"
      required
    ></v-checkbox>
    <router-link to="/register">
<span class="text-caption" style="float:right;color:rgba(0,0,0,0.6)">第一次使用？点我注册</span>
    </router-link><br>
    <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      登录
    </v-btn>
  </v-form>
</v-card>
</div>
</template>

<script>
export default {
  data: () => ({
    emailRules: [
      v => !!v || '邮箱必须输入',
      v => /.+@mails.jlu.edu.cn/.test(v) || '邮箱必须是校园网邮箱'
    ]
  })
}
</script>

<style scoped>
.background{
  background: url("https://s3.ax1x.com/2021/02/24/yXmcnK.jpg");
}
</style>
