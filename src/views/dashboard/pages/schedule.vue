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
            <v-list-item-group v-model="courseList">
              <v-list-item
                v-for="(item, i) in items"
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
                v-model="startTime"
                ></v-time-picker>
            </v-col>
            <v-col
              cols="12"
              md="11"
              class="text-right"
            >
              <v-btn
                color="success"
                class="mr-0"
              >
                Create
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'Schedule',

    data: () => ({
      picker: '2020-05-13',
      startTime: '',
      color: 'info',
      courseList: '',
      colors: [
        'info',
        'success',
        'warning',
        'error',
      ],
      items: [
        {
          icon: 'mdi-book',
          text: 'SPM',
        },
        {
          icon: 'mdi-book',
          text: 'CO',
        },
        {
          icon: 'mdi-book',
          text: 'SNA',
        },
      ],
    }),

    watch: {
      picker: function (value) {
        console.log('ON DATE CHANGE : ', value)
      },
      startTime: function (value) {
        console.log('ON START TIME CHANGE : ', value)
      },
    },

    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },
    methods: {

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
