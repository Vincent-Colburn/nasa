<template>
    <!-- v-if="state.picture.id" this might need to be below. This is used to only populate if it has an active picture selected, however at this point I don't know how the data breaks up-->
    <div class="activePicture col-6">
        <h4>Selected Nasa Stuff : </h4>
        <nasa-picture-component test-prop="test string" :picture-data="state.picture" />

        {{ state.picture.explanation }}

    </div>
</template>


<script>
    import { computed, reactive } from 'vue'
    import { AppState } from '../AppState'
    import NasaPictureComponent from './NasaPictureComponent'
    export default {
        name: 'ActivePicture',
        setup() {
            const state = reactive({
                picture: computed(() => AppState.activePicture)
            })
            return { state }
        },
        components: { NasaPictureComponent }
    }


</script>


<style scoped>




</style>