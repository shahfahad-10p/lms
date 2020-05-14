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

              <!-- <hr role="separator" aria-orientation="horizontal" class="mt-2 v-divider theme--light"> -->
              <v-divider class="mb-1" />

              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="text-left"
                >
                  <router-link :to="{ name: 'ForgotPassword'}">Forgot Password ?</router-link>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                  class="text-right"
                >
                  <router-link :to="{ name: 'Register'}">Sign Up</router-link>
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
    data: () => ({
      direction: 'top center',
      snackbar: true,
    }),
    methods: {
      submit () {
        this.$router.push('schedule')
      },
    },
    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },
  }
</script>
