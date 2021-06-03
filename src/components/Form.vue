<template>

  <section class="src-components-form">
     <section class="src-components-form">
    <div class="container ">
      <h2 class="titulo">Formulario</h2>
      <hr />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- ------------------------------------------------------------------------ -->
        <!-- Campo nombre -->
        <validate tag="div">
          <label for="nombre"><i>Nombre</i></label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control my-3"
            autocomplete="off"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreLengthMin"
            :maxlength="nombreLengthMax"
            no-espacios
            no-numero
          />
          
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo
            </div>
            <div slot="no-numero" class="alert alert-danger mt-1">
              No se permiten numeros
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Se deben ingresar como mínimo {{ nombreLengthMin }} caracteres
            </div>
            <div
              v-if="formData.nombre.length == nombreLengthMax"
              class="alert alert-danger mt-1"
            >
              Máximo de caracteres {{ nombreLengthMax }} alcanzados
            </div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="descripcion"><i>Descripcion</i></label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            class="form-control my-3"
            autocomplete="off"
            v-model.trim="formData.descripcion"
            required
           
          />
         <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
          </field-messages>
        </validate>
        
        <validate tag="div">
          <label for="importe"><i>Importe</i></label>
          <input
            type="text"
            id="importe"
            name="importe"
            class="form-control my-3"
            autocomplete="off"
            v-model.number="formData.importe"
            required
            solo-numeros
          />
          
          <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="solo-numeros" class="alert alert-danger mt-1">
              solo se permiten numeros
            </div>
          </field-messages>
        </validate>


        <button
          class="btn btn-success my-4"
          :disabled="formState.$invalid"
          type="submit"
        >
          Enviar
        </button>
      </vue-form>
      <hr />

    <div v-if="post.length" class="table">
     
     
       <h1>Historial de gastos</h1>
       <br>

 <validate tag="div">
          <label for="presupuesto"><i>Presupuesto</i></label>
          <input
            type="text"
            id="presupuesto"
            name="presupuesto"
            class="form-control my-3"
            v-model.number="presupuesto"
            
          />
        
        </validate>


       <br>
      <table class="table  table-dark ">
          <tr>
             <th >NOMBRE</th>
              <th>DESCRIPCÍON</th>
              <th>IMPORTE</th>
              <th>GENERADO</th> 
          </tr>

          <tr v-for="(post, index) in post" :key="index">
             <td>{{post.nombre}}</td>
              <td>{{post.descripcion}}</td>
              <td>{{post.importe}}</td>
              <td>{{post.fecha}}</td>
            
          </tr>
          <tr>
               <td ></td>
               <td>Total</td>
               <td :style="colorTotal" ><h6>{{total}}</h6></td>
               <td></td>
          </tr>
      </table>
            
    </div>  

     
    </div>
  </section>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-form',
    props: [],
    mounted () {

    },
    data () {
      return {
      formData : this.getInicialData(),
      formState: {},
      nombreLengthMin:3,
      nombreLengthMax:15,
      post:[],
      total:0,
      presupuesto:10000
      }
    },
     methods: {

    

    getInicialData() {
      const today = new Date()
         let dia = `${today.getDate()}/${1+today.getMonth()}/${today.getFullYear()} - ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

      return {
        fecha: dia,
         nombre: '',
         descripcion:'',
         importe:'',
       }
    },


    enviar() {
      console.log({...this.formData})

      this.post.push(this.formData)
      this.total= this.total+this.formData.importe
      this.formData = this.getInicialData()
      this.formState._reset()

    }
  },
    computed: {
    
    colorTotal(){
      let result
      if (this.presupuesto < this.total) {
        result = {color: "red" }
      }else{
      if (this.total<1000) {
        result = {color: "green" }
      }else if(this.total>1000 &&this.total<5000){
        result = { color: "magenta" }
      }else{
        result = { color: "orange" }
      }
      }
      return result
      },

    } 

    
}


</script>

<style scoped lang="css">
  .src-components-form {
  
  }
  
 

</style>
