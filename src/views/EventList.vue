<template>
  <div class="events" v-for="event in events" :key="event.id">
    <EventCard :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 11101,
          category: "Promotion",
          title: "Portes ouvertes",
          description: "Présentation des activités de éa filière au public.",
          location: "Nos locaux",
          date: "25 novembre 2024",
          time: "08:00",
        },
        {
          id: 11101,
          category: "loisirs",
          title: "Journée ski ",
          description:
            "Activité neige dans ste-croix et à la station des Rasses pour du ski de fond, ski de descente et randonnée.",
          location: "ste-croix",
          date: "14 févrirer 2025",
          time: "08:30",
        },
        {
          id: 11101,
          category: "loisirs",
          title: "semaines spécial",
          description:
            "Voyage à l'etranger avec des activité proposer par les élèves",
          location: "Nos locaux",
          date: "25 novembre 2024",
          time: "08:00",
        },
      ],
    };
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
