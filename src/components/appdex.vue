<template>
    <div id="app" class="col-md-6">
        <input :value="value" @input="updateValue">
		<h1>{{ value }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        };
    },
    methods: {
        updateValue(event) {
            this.value = event.target.value;
        }
    }	
};
</script>