<template>
  <div class="contactus">
    <div class="container">
      <div class="col-lg-12">
        <h1>Esta é a Página de Configuração</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </div>

      <!-- Início select listar impressoras-->
      <div class="row">
        <div class="col-md-12">
          <div class="form-group row">
            <div class="col-xs-4">
              <label for="sel2">Listar Impressoras Disponíveis</label>
              <select class="form-control" v-model="currentPrinter">
                <option v-for="printer in printers" v-bind:key="printer" v-bind:value="printer">{{ printer }}</option>
              </select>
              <span class="form-group row">
                <button class="btn btn-primary" @click="settingsConfig()" type="button">Gravar Configuração</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- Fim select listar impressoras'-->

      <!-- Início textarea - comment'-->
      <div class="form-group">
        <label for="comment">Escreva Algo Aqui:</label>
          <textarea v-model="textarea_field" class="form-control" name="" rows="5" cols="30"></textarea>
      </div>
      <!-- Fim textarea - comment'-->

      <button class="btn btn-primary" @click="printTextAreaContent()" :disabled="!currentPrinter">Testar Impressão</button>
    </div>

    <div v-if="printing" class="container">
      <div style="white-space:pre-line;">
        {{textarea_field}}
      </div>
    </div>
  </div>
</template>

<script src="./Configuration.js"/>

<style scoped>
</style>

