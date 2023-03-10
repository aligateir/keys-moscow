<template>
  <ul class="sidenav app-sidenav" :class="{open: modelValue}" >
    <router-link
      v-for="link in links"
      :key="link.url"
      v-slot="{isActive}"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <li :class="[isActive && 'active']"> <!--active-class="active"-->
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  data: () => ({
    links: [
      { title: 'Счет', url: '/', exact: true },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' },
      { title: 'Объявления', url: '/post' }
    ]
  })
}
</script>
