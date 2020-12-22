<template>
  <div class="custom-bodypad">
    <div class="row">
      <div class="col-lg-12">
        <div id="calendar" class="full-calendar"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { mapState } from 'vuex'

export default {
  data() {
    return {
      calendar: undefined,
       events: [     
          {
          title: 'English Literature',     
           url: 'video-call-student',     
          start: '2020-07-30T16:00:00'
        },  
         {
          title: 'Mathematics',     
           url: 'video-call-student',     
          start: '2020-07-30T15:00:00'
        },    
         {
          title: 'Arts and Design',     
           url: 'video-call-student',     
          start: '2020-07-30T14:00:00'
        },    
         {
          title: 'Civics',     
           url: 'video-call-student',     
          start: '2020-07-30T13:00:00'
        },  
          {
          title: 'English Literature',     
           url: 'video-call-student',     
          start: '2020-07-31T16:00:00'
        },  
         {
          title: 'Mathematics',     
           url: 'video-call-student',     
          start: '2020-07-31T15:00:00'
        },    
         {
          title: 'Arts and Design',     
           url: 'video-call-student',     
          start: '2020-07-31T14:00:00'
        },    
         {
          title: 'Civics',     
           url: 'video-call-student',     
          start: '2020-07-31T13:00:00'
        },  
         {
          title: 'History',     
           url: 'video-call-student',     
          start: '2020-07-31T12:00:00'
        },    
         {
          title: 'Science',     
           url: 'video-call-student',     
          start: '2020-07-31T11:00:00'
        },   
        {
          title: 'English Literature',     
           url: 'video-call-teacher',     
          start: '2020-08-15T16:00:00'
        },  
         {
          title: 'Mathematics',     
           url: 'video-call-teacher',     
          start: '2020-08-15T15:00:00'
        },    
         {
          title: 'Arts and Design',     
           url: 'video-call-teacher',     
          start: '2020-08-15T14:00:00'
        },    
         {
          title: 'Civics',     
           url: 'video-call-teacher',     
          start: '2020-08-15T13:00:00'
        },  
         {
          title: 'History',     
           url: 'video-call-teacher',     
          start: '2020-08-15T12:00:00'
        },    
         {
          title: 'Science',     
           url: 'video-call-teacher',     
          start: '2020-08-15T11:00:00'
        },
        {
          title: 'Mathematics',     
           url: 'video-call-teacher',     
          start: '2020-08-18T15:00:00'
        },    
         {
          title: 'Arts and Design',     
           url: 'video-call-teacher',     
          start: '2020-08-18T14:00:00'
        },    
         {
          title: 'Civics',     
           url: 'video-call-teacher',     
          start: '2020-08-18T13:00:00'
        },  
         {
          title: 'History',     
           url: 'video-call-teacher',     
          start: '2020-08-18T12:00:00'
        },    
         {
          title: 'Science',     
           url: 'video-call-teacher',     
          start: '2020-08-18T11:00:00'
        }, 
      ]
    }
  },
  computed: {
    ...mapState({
      schedules: (state) => state.calendar.schedules
    })
  },

  watch: {
    schedules(_val) {
      this.reloadCalendar()
    }
  },
  mounted() {
    this.reloadCalendar()
  },

  created() {
    this.$store.dispatch('calendar/fetchSchedules', this.$store.getters.getPath)
  },
  methods: {
    reloadCalendar() {
      if (this.calendar) {
        this.calendar.destroy()
        this.calendar = undefined
      }

      this.loadCalendar()
    },
    loadCalendar() {
      const calendarEl = document.getElementById('calendar')

      this.calendar = new FullCalendar.Calendar(calendarEl, {
        aspectRatio: 2,
        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],

        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        eventLimit: true,
        /*   eventRender(info) {
          const tooltip = new Tooltip(info.el, {
            title: info.event.extendedProps.description,
            placement: 'top',
            trigger: 'hover',
            container: 'body'
          })
        }, */
        dayClick(date, jsEvent, view) {
          $('#calendar').fullCalendar('gotoDate', date)
          $('#calendar').fullCalendar('changeView', 'month') // This would take you to the respective month
        },
        eventClick: this.handleEventClick,
        events: this.events
      })

      this.calendar.render()
    },
    handleEventClick(info) {
      console.log('event click ' + info.event.title)
      if (this.$store.state.role === 'STUDENT')
        this.$router.push({ name: 'videoCall-student-id', params: { id: info.event.meetingId } })
      else if (this.$store.state.role === 'TEACHER')
        this.$router.push({ name: 'videoCall-teacher-id', params: { id: info.event.meetingId } })
    }
  }
}
</script>

<style scoped>
.popper,
.tooltip {
  position: absolute;
  z-index: 9999;
  background: #ffc107;
  color: black;
  width: 150px;
  border-radius: 3px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
}
.style5 .tooltip {
  background: #1e252b;
  color: #ffffff;
  max-width: 200px;
  width: auto;
  font-size: 0.8rem;
  padding: 0.5em 1em;
}
.popper .popper__arrow,
.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
}

.tooltip .tooltip-arrow,
.popper .popper__arrow {
  border-color: #ffc107;
}
.style5 .tooltip .tooltip-arrow {
  border-color: #1e252b;
}
.popper[x-placement^='top'],
.tooltip[x-placement^='top'] {
  margin-bottom: 5px;
}
.popper[x-placement^='top'] .popper__arrow,
.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.popper[x-placement^='bottom'],
.tooltip[x-placement^='bottom'] {
  margin-top: 5px;
}
.tooltip[x-placement^='bottom'] .tooltip-arrow,
.popper[x-placement^='bottom'] .popper__arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.tooltip[x-placement^='right'],
.popper[x-placement^='right'] {
  margin-left: 5px;
}
.popper[x-placement^='right'] .popper__arrow,
.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
.popper[x-placement^='left'],
.tooltip[x-placement^='left'] {
  margin-right: 5px;
}
.popper[x-placement^='left'] .popper__arrow,
.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
</style>
