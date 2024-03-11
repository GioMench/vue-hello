const { createApp, ref } = Vue

createApp({
    data() {
        const img = ref('./img.moon.jpeg')
        return {
            message: 'Hello Vue.js!' ,
            img,

        }
    }

}).mount('#app')



