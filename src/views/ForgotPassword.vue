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
              Forgot Password
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
                  md="2"
                  class="text-right"
                >
                <router-link :to="{ name: 'Login'}">Back</router-link>
                  <!-- <v-btn
                    color="success"
                    class="mr-0"
                    @click="submit"
                  >
                    Register
                  </v-btn> -->
                </v-col>

                <v-col
                  cols="12"
                  md="10"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="submit"
                  >
                    Request Link
                  </v-btn>
                </v-col>

              </v-row>

            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

    </v-row>
  </v-container>
  <base-material-snackbar
    v-model="snackbar"
    type="info"
    v-bind="{
      ['top']: true,
      ['right']: true
    }"
  >
    An email has been sent to your account to reset password.
  </base-material-snackbar>
</v-app>
</template>

<script>

  // import Router from 'vue-router'

  export default {
    name: 'ResetPassword',
    data: () => ({
      direction: 'top center',
      snackbar: false,
    }),
    methods: {
      submit () {
        this.snackbar = true
        // this.$router.push('/')
      },
    },
    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },
  }
</script>
