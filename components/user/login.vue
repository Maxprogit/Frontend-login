<template>
    <v-card active-class="cardlogin">
        <v-card width="500" color="#4DB6AC">
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form v-model="formularioValido">
                    <v-text-field label="Correo Electronico"
                    placeholder="Correo Electronico" 
                    v-model="correoElectronico"/>
                </v-form>
            </v-card-text>
            <v-card-action>
                Boton para iniciar sesion
            </v-card-action>
        </v-card>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            formularioValido: false,
            correoElectronico: ''
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
</style>