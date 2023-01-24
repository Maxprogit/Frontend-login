<template>
    <v-card active-class="cardlogin">
        <v-card width="500" color="#4DB6AC">
            <v-card-title class="title">Login</v-card-title>
            <v-card-text>
                <v-row justify="center" align="center">
                    <v-col cols="4" align-self="center">
                        <img src="../../assets/images/kenny.png" class="imgLogin">
                    </v-col>
                    <v-col cols="8" align-self="center">
                
                <v-form ref="formLogin">
                    <v-text-field label="Correo Electronico"
                    placeholder="Correo Electronico" 
                    v-model="correoElectronico"
                    :rules="validarCorreo"/>
                    <v-text-field label="Password"
                    placeholder="Password" 
                    v-model="password"
                    :rules="validarPassword"/>
                    
                </v-form>
                </v-col>
            </v-row>
            </v-card-text>
            <v-card-action>
                <v-btn class="btnLogin" rounded block @click="loginBackend">
                    Inciar Sesion
                </v-btn>
            </v-card-action>
        </v-card>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            
            correoElectronico: '',
            validarCorreo:[
            v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            validarPassword:[
                value => value.length >= 6 || 'Min 6 characters'
            ]
        }
    },
    methods: {
        loginBackend () {
            const valid = this.$refs.formLogin.validate()
            if(valid){
                alert('presionaste el boton')
            } else {
                alert('No cumpliste las reglas')
            }
            
        }
    }
}
</script>

<style scoped>
    .cardlogin {
        background-color: darkcyan;
        border-radius: 10px;
        width: 500px;
        height: 300px;
    }
    .imgLogin {
        width: 100%;
        height: 100%;
    }
    .btnLogin {
        background-color: grey!important;
        color: blue  !important;
    }
    .title {
        font-size: 30px;
        justify-content: center;
        color: maroon;
        font-weight: 700;
    }
</style>