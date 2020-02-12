<template>
  <div>
    <h1>Here is a random weather list:</h1>
    <ul>
      <li v-for="(weather, i) in weathers" :key="i">
        <ul>
          <li><strong>Date</strong>: {{ weather.date }}</li>
          <li><strong>F</strong>: {{ weather.temperatureF }}</li>
          <li><strong>C</strong>: {{ weather.temperatureC }}</li>
          <li><strong>Summary</strong>: {{ weather.summary }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import http from "@/http.js";

export default {
  name: "Weather",
  data() {
    return {
      weathers: []
    };
  },
  async created() {
    const weathers = await http.get("WeatherForecast");
    this.weathers = weathers.data;
  }
};
</script>

<style scoped></style>
