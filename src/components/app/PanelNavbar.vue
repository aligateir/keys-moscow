<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" >
          <i class="material-icons black-text" @click ="$emit('switchSidebar')">dehaze</i>
        </a>
        <span class="black-text">{{ this.date }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdownref"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent = "logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import dateFilter from '@/filters/date.filter'
export default {
  data: () => ({
    formatDate: 'datetime',
    date: null,
    interval: null,
    dropdown: null
  }),
  methods: {
    logout () {
      this.$router.push('login?message=logout')
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.date = dateFilter(new Date(), (this.formatDate))
    }, 1000)
    // eslint-disable-next-line no-undef
    this.dropdown = M.Dropdown.init(this.$refs.dropdownref, {
      constrainWidth: true
    })
  },
  beforeUnmount () {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy()) {
      this.dropdown.destroy()
    }
  }
}

</script>
