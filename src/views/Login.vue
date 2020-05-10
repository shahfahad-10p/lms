<template>
<v-app>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="4"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Login
            </div>

            <!-- <div class="subtitle-1 font-weight-light">
              Complete your profile
            </div> -->
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Password"
                    type="password"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="submit"
                  >
                    Submit
                  </v-btn>
                </v-col>

              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

    </v-row>
  </v-container>
</v-app>
</template>

<script>

  // import Router from 'vue-router'

  export default {
    name: 'Login',
    methods: {
      submit () {
        this.$router.push('dashboard')
      },
    },
  }
</script>
