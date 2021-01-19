<template>
    <div class="Results col-6">
        <h4>Dates Found :</h4>
        <nasaPicture v-for="picture in pictures" :key="picture" :picture-data="picture" />
    </div>
</template>


<script>
    import { computed } from 'vue'
    import NasaPicture from './NasaPictureComponent'
    import { AppState } from '../AppState'

    export default {
        name: 'Results',
        setup() {
            return {
                pictures: computed(() => AppState.pictures)
            }
        },
        components: { NasaPicture }
    }


</script>


<style scoped>




</style>