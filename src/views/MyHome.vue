<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <div class="col s12 m6 l4">
        <div class="card light-blue bill-card">
          <div class="card-content white-text">
            <span class="card-title">Счет в валюте</span>

            <p class="currency-line">
              <span>12.0 Р</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col s12 m6 l8">
        <div class="card orange darken-3 bill-card">
          <div class="card-content white-text">
            <div class="card-header">
              <span class="card-title">Курс валют</span>
            </div>
            <table>
              <thead>
              <tr>
                <th>Валюта</th>
                <th>Курс</th>
                <th>Дата</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>руб</td>
                <td>12121</td>
                <td>12.12.12</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <loader v-if="loading"></loader>
    <div class="row" v-else>
      <div class="col s12"> <!--class="col s12 m6 l4">-->
        <table><thead>
        <tr>
          <th>ID поста</th>
          <th>Заголовок</th>
          <th>Содержание</th>
        </tr>
        </thead>
          <tbody
            v-for="post in posts"
            v-bind:key="post.id"
          >
          <tr>
            <td> {{ post.id }} </td>
            <td v-html="post.title"></td>
            <td v-html="post.content"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>
<script>
import server from '@/server'
import loader from '@/components/app/MyLoader'

export default {
  components: {
    loader
  },
  data () {
    return {
      posts: null
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    loading () {
      // eslint-disable-next-line no-unused-expressions
      return this.posts === null
    }
  },
  async created () {
    const response = await server.get('http://irealty.local/wp-json/wp/v2/posts') /*  ('http://irealty.local/wp-json/myhome/v1/estates') */
    console.log(response)
    this.posts = response.data.map(post => ({
      id: post.id,
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered
    })

    )
  }
}
</script>
