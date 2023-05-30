<template>
    <div class="form ">
        <div class="card log-form has-background-link-">
            <div class="card-content"> 
                <div class="title has-text-centered">
                    {{formTitle}}
                </div>
                <div class="content">
                    <form >
                        <div class="field">
                            <label class="label">Email</label> 
                            <div class="control"> 
                                <input v-model="email" class="input" type="email" placeholder="Insert your email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                                <input v-model="password" class="input" type="password" placeholder="Insert your password">
                            </div>
                        </div>
                        <div v-if="errMsg">{{ errMsg }}</div>
                        <div class="field is-grouped is-grouped-right"> 
                            <p class="control">
                                <button @click="register" class="button is-link is-outline">
                                    {{ formTitle }}
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
    import {  ref } from 'vue';
    import{ useRouter } from 'vue-router';
    // import { useFormStore } from '@/stores/formStore';
    import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const formTitle = ref('Sign up');
    const errMsg = ref()

    const register = () =>{
        //need .value because ref()
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(()=>{
            console.log("Sucessfully regirestered!");
            router.push('/welcome');
        })
        .catch((error)=>{
            console.log(error.code);
            switch (error.code){
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect Password";
                    break;

            }
        })
    }


</script>

<style scoped>
.log-form {
    max-width: 400px;
    margin: 0 auto;
}
</style> 