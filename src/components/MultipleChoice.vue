<template >

  <section class="src-components-multiple-choice">
       <div class="container">
    <div v-if="items.length" class="table">
      <table class="table  table ">
        <!-- encabezado de la tabla -->
        <tr>
          <th v-for="(col, index) in getCols" :key="index">{{ col }}</th>
        </tr>

        <!-- filas con los datos -->
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="(col, index) in getCols" :key="index">{{ item[col] }}</td>
        </tr>
      </table>
    </div>
  </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-multiple-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        items:[
          {
            pregunta:1,
            respuesta:"B, D"
          },
          {
            pregunta:2,
            respuesta:"C"
          },
          {
            pregunta:3,
            respuesta:"B, E"
          },
        ]
      }
    },
    methods: {

    },
    computed: {
        getCols() {
        return Object.keys(this.items[0])
      }


    }
}


</script>

<style scoped lang="css">
  .src-components-multiple-choice {

  }
</style>
