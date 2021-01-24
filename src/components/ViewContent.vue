<template>

    <v-container>
        <v-skeleton-loader
        type="card-heading,divider,list-item-three-line">
        <v-card flat>
            <v-card-title>测试一下标题显示测试一下标题显示测试一下标题显示</v-card-title>
            <v-divider></v-divider>
            <v-container>
                <h1>12345678910111213141516
                </h1>
            </v-container>
        </v-card>
        </v-skeleton-loader>
    </v-container>
</template>

<script>
export default {
  name: 'ViewContent',
  data () {
    return ({
      msg: '',
      loading: true
    })
  }
}
</script>
