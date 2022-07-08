<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li :class="{ 'is-active': !showRegister }">
                    <a @click.prevent="showRegister = false">Login</a>
                </li>
                <li :class="{ 'is-active': showRegister }">
                    <a @click.prevent="showRegister = true">Register</a>
                </li>
            </ul>
        </div>
        <div class="auth-form card">
            <div class="card-content">
                <div class="title has-text-centered">
                    <!-- {{ showRegister ? 'Register' : 'Login' }} -->
                    {{ formTitle }}
                </div>

                <form @submit.prevent="onSubmit">
                    <div class="content">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input
                                    v-model="credentials.email"
                                    class="input"
                                    placeholder="e.g. alexsmith@gmail.com"
                                    type="email"
                                >
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input
                                    v-model="credentials.password"
                                    class="input"
                                    placeholder="Enter a Password"
                                    type="password"
                                >
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-right">
                            <p class="control">
                                <button class="button is-info">
                                    {{ formTitle }}
                                </button>
                            </p>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref, computed, reactive } from 'vue';

/*
Register / Login
*/

const showRegister = ref(false);

/*
formTitle
*/

const formTitle = computed(() => {
    return showRegister.value ? 'Register' : 'Login';
});

/*
credentials
*/

const credentials = reactive({
    email: '',
    password: ''
});

/*
onSubmit
*/

const onSubmit = (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
        alert('Please enter an email and password');
        // register
    } else {
        // login
        if(showRegister.value) {
            // register
            console.log('register with', credentials);
        } else {
            // login
            console.log('login with', credentials);
        }
    }
};

</script>
    
<style>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>