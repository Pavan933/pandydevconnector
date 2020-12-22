<template>
  <div class="custom-bodypad">
    <div class="row">
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">My Alerts</h4>
            <div class="rounded-legend legend-horizontal legend-top-right float-right">
              <ul>
                <li>
                  <span class="legend-dots" style="background:#ac6ac2"></span>
                  Announcement
                </li>
                <li>
                  <span class="legend-dots" style="background:#00ff37"></span>
                  Notifications
                </li>
              </ul>
            </div>
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr class="type-school-announcement">
                    <td>Yesterday</td>
                    <td>COVID 19 Updates</td>
                    <!-- <td>Measures taken at school</td> -->
                  </tr>
                  <tr
                    v-for="notification in notifications"
                    :key="notification.id"
                    class="type-class-announcement"
                    @click="selectedNotification = notification"
                  >
                    <td>
                      {{
                        todaysDate === notification.createdAt.substring(0, 10)
                          ? 'Today'
                          : notification.createdAt.substring(0, 10)
                      }}
                    </td>
                    <td>{{ notification.subject }}</td>
                    <!-- <td>English Sample Questions</td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectedNotification" class="col-md-8 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              <img class="mr-2" src="~/assets/images/icons/bell.png" />{{ selectedNotification.subject }}
            </h4>
            <div class="alert alert-secondary type-school-announcement" role="alert">
              {{ selectedNotification.message }}.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selectedNotification: undefined
    }
  },
  computed: {
    ...mapState({
      notifications: (state) => state.notification.notifications
    }),
    todaysDate() {
      let date = new Date()
      date = date.toISOString()
      return date.substring(0, 10)
    }
  },
  created() {
    this.$store.dispatch('notification/fetchNotifications', this.$store.getters.getPath)
  }
}
</script>

<style scoped></style>
