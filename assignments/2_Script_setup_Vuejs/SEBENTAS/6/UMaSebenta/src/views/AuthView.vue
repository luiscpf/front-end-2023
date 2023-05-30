<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li :class="{'is-active' : !registroTab}">
                    <a @click.prevent="registroTab=false">Login</a>
                </li>
                <li :class="{'is-active' : registroTab}">
                    <a @click.prevent="registroTab=true">Registro</a>
                </li>
            </ul>
        </div>
        <div class="card auth-form">
            <div class="card-content"> 
                <div class="title has-text-centered">
                    {{formTitle}}
                </div>
                <div class="content">
                    <form @submit.prevent="onSubmit">
                        <div class="field">
                            <label class="label">Email</label> 
                            <div class="control"> 
                                <input v-model="credenciais.email" class="input" type="email" placeholder="Insert your email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input v-model="credenciais.password" class="input" type="password" placeholder="Insert your password">
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-right"> 
                            <p class="control">
                                <button class="button is-primary">
                                    {{ formTitle}}
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, reactive, ref } from 'vue';
    import { useAuthStore } from '@/stores/authStore';

    const authStore = useAuthStore();

    const registroTab = ref(false);

    const formTitle = computed(()=>registroTab.value?'Registro':'Login');

    const credenciais = reactive({
        email:'',
        password: ''
    });

    const onSubmit = () => {
        // console.log('form enviado');
        if (!credenciais.email || !credenciais.password) { 
            alert('Email ou password inválido') 
        }
        else {
            if(registroTab.value) {
                console.log('Registro', credenciais);
                authStore.registerUser(credenciais);
              
            } else {
                console.log('Login', credenciais);
                authStore.loginUser(credenciais);
             
            }
        }
    }


</script>

<style>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style> 
