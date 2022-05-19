<template>
  <div class="hello">
    <h1>Notes</h1>
    <button v-on:click="addNote">Add Note</button>
    <div style="margin-left: 20px;">
      <div v-for="note in notes" v-bind:key="note.id">
        <h2>{{ note.name }}</h2>
        <p>{{ note.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  computed: {
    notes: function () {
      return this.$store.state.notes
    }
  },
  methods: {
    addNote () {
      this.$store.commit('addNote')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
