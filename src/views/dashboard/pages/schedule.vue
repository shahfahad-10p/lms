<template>
  <v-container
    id="alerts"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card height="510px">
          <v-card-text>
            <base-subheading
              subheading="Select Date"
              />
            <v-date-picker v-model="picker">
            </v-date-picker>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card height="510px">
          <v-card-text>
            <base-subheading subheading="Select Class" />
          </v-card-text>
          <v-list>
            <v-list-item-group v-model="selectedCourse">
              <v-list-item
                v-for="(item, i) in courses"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-text>
            <base-subheading subheading="Select Timings" />
          </v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <base-subheading
                class="picker-class"
                subheading="Start Time"
              />
              <v-time-picker
                class="picker-class"
                v-model="startTime"
                ></v-time-picker>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <base-subheading
                class="picker-class"
                subheading="End Time"
              />
              <v-time-picker
                class="picker-class"
                v-model="endTime"
                ></v-time-picker>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="1"
            >
            </v-col>
            <v-col
              cols="12"
              md="8"
            >
            <a>{{selectedClass.link}}</a>
            </v-col>
            <v-col
              cols="12"
              md="3"
            >
              <v-btn
                color="success"
                class="mr-0"
                @click="onCreate"
              >
                Create
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <base-material-snackbar
      v-model="snackbar"
      type="info"
      v-bind="{
        ['top']: true,
        ['right']: true
      }"
    >
    {{snackBarMessage}}
  </base-material-snackbar>

  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Schedule',

    data: () => ({
      snackbar: false,
      snackBarMessage: '',
      picker: '2020-05-13',
      startTime: '',
      endTime: '',
      color: 'info',
      selectedCourse: '',
      colors: [
        'info',
        'success',
        'warning',
        'error',
      ],
      courses: [
        {
          icon: 'mdi-book',
          text: 'Software Project Management',
          id: 'spm',
        },
        {
          icon: 'mdi-book',
          text: 'Combinatorial Optimizations',
          id: 'co',
        },
        {
          icon: 'mdi-book',
          text: 'Social Network Analysis',
          id: 'sna',
        },
      ],
      selectedClass: {},
    }),

    watch: {
      picker: function (value) {
        this.selectedClass = {}
        this.updateSelectedClass()
      },
      selectedCourse: function (value) {
        this.selectedClass = {}
        this.updateSelectedClass()
      },
    },

    computed: {
      ...mapState(['classes']),
      parsedDirection () {
        return this.direction.split(' ')
      },
    },
    methods: {
      ...mapActions(['createClass']),
      async onCreate () {
        if (this.picker && (this.selectedCourse || this.selectedCourse === 0)) {
          const payload = {
            course: this.courses[this.selectedCourse].id,
            date: this.picker,
          }
          const response = await this.createClass(payload)
          if (response) {
            this.updateSelectedClass()
            this.snackBarMessage = `${this.courses[this.selectedCourse].text} scheduled on ${this.picker}`
            this.snackbar = true
          }
        }
      },
      updateSelectedClass: function () {
        if (this.picker && (this.selectedCourse || this.selectedCourse === 0)) {
          const selectedClass = this.classes[this.courses[this.selectedCourse].id].find(cls => cls.date === this.picker)
          this.selectedClass = selectedClass || {}
        }
      },
    },
  }
</script>

<style lang="sass">
  .v-card--material
    &__avatar
      position: relative
      top: -64px
      margin-bottom: -32px

    &__heading
      position: relative
      top: -40px
      transition: .3s ease
      z-index: 1
  .picker-class
    margin: 10px
</style>
