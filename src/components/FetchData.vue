<template>
    <div>
        <slot name="loading" v-bind="{ isPending }"></slot>
        <slot name="default"  v-bind="{ error, refresh:fetch, data}" ></slot>
        <slot name="error"  v-bind="{ error, refresh:fetch, data}" ></slot>
    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: 'FetchData',
        props: {
            url: {
                type: String,
                required: true
            },
            delay: {
                type: Number,
                default: 200
            }
        },
        data() {
            return {
                data: null,
                isPending: true,
                error: null
            }
        },
        watch: {
            url: {
                handler() {
                    setTimeout(this.fetch, this.delay);
                },
                immediate: true
            }
        },
        methods: {
            fetch() {
                this.isPending = true
                axios.get(this.url)
                    .then(response => {
                        this.error = null
                        this.data = response.data
                        this.isPending = false
                    })
                    .catch(error => {
                        this.error = error
                        this.isPending = false
                    })
            }
        },
    }
</script>
