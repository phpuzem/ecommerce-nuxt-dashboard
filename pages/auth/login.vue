<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                v-model="email"
                prepend-icon="person"
                type="text"
                :error-messages="$store.getters['validation/errors'].email"
              />
              <v-text-field
                id="password"
                label="Password"
                v-model="password"
                name="password"
                prepend-icon="lock"
                type="password"
                :error-messages="$store.getters['validation/errors'].password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: "guest",
  layout: "auth",
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    submit: function() {
      this.$auth.loginWith("local", {
        data: {
          email: this.email,
          password: this.password
        }
      });
    }
  }
};
</script>