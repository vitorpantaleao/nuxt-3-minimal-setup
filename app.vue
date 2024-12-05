<template>
  <div>
    <h1>Olá</h1>
    <Button>Click me</Button>
    <Calendar v-model="value" :weekday-format="'short'" class="rounded-md border" />
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { getLocalTimeZone, today } from '@internationalized/date';

const value = ref(today(getLocalTimeZone()));
</script>
