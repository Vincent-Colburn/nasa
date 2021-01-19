<template>
    <div class="nasaPicture" @click="selectPicture()">

        <img :src="``" alt="">
        <p>
            {{}}
        </p>
    </div>
</template>


<script>
    import { nasaService } from '../services/NasaService'
    export default {
        name: 'NasaPicture',
        props: {
            nasaData: Object,
            testProp: String
        },
        setup(props) {
            return {
                selectPicture() {
                    console.log(props.nasaData)
                    nasaService.selectPicture(props.nasaData)
                }
            }
        }

    }


</script>


<style scoped>




</style>